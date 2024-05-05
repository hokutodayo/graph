import { Edge } from "./Edge";
import { Point } from "./Point";

// ============================================================================
// 頂点クラス
// ============================================================================
export class Vertex extends Point {
	// 半径
	radius: number;
	// 選択されているか
	isSelected: boolean;
	// 接続している辺
	edges: Edge[];

	constructor(x: number, y: number) {
		super(x, y);
		this.radius = 10;
		this.isSelected = false;
		this.edges = [];
	}

	// 辺を追加
	addEdge(edge: Edge): void {
		this.edges.push(edge);
	}

	// 辺を削除
	deleteEdge(edge: Edge): void {
		this.edges = this.edges.filter((item) => item !== edge);
	}

	// 次数取得
	getDegree(): number {
		return this.edges.length;
	}

	// 描画
	draw(ctx: CanvasRenderingContext2D, showIndex: boolean, index: number, showDegree: boolean): void {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.fillStyle = "rgba(255, 100, 150, 1)";
		ctx.fill();
		ctx.strokeStyle = this.isSelected ? "red" : "rgba(135, 206, 250, 0.85)";
		ctx.lineWidth = 4;
		ctx.stroke();

		// 頂点情報の表示
		ctx.fillStyle = "black";
		ctx.font = "12px Sans-serif";
		if (showIndex) {
			ctx.fillText(`Index: ${index}`, this.x + this.radius + 5, this.y - this.radius - 5);
		}
		if (showDegree) {
			ctx.fillText(`Degree: ${this.getDegree()}`, this.x + this.radius + 5, this.y - this.radius + 15);
		}
	}
}
