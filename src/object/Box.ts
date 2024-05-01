import { Position } from "./Position";

// ============================================================================
// 矩形クラス
// ============================================================================
export class Box extends Position {
	// 幅
	width: number;
	// 高さ
	height: number;
	// 余白
	static readonly MARGIN = 10;

	constructor(x: number, y: number, width: number, height: number) {
		super(x, y);
		this.width = width;
		this.height = height;
	}

	// 範囲内か
	isNear(x: number, y: number): boolean {
		const inX = this.x - Box.MARGIN <= x && x <= this.x + this.width + Box.MARGIN;
		const inY = this.y - Box.MARGIN <= y && y <= this.y + this.height + Box.MARGIN;
		return inX && inY;
	}
}
