import { Vector3 } from 'three';
const MARGIN_RATIO = 0.05;
export class ResectionPlane {
    constructor(bounds) {
        this.z = 0;
        this.minZ = 0;
        this.maxZ = 0;
        this.step = 0;
        this.recalculate(bounds);
    }
    moveUp() {
        this.z = Math.min(this.z + this.step, this.maxZ);
    }
    moveDown() {
        this.z = Math.max(this.z - this.step, this.minZ);
    }
    getZ() { return this.z; }
    isAtMax() { return this.z >= this.maxZ; }
    isAtMin() { return this.z <= this.minZ; }
    setToMin() { this.z = this.minZ; }
    setToMax() { this.z = this.maxZ; }
    recalculate(bounds) {
        const size = new Vector3();
        bounds.getSize(size);
        this.step = size.z * MARGIN_RATIO;
        this.minZ = bounds.min.z + this.step;
        this.maxZ = bounds.max.z - this.step;
        this.z = (bounds.min.z + bounds.max.z) / 2;
    }
}
//# sourceMappingURL=ResectionPlane.js.map