import { Point } from "./Point.js";

// ============================================================================
// 制御点クラス
// ============================================================================
export class ControlPoint extends Point {
    constructor(from, to) {
        super(0, 0);
        // 頂点オブジェクト
        this.from = from;
        this.to = to;
        // 座標
        this.x = (from.x + to.x) / 2;
        this.y = (from.y + to.y) / 2 - 50;
    }

    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

}
