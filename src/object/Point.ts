import { Position } from "./Position";

// ============================================================================
// 点クラス
// ============================================================================
export class Point extends Position {
	// 半径
	radius: number;

	constructor(x: number, y: number) {
		super(x, y);
		this.radius = 4;
	}

	// 範囲内か
	isNear(x: number, y: number): boolean {
		return Math.hypot(this.x - x, this.y - y) < this.radius * 2;
	}
}
