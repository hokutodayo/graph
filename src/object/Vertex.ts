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

	addEdge(edge: Edge): void {
		this.edges.push(edge);
	}

	deleteEdge(edge: Edge): void {
		this.edges = this.edges.filter((tempEdge) => tempEdge !== edge);
	}

	getDegree(): number {
		return this.edges.length;
	}

	draw(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.fillStyle = "rgba(255, 100, 150, 1)";
		ctx.fill();
		ctx.strokeStyle = this.isSelected ? "red" : "rgba(135, 206, 250, 0.85)";
		ctx.lineWidth = 4;
		ctx.stroke();
	}
}
