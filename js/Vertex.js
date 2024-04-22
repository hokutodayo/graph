import { Point } from "./Point.js";

// ============================================================================
// 頂点クラス
// ============================================================================
export class Vertex extends Point {
    constructor(x, y) {
        super(x, y);
        // アニメーション
        this.maxRadius = 10;
        this.growSpeed = 0.6;
        // 選択状態
        this.isSelected = false;
    }

    animate(ctx) {
        const grow = () => {
            if (this.radius < this.maxRadius) {
                this.radius += this.growSpeed;
            } else {
                this.growing = false;
                this.radius = this.maxRadius;
            }

            this.draw(ctx)

            if (this.radius < this.maxRadius) {
                requestAnimationFrame(grow);
            }
        }
        requestAnimationFrame(grow);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 100, 150, 1)';
        ctx.fill();
        ctx.strokeStyle = this.isSelected ? "red" : 'rgba(135, 206, 250, 0.85)';
        ctx.lineWidth = 4;
        ctx.stroke();
    }
}
