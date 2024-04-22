
// ============================================================================
// 点クラス
// ============================================================================
export class Point {
    constructor(x, y) {
        // 座標
        this.x = x;
        this.y = y;
        // 半径
        this.radius = 4;
    }

    isNear(x, y) {
        return Math.hypot(this.x - x, this.y - y) < this.radius * 2;
    }
}
