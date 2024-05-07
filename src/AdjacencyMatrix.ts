import { Edge } from "./object/Edge";
import { Vertex } from "./object/Vertex";

// ============================================================================
// インターフェース
// ============================================================================
// 論理積情報
interface IntersectionInfo {
	index: number;
	intersection: bigint;
}

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

		// 隣接行列をbigintのビットマスクとして表現する
		const adjacencyMasks: bigint[] = [];
		for (let i = 0; i < n; i++) {
			let mask = 0n;
			for (let j = 0; j < n; j++) {
				// 接続情報に、ビットを立てる
				if (this.matrix[i][j]) {
					mask |= 1n << BigInt(j);
				}
			}
			adjacencyMasks.push(mask);
		}

		// バックトラッキング法による K3,3 探索
		const firstGroup = this.backtrack(adjacencyMasks, n, 3);
		if (firstGroup) {
			// 第二グループの生成
			const secondIntersection = adjacencyMasks[firstGroup[0]] & adjacencyMasks[firstGroup[1]] & adjacencyMasks[firstGroup[2]];
			return [firstGroup, this.getIndicesFromBigInt(secondIntersection)];
		} else {
			return null;
		}
	}

	// K5を探索して、存在する場合は、K5を構成するindex配列を取得する
	private searchK5(): number[] | null {
		// 隣接行列化できてない場合は、判定対象外
		if (!this.matrix) {
			return null;
		}
		// 頂点数５未満は、判定対象外
		const n = this.matrix.length;
		if (n < 5) {
			return null;
		}
		// 隣接行列をbigintのビットマスクとして表現する
		const adjacencyMasks: bigint[] = [];
		for (let i = 0; i < n; i++) {
			let mask = 0n;
			for (let j = 0; j < n; j++) {
				// 接続情報と、対角成分に、ビットを立てる
				if (this.matrix[i][j] || i === j) {
					mask |= 1n << BigInt(j);
				}
			}
			adjacencyMasks.push(mask);
		}

		// バックトラッキングによる K5 探索
		return this.backtrack(adjacencyMasks, n, 5);
	}

	// バックトラッキング探索（再帰関数）
	private backtrack(adjacencyMasks: bigint[], totalNum: number, selectNum: number, start: number = 0, count: number = 0, selected: IntersectionInfo[] = []): number[] | null {
		// 探索結果が見つかった
		if (count === selectNum) {
			return selected.map((info) => info.index);
		}
		// 探索する
		for (let i = start; i < totalNum; i++) {
			// 残りの探索数が不足する場合は、探索不要
			if (count + totalNum - i < 5) {
				break;
			}
			// 論理積算出
			const newIntersection = count === 0 ? adjacencyMasks[i] : selected[count - 1].intersection & adjacencyMasks[i];
			// 論理積のビット数が５未満は次のindexへ
			if (this.getIndicesFromBigInt(newIntersection).length >= selectNum) {
				selected.push({ index: i, intersection: newIntersection });
				// 探索深度を増やす
				const result = this.backtrack(adjacencyMasks, totalNum, selectNum, i + 1, count + 1, selected);
				// 探索状態を戻す
				selected.pop();
				//　結果があれば呼び出しもとへ返却
				if (result) {
					return result;
				}
			}
		}

		return null;
	}

	// ビットマスクでビットインデックスの配列を取得する
	private getIndicesFromBigInt(value: bigint): number[] {
		const indices: number[] = [];
		let index = 0;
		while (value > 0n) {
			if (value & 1n) {
				indices.push(index);
			}
			value >>= 1n;
			index += 1;
		}
		return indices;
	}
}
