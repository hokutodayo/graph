import { AdjacencyMatrix } from "./AdjacencyMatrix";
import { Edge } from "./object/Edge";
import { Vertex } from "./object/Vertex";

// ============================================================================
// 列挙体
// ============================================================================
export enum DegreeSeqEnum {
	Array = "次数配列",
	RunLength = "ランレングス圧縮",
}

// ============================================================================
// 次数配列クラス
// ============================================================================
export class DegreeSequence {
	// 次数配列
	private sequence: number[];
	// 隣接行列
	private adjacencyMatrix: AdjacencyMatrix | null = null;

	constructor() {
		this.sequence = [];
	}

	// 次数配列として有効か
	public isValid(): boolean {
		// 最大次数は頂点数より小さい
		const maxDegree = Math.max(...this.sequence);
		if (!(maxDegree < this.vertexCount())) {
			return false;
		}
		// 次数合計が偶数である
		if (!(this.totalDegree() % 2 == 0)) {
			return false;
		}
		return true;
	}

	// 頂点の数を取得する
	public vertexCount(): number {
		return this.sequence.length;
	}

	// 辺の数を取得する
	public edgeCount(): number {
		return Math.floor(this.totalDegree() / 2);
	}

	// 次数合計を取得する
	public totalDegree(): number {
		const initialValue = 0;
		return this.sequence.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
	}

	// 次数配列形式の文字列取得
	public getArrayString() {
		return this.sequence.join(", ");
	}

	// ランレングス圧縮形式の文字列取得
	public getRunLengthString() {
		if (this.sequence.length === 0) return "";

		let result = [];
		let current = this.sequence[0];
		let count = 1;

		for (let i = 1; i < this.sequence.length; i++) {
			if (this.sequence[i] === current) {
				count++;
			} else {
				result.push(`${current}*${count}`);
				current = this.sequence[i];
				count = 1;
			}
		}

		// 最後の要素を追加
		result.push(`${current}*${count}`);
		return result.join(", ");
	}

	// 頂点オブジェクト配列から、次数配列にセットする
	public setVertices(vertices: Vertex[], edges: Edge[]): void {
		this.sequence = vertices.map((vertex) => vertex.getDegree());
		// 隣接行列
		this.adjacencyMatrix = new AdjacencyMatrix(vertices, edges);
	}

	// 入力文字から、次数配列にセットする
	public setValue(degreeMode: DegreeSeqEnum, value: String): void {
		let cleanedValue = value
			// 連続するカンマやアスタリスクを一つにする
			.replace(/([,*])\1+/g, "$1")
			// 最後のカンマやアスタリスクを削除
			.replace(/[,*]$/, "");

		// 文字列を、次数配列に変換
		switch (degreeMode) {
			case DegreeSeqEnum.Array:
				this.sequence = this.convertArrayStringToDegrees(cleanedValue);
				break;
			case DegreeSeqEnum.RunLength:
				this.sequence = this.convertRunLengthStringToDegrees(cleanedValue);
				break;
		}
	}

	// 次数配列から隣接行列を生成する
	public generateAdjacencyMatrix(): AdjacencyMatrix {
		// 隣接行列
		this.adjacencyMatrix = new AdjacencyMatrix(this.sequence);
		return this.adjacencyMatrix;
	}

	public getAdjacencyMatrix(): AdjacencyMatrix | null {
		return this.adjacencyMatrix;
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
}
