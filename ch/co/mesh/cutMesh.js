import * as THREE from 'three';
import { Evaluator, Brush, INTERSECTION } from 'three-bvh-csg';
const PADDING = 50;
export function cutMesh(bone, planeZ) {
    bone.geometry.computeBoundingBox();
    const bounds = bone.geometry.boundingBox;
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    bounds.getSize(size);
    bounds.getCenter(center);
    const boxW = size.x + PADDING;
    const boxH = size.y + PADDING;
    const boxD = size.z + PADDING;
    const evaluator = new Evaluator();
    evaluator.attributes = ['position', 'normal'];
    const boneBrush = makeBrush(bone.geometry, bone.material);
    const proxBrush = makeBoxBrush(boxW, boxH, boxD, center.x, center.y, planeZ + boxD / 2);
    const distBrush = makeBoxBrush(boxW, boxH, boxD, center.x, center.y, planeZ - boxD / 2);
    const proxResult = evaluator.evaluate(boneBrush, proxBrush, INTERSECTION);
    const distResult = evaluator.evaluate(boneBrush, distBrush, INTERSECTION);
    const material = bone.material;
    return {
        proximal: new THREE.Mesh(proxResult.geometry, material.clone()),
        distal: new THREE.Mesh(distResult.geometry, material.clone()),
    };
}
function makeBrush(geometry, material) {
    const geo = geometry.clone();
    if (geo.hasAttribute('uv'))
        geo.deleteAttribute('uv');
    const brush = new Brush(geo, material);
    brush.updateMatrixWorld();
    brush.prepareGeometry();
    return brush;
}
function makeBoxBrush(w, h, d, cx, cy, cz) {
    const geo = new THREE.BoxGeometry(w, h, d);
    geo.deleteAttribute('uv');
    geo.translate(cx, cy, cz);
    const brush = new Brush(geo);
    brush.updateMatrixWorld();
    brush.prepareGeometry();
    return brush;
}
//# sourceMappingURL=cutMesh.js.map