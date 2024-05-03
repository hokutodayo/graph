// ============================================================================
// 位置クラス
// ============================================================================
export class Position {
	// 座標
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = Math.round(x);
		this.y = Math.round(y);
	}
}
