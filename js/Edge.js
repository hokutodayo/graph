// ============================================================================
// 辺クラス
// ============================================================================
export class Edge {
    constructor(from, to, control) {
        // 頂点
        this.from = from;
        this.to = to;
        // 制御点
        this.control = control;
        // 選択状態
        this.isSelected = false;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.from.x, this.from.y);
        ctx.quadraticCurveTo(this.control.x, this.control.y, this.to.x, this.to.y);
        ctx.strokeStyle = this.isSelected ? "red" : 'rgba(135, 206, 250, 0.85)';
        ctx.lineWidth = 4;
        ctx.stroke();

        if (this.isSelected) {
            this.control.draw(ctx);
        }
    }

    isNear(x, y, threshold = 20) {
        // 何個のセグメントで近似するか
        const segments = 10;
        let prevX = this.from.x;
        let prevY = this.from.y;

        for (let i = 1; i <= segments; i++) {
            let t = i / segments;
            let invT = 1 - t;
            // 二次ベジェ曲線のポイントを計算
            let cx = invT * invT * this.from.x + 2 * invT * t * this.control.x + t * t * this.to.x;
            let cy = invT * invT * this.from.y + 2 * invT * t * this.control.y + t * t * this.to.y;

            // 現在のセグメント上での最短距離を計算
            if (this.pointToSegmentDistance(x, y, prevX, prevY, cx, cy) < threshold) {
                return true;
            }

            prevX = cx;
            prevY = cy;
        }

        return false;
    }

    // 点 (px, py) と線分 (x1, y1) と (x2, y2) の間の最短距離を計算
    pointToSegmentDistance(px, py, x1, y1, x2, y2) {
        let dx = x2 - x1;
        let dy = y2 - y1;
        if ((dx == 0) && (dy == 0)) {
            dx = px - x1;
            dy = py - y1;
            return Math.sqrt(dx * dx + dy * dy);
        }

        let t = ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy);
        t = Math.max(0, Math.min(1, t));
        let closestX = x1 + t * dx;
        let closestY = y1 + t * dy;
        dx = px - closestX;
        dy = py - closestY;

        return Math.sqrt(dx * dx + dy * dy);
    }
}
