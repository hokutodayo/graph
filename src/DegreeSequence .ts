// ============================================================================
// 次数配列クラス

import { Edge } from "./object/Edge";
import { Vertex } from "./object/Vertex";

// ============================================================================
export class DegreeSequence {
	// 次数配列
	private degrees: number[];
	// 隣接行列
	private adjacencyMatrix: number[][] | null = null;
	// k3,3探索結果
	resultK33: number[][] | null = null;
	// k5探索結果
	resultK5: number[] | null = null;

	constructor() {
		this.degrees = [];
	}

	// 平面グラフか
	isPlanarGraph(): boolean {
		return this.adjacencyMatrix !== null && this.resultK33 === null && this.resultK5 === null;
	}

	// 次数配列形式の文字列取得
	getArrayString() {
		return this.degrees.join(", ");
	}

	// ランレングス圧縮形式の文字列取得
	getRunLengthString() {
		if (this.degrees.length === 0) return "";

		let result = [];
		let current = this.degrees[0];
		let count = 1;

		for (let i = 1; i < this.degrees.length; i++) {
			if (this.degrees[i] === current) {
				count++;
			} else {
				result.push(`${current}*${count}`);
				current = this.degrees[i];
				count = 1;
			}
		}

		// 最後の要素を追加
		result.push(`${current}*${count}`);
		return result.join(", ");
	}

	// 頂点オブジェクト配列から、次数配列にセットする
	setVertices(vertices: Vertex[], edges: Edge[]): void {
		this.degrees = vertices.map((vertex) => vertex.getDegree());
		// 隣接行列
		this.adjacencyMatrix = this.convertAdjacencyMatrix(vertices, edges);
		// K3,3
		this.resultK33 = this.searchK33();
		// K5
		this.resultK5 = this.searchK5();
	}

	// 入力文字から、次数配列にセットする
	setValue(value: String): void {
		let cleanedValue = value
			// 連続するカンマやアスタリスクを一つにする
			.replace(/([,*])\1+/g, "$1")
			// 最後のカンマやアスタリスクを削除
			.replace(/[,*]$/, "");

		// 文字列を、次数配列に変換
		if (cleanedValue.includes("*")) {
			this.degrees = this.convertRunLengthStringToDegrees(cleanedValue);
		} else {
			this.degrees = this.convertArrayStringToDegrees(cleanedValue);
		}
		// 隣接行列
		this.adjacencyMatrix = this.generateAdjacencyMatrix(this.degrees);
	}

	// ランレングス圧縮形式の文字列から、次数配列に変換
	private convertRunLengthStringToDegrees(input: string): number[] {
		if (!input) return [];
		return input.split(",").reduce((acc, part) => {
			const [value, count] = part.split("*").map(Number);
			// 数が 0 でない場合のみ追加
			if (count !== 0) {
				for (let i = 0; i < count; i++) {
					acc.push(value);
				}
			}
			return acc;
		}, [] as number[]);
	}

	// 次数配列形式の文字列から、次数配列に変換
	private convertArrayStringToDegrees(input: string): number[] {
		return input
			.split(",")
			.filter((item) => item !== "")
			.map(Number);
	}

	// 頂点オブジェクト配列から、隣接行列に変換
	private convertAdjacencyMatrix(vertices: Vertex[], edges: Edge[]): number[][] {
		// 頂点の数に基づいて、初期値が0の隣接行列を生成
		const adjacencyMatrix = vertices.map(() => Array(vertices.length).fill(0));

		// 全ての辺に対して処理を実行
		edges.forEach((edge) => {
			const toIndex = vertices.indexOf(edge.to);
			const fromIndex = vertices.indexOf(edge.from);
			// 無向グラフの場合、対称性を保つために両方向に1を設定
			adjacencyMatrix[fromIndex][toIndex] = 1;
			adjacencyMatrix[toIndex][fromIndex] = 1;
		});

		return adjacencyMatrix;
	}

	// 次数配列から、隣接行列を生成する
	// ハベル・ハキミの定理を参考にしたが、引数の次数配列をソートしない
	// これにより、同じ数列でも順番が異なると結果も異なるようにする
	private generateAdjacencyMatrix(degrees: number[]): number[][] | null {
		// 隣接行列の初期化: 全ての要素を0で埋めたn x nの行列を作成
		const n = degrees.length;
		const adjacencyMatrix = degrees.map(() => new Array(n).fill(0));
		// 残次数を格納する配列
		const remainingDegrees = [...degrees];
		// 頂点インデックス配列を生成
		const connections = Array.from({ length: n }, (_, index) => index);

		// 各頂点に対して接続していく
		for (let i = 0; i < n; i++) {
			if (remainingDegrees[i] > 0) {
				// 各頂点の残り次数を保持する配列
				connections.sort((a, b) => remainingDegrees[b] - remainingDegrees[a]);
				let count = 0;

				// 残り次数が正の頂点に対して接続を行う
				for (let j = 0; j < n && count < remainingDegrees[i]; j++) {
					const connIndex = connections[j];
					// 自分自身を除く、残り次数が正の頂点と接続
					if (i !== connIndex && remainingDegrees[connIndex] > 0) {
						adjacencyMatrix[i][connIndex] = 1;
						adjacencyMatrix[connIndex][i] = 1;
						remainingDegrees[connIndex]--;
						count++;
					}
				}
				remainingDegrees[i] -= count;

				// 接続対象が足りない場合は実現不可能
				if (count < remainingDegrees[i]) {
					return null;
				}
			}
		}
		// 生成された隣接行列を返す
		return adjacencyMatrix;
	}

	// K3,3を探索して、存在する場合は、K3,3を構成するindex配列を取得する
	private searchK33(): number[][] | null {
		// 隣接行列化できてない場合は、判定対象外
		if (!this.adjacencyMatrix) {
			return null;
		}
		// 頂点数６未満は、判定対象外
		const n = this.adjacencyMatrix.length;
		if (n < 6) {
			return null;
		}
		// 隣接行列をコピーする
		const matrix = this.adjacencyMatrix.map((row) => row.slice());
		// 3つの異なる行を選択するすべての組み合わせを試す
		for (let i = 0; i < n; i++) {
			for (let j = i + 1; j < n; j++) {
				for (let k = j + 1; k < n; k++) {
					// 論理積の結果
					const result = [];
					let count = 0;
					for (let x = 0; x < n; x++) {
						if (matrix[i][x] && matrix[j][x] && matrix[k][x]) {
							result.push(x);
							count++;
						}
						// K3,3判定
						if (count === 3) {
							return [[i, j, k], result];
						}
					}
				}
			}
		}
		// K3,3が見つからなかった
		return null;
	}

	// K5を探索して、存在する場合は、K5を構成するindex配列を取得する
	private searchK5(): number[] | null {
		// 隣接行列化できてない場合は、判定対象外
		if (!this.adjacencyMatrix) {
			return null;
		}
		const n = this.adjacencyMatrix.length;
		// 頂点数５未満は、判定対象外
		if (n < 5) {
			return null;
		}
		// 隣接行列をコピーし、対角を1にする
		const matrix = this.adjacencyMatrix.map((row, index) => {
			const newRow = row.slice();
			newRow[index] = 1;
			return newRow;
		});
		// 5つの行の組み合わせを生成してチェック
		for (let i = 0; i < n; i++) {
			for (let j = i + 1; j < n; j++) {
				for (let k = j + 1; k < n; k++) {
					for (let l = k + 1; l < n; l++) {
						for (let m = l + 1; m < n; m++) {
							// 論理積の結果
							const result = [];
							let count = 0;
							for (let x = 0; x < n; x++) {
								if (matrix[i][x] && matrix[j][x] && matrix[k][x] && matrix[l][x] && matrix[m][x]) {
									result.push(x);
									count++;
								}
								// K5判定
								if (count === 5) {
									return [i, j, k, l, m];
								}
							}
						}
					}
				}
			}
		}
		// K5が見つからなかった
		return null;
	}
}
