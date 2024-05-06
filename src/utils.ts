import Swal from "sweetalert2";
import { Control } from "./object/Control";
import { Edge } from "./object/Edge";
import { Point } from "./object/Point";
import { Vertex } from "./object/Vertex";
// ============================================================================
// 列挙体
// ============================================================================
// マウスボタンの列挙体
export enum MouseButtonEnum {
	Left = 0,
	Middle = 1,
	Right = 2,
}

// ============================================================================
// ユーティリティクラス
// ============================================================================
export class Utils {
	// 確認ダイアログを表示してアクションを実行
	static confirmAction(message: string, action: () => void) {
		Swal.fire({
			title: "確認",
			text: message,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "はい、実行します",
			cancelButtonText: "いいえ",
		}).then((result) => {
			if (result.isConfirmed) {
				action();
			}
		});
	}

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
