import { Edge } from "./object/Edge";
import { Vertex } from "./object/Vertex";
// ============================================================================
// 隣接行列クラス
// ============================================================================
export class AdjacencyMatrix {
	// 隣接行列
	private matrix: number[][] | null = null;
	// k3,3探索結果
	private resultK33: number[][] | null = null;
	// k5探索結果
	private resultK5: number[] | null = null;

	constructor(degreeSequence: number[]);

	constructor(vertices: Vertex[], edges: Edge[]);

	constructor(arg1: number[] | Vertex[], arg2?: Edge[]) {
		if (arg1 === null) {
			throw new Error("Null argument passed to the constructor");
		} else if (Array.isArray(arg1) && (arg1 as number[]).every((item) => typeof item === "number") && arg2 === undefined) {
			this.matrix = this.generateMatrix(arg1 as number[]);
		} else if (Array.isArray(arg1) && (arg1 as Vertex[]).every((item) => item instanceof Vertex) && Array.isArray(arg2) && (arg2 as Edge[]).every((item) => item instanceof Edge)) {
			this.matrix = this.convertMatrix(arg1 as Vertex[], arg2 as Edge[]);
		} else {
			throw new Error("Invalid arguments passed to the constructor");
		}
		// K3,3
		this.resultK33 = this.searchK33();
		// K5
		this.resultK5 = this.searchK5();
	}

	// 隣接行列を取得する
	public getMatrix(): number[][] | null {
		return this.matrix;
	}

	// K33の探索結果を取得する
	public getResultK33(): number[][] | null {
		return this.resultK33;
	}
	// K5の探索結果を取得する
	public getResultK5(): number[] | null {
		return this.resultK5;
	}

	// 描画可能化か
	public isGraphical(): boolean {
		return this.matrix !== null;
	}

	// K33が存在するか
	public hasK33(): boolean {
		return this.matrix !== null && this.resultK33 !== null;
	}

	// K5が存在するか
	public hasK5(): boolean {
		return this.matrix !== null && this.resultK5 !== null;
	}

	// 平面グラフか
	public isPlanarGraph(): boolean {
		return this.matrix !== null && this.resultK33 === null && this.resultK5 === null;
	}

	// 頂点オブジェクト配列から、隣接行列に変換
	private convertMatrix(vertices: Vertex[], edges: Edge[]): number[][] {
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
	// ハベル・ハキミの定理を参考にしたが、引数の次数配列順で実行する
	// これにより、次数配列の順序が異なると結果も異なる
	private generateMatrix(degreeSequence: number[]): number[][] | null {
		// 隣接行列の初期化: 全ての要素を0で埋めたn x nの行列を作成
		const n = degreeSequence.length;
		const matrix = degreeSequence.map(() => new Array(n).fill(0));
		// 残次数を格納する配列
		const remainingDegrees = [...degreeSequence];
		// 頂点インデックス配列を生成
		const connections = Array.from({ length: n }, (_, index) => index);

		// 各頂点に対して接続していく
		for (let i = 0; i < n; i++) {
			if (remainingDegrees[i] > 0) {
				// 残り次数が最大でかつインデックスが小さい順に接続対象をソート
				connections.sort((a, b) => {
					if (remainingDegrees[a] === remainingDegrees[b]) return a - b;
					return remainingDegrees[b] - remainingDegrees[a];
				});

				let attempts = remainingDegrees[i];
				for (let j = 0, k = 0; k < attempts && j < n; j++) {
					const connIndex = connections[j];
					// 自分自身を除く、残り次数が正の頂点と接続
					if (i !== connIndex && remainingDegrees[connIndex] > 0 && matrix[i][connIndex] === 0) {
						matrix[i][connIndex] = 1;
						matrix[connIndex][i] = 1;
						remainingDegrees[connIndex]--;
						remainingDegrees[i]--;
						k++;
					}
				}

				// 接続対象が足りない場合は実現不可能
				if (remainingDegrees[i] > 0) {
					return null;
				}
			}
		}
		// 生成された隣接行列を返す
		return matrix;
	}

	// K3,3を探索して、存在する場合は、K3,3を構成するindex配列を取得する
	private searchK33(): number[][] | null {
		// 隣接行列化できてない場合は、判定対象外
		if (!this.matrix) {
			return null;
		}
		// 頂点数６未満は、判定対象外
		const n = this.matrix.length;
		if (n < 6) {
			return null;
		}
		// 隣接行列をコピーする
		const matrix = this.matrix.map((row) => row.slice());
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
		if (!this.matrix) {
			return null;
		}
		const n = this.matrix.length;
		// 頂点数５未満は、判定対象外
		if (n < 5) {
			return null;
		}
		// 隣接行列をコピーし、対角を1にする
		const matrix = this.matrix.map((row, index) => {
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
