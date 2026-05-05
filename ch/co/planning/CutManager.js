import { applyDashShader } from '../mesh/dashShader';
import { ResectionPlane } from './ResectionPlane';
import { cutMesh } from '../mesh/cutMesh';
import { validateCommand } from './stateMachine';
const SEGMENT_GAP = 3;
export class CutManager {
    constructor(scene, bone, ui) {
        this.state = 'plane_active';
        this.twoCutMode = false;
        this.inactive = null;
        this.segments = {
            proximal: null, middle: null, distal: null,
        };
        this.scene = scene;
        this.ui = ui;
        this.bone = bone;
        bone.castShadow = true;
        bone.receiveShadow = true;
        scene.add(bone);
        bone.geometry.computeBoundingBox();
        this.plane = new ResectionPlane(bone.geometry.boundingBox);
        this.dash = applyDashShader(bone.material);
        this.syncDash();
        ui.onModeToggle(() => this.toggleMode());
        ui.setTwoCutMode(false);
        this.syncUI();
    }
    handleCommand(cmd) {
        const ctx = this.buildContext();
        const result = validateCommand(this.state, cmd, ctx);
        if (!result.allowed)
            return;
        const prevState = this.state;
        this.state = result.newState;
        switch (cmd) {
            case 'up':
                this.movePlane('up');
                break;
            case 'down':
                this.movePlane('down');
                break;
            case 'cut':
                if (!this.executeCut()) {
                    this.state = prevState;
                    return;
                }
                break;
            default:
                this.toggleSegment(cmd.replace('toggle_', ''));
                break;
        }
        this.ui.setLastCommand(`Heard: "${cmd.replace('_', ' ')}"`);
        this.syncUI();
    }
    buildContext() {
        return {
            hasBone: this.bone !== null,
            hasProximal: this.segments.proximal !== null,
            hasDistal: this.segments.distal !== null,
            hasMiddle: this.segments.middle !== null,
            twoCutMode: this.twoCutMode,
        };
    }
    enabledCommands() {
        const all = ['up', 'down', 'cut', 'toggle_proximal', 'toggle_middle', 'toggle_distal'];
        const ctx = this.buildContext();
        const enabled = new Set();
        for (const cmd of all) {
            if (validateCommand(this.state, cmd, ctx).allowed)
                enabled.add(cmd);
        }
        return enabled;
    }
    syncUI() {
        this.ui.setState(this.state);
        this.ui.syncButtons(this.enabledCommands(), this.state === 'plane_active' || this.state === 'listening');
    }
    toggleMode() {
        if (this.state !== 'plane_active' && this.state !== 'listening')
            return;
        this.twoCutMode = !this.twoCutMode;
        this.ui.setTwoCutMode(this.twoCutMode);
        this.syncUI();
    }
    movePlane(direction) {
        const atLimit = direction === 'up' ? this.plane.isAtMax() : this.plane.isAtMin();
        if (atLimit && this.inactive && this.bone) {
            const iz = this.worldZOf(this.inactive);
            const az = this.worldZOf(this.bone);
            const shouldSwitch = direction === 'up' ? iz.min > az.min : iz.max < az.max;
            if (shouldSwitch) {
                this.switchToInactive(direction === 'up' ? 'min' : 'max');
                return;
            }
        }
        if (direction === 'up')
            this.plane.moveUp();
        else
            this.plane.moveDown();
        this.syncDash();
    }
    executeCut() {
        if (!this.bone)
            return false;
        try {
            const oldBone = this.bone;
            const halves = cutMesh(oldBone, this.plane.getZ());
            this.disposeMesh(oldBone);
            this.placeCutResults(halves.proximal, halves.distal);
            return true;
        }
        catch (err) {
            console.error('Cut failed:', err);
            this.ui.setLastCommand('Cut failed');
            return false;
        }
    }
    placeCutResults(proximal, distal) {
        this.scene.add(proximal);
        this.scene.add(distal);
        if (this.state === 'first_cut_done') {
            proximal.position.z = SEGMENT_GAP;
            this.bone = distal;
            this.inactive = proximal;
            this.reattachPlane(this.bone);
            return;
        }
        if (this.twoCutMode) {
            this.assignThreeSegments(proximal, distal);
        }
        else {
            this.assignTwoSegments(proximal, distal);
        }
        this.bone = null;
    }
    assignTwoSegments(proximal, distal) {
        proximal.position.z = SEGMENT_GAP;
        distal.position.z = -SEGMENT_GAP;
        this.segments.proximal = proximal;
        this.segments.distal = distal;
    }
    assignThreeSegments(proximal, distal) {
        proximal.geometry.computeBoundingBox();
        distal.geometry.computeBoundingBox();
        const cutAboveInactive = proximal.geometry.boundingBox.max.z >=
            (this.inactive?.geometry.boundingBox?.max.z ?? -Infinity);
        if (cutAboveInactive) {
            this.segments.proximal = proximal;
            this.segments.middle = distal;
            this.segments.distal = this.inactive;
        }
        else {
            this.segments.proximal = this.inactive;
            this.segments.middle = proximal;
            this.segments.distal = distal;
        }
        if (this.segments.proximal)
            this.segments.proximal.position.z = SEGMENT_GAP;
        if (this.segments.distal)
            this.segments.distal.position.z = -SEGMENT_GAP;
        this.inactive = null;
    }
    reattachPlane(mesh) {
        mesh.geometry.computeBoundingBox();
        this.inactive?.geometry.computeBoundingBox();
        this.plane.recalculate(mesh.geometry.boundingBox);
        this.dash = applyDashShader(mesh.material);
        this.syncDash();
    }
    toggleSegment(name) {
        const mesh = this.segments[name];
        if (!mesh)
            return;
        mesh.visible = !mesh.visible;
    }
    dispose() {
        if (this.bone)
            this.disposeMesh(this.bone);
        if (this.inactive)
            this.disposeMesh(this.inactive);
        for (const seg of Object.values(this.segments)) {
            if (seg)
                this.disposeMesh(seg);
        }
        this.bone = null;
        this.inactive = null;
        this.segments = { proximal: null, middle: null, distal: null };
    }
    switchToInactive(startAt) {
        if (!this.bone || !this.inactive)
            return;
        this.dash.setDashVisible(false);
        [this.bone, this.inactive] = [this.inactive, this.bone];
        this.bone.geometry.computeBoundingBox();
        this.plane.recalculate(this.bone.geometry.boundingBox);
        if (startAt === 'min')
            this.plane.setToMin();
        else
            this.plane.setToMax();
        this.dash = applyDashShader(this.bone.material);
        this.syncDash();
    }
    syncDash() {
        this.dash.setPlaneZ(this.plane.getZ() + (this.bone?.position.z ?? 0));
    }
    worldZOf(mesh) {
        mesh.geometry.computeBoundingBox();
        const bb = mesh.geometry.boundingBox;
        return { min: bb.min.z + mesh.position.z, max: bb.max.z + mesh.position.z };
    }
    disposeMesh(mesh) {
        this.scene.remove(mesh);
        mesh.geometry.dispose();
        mesh.material.dispose();
    }
}
//# sourceMappingURL=CutManager.js.map