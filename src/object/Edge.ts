import { Control } from "./Control";
import { Position } from "./Position";
import { Vertex } from "./Vertex";

// ============================================================================
// 辺クラス
// ============================================================================
export class Edge {
	// 始点
	from: Vertex;
	// 終点
	to: Vertex;
	// 制御点
	control: Control;
	// 選択されているか
	isSelected: boolean;

	constructor(from: Vertex, to: Vertex) {
		this.from = from;
		this.to = to;
		this.control = new Control(from, to, this);
		this.isSelected = false;
		// 頂点に辺を追加する
		this.from.addEdge(this);
		this.to.addEdge(this);
	}

	// 辺を直線にする
	straightenEdge() {
		this.control.init();
	}

	// 範囲内か
	isNear(mouseX: number, mouseY: number, tolerance: number = 10): boolean {
		const calcPosition = this.control.getCalcPosition();
		// ベジェ曲線を分割して近似
		const segment = 10;
		for (let i = 0; i < segment; i++) {
			const t1 = i / segment;
			const t2 = (i + 1) / segment;
			const p1 = this.getBezierPosition(t1, calcPosition);
			const p2 = this.getBezierPosition(t2, calcPosition);
			if (this.pointToSegmentDistance(mouseX, mouseY, p1.x, p1.y, p2.x, p2.y) < tolerance) {
				return true;
			}
		}
		return false;
	}

	// ペジェ曲線の分割点
	private getBezierPosition(t: number, calcPosition: Position): Position {
		const x = (1 - t) * (1 - t) * this.from.x + 2 * (1 - t) * t * calcPosition.x + t * t * this.to.x;
		const y = (1 - t) * (1 - t) * this.from.y + 2 * (1 - t) * t * calcPosition.y + t * t * this.to.y;
		return new Position(x, y);
	}

	// 点と直線の距離
	private pointToSegmentDistance(px: number, py: number, x1: number, y1: number, x2: number, y2: number): number {
		const dx = x2 - x1;
		const dy = y2 - y1;
		if (dx === 0 && dy === 0) {
			return Math.sqrt((px - x1) ** 2 + (py - y1) ** 2);
		}
		const t = ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy);
		const tClamped = Math.max(0, Math.min(1, t));
		const nearestX = x1 + tClamped * dx;
		const nearestY = y1 + tClamped * dy;
		return Math.sqrt((px - nearestX) ** 2 + (py - nearestY) ** 2);
	}

	// 描画
	draw(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.moveTo(this.from.x, this.from.y);
		// 二次ベジェ曲線
		const calcPosition = this.control.getCalcPosition();
		ctx.quadraticCurveTo(calcPosition.x, calcPosition.y, this.to.x, this.to.y);
		ctx.strokeStyle = this.isSelected ? "red" : "rgba(135, 206, 250, 0.85)";
		ctx.lineWidth = 4;
		ctx.stroke();

		if (this.isSelected) {
			this.control.draw(ctx);
		}
	}
}
