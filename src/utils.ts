import { Control } from "./object/Control";
import { Edge } from "./object/Edge";
import { Point } from "./object/Point";
import { Vertex } from "./object/Vertex";

// ============================================================================
// ユーティリティクラス
// ============================================================================
export class Utils {
	// 位置に近い点を取得する
	static findPointAt(x: number, y: number, vertices: Vertex[], edges: Edge[]): Point | null {
		// 頂点を検索
		let point: Point | null = Utils.findVertexAt(x, y, vertices);
		// 見つからない場合
		if (point == null) {
			// 制御点を検索
			point = Utils.findControlAt(x, y, edges);
		}
		return point;
	}

	// 位置に近い頂点を取得する
	static findVertexAt(x: number, y: number, vertices: Vertex[]): Vertex | null {
		const foundVertex = vertices.find((vertex) => vertex.isNear(x, y));
		return foundVertex ? foundVertex : null;
	}

	// 位置に近い制御点を取得する
	static findControlAt(x: number, y: number, edges: Edge[]): Control | null {
		const foundControl = edges.find((edge) => edge.control.isNear(x, y));
		return foundControl ? foundControl.control : null;
	}

	// 位置に近い辺を取得する
	static findEdgeAt(x: number, y: number, edges: Edge[]): Edge | null {
		const foundEdge = edges.find((edge) => edge.isNear(x, y));
		return foundEdge ? foundEdge : null;
	}
}
