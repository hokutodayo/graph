import { Edge } from "./Edge";
import { Point } from "./Point";
import { Position } from "./Position";
import { Vertex } from "./Vertex";

// ============================================================================
// 制御点クラス
// ============================================================================
export class Control extends Point {
	// 始点
	from: Vertex;
	// 終点
	to: Vertex;
	// 辺
	edge: Edge;
	// 制御点移動の影響倍率
	static readonly IMPACT_FACTOR: number = 3;
	// 制御点の表示位置調整
	static readonly ADJUST_VIEW: number = 20;

	constructor(from: Vertex, to: Vertex, edge: Edge) {
		super(0, 0);
		this.from = from;
		this.to = to;
		this.edge = edge;
		// 中点の座標にする
		this.x = (from.x + to.x) / 2;
		this.y = (from.y + to.y) / 2 - Control.ADJUST_VIEW;
	}

	// 計算用の制御点座標（ペジェ曲線算出用）
	getCalcPosition(): Position {
		const controlX = this.x;
		const controlY = this.y + Control.ADJUST_VIEW;

		const midpointX = (this.from.x + this.to.x) / 2;
		const midpointY = (this.from.y + this.to.y) / 2;

		const x = midpointX + Control.IMPACT_FACTOR * (controlX - midpointX);
		const y = midpointY + Control.IMPACT_FACTOR * (controlY - midpointY);

		return new Position(x, y);
	}

	draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = "red";
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.fill();
	}
}
