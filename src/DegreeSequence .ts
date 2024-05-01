// ============================================================================
// 次数配列クラス
// ============================================================================
export class DegreeSequence {
	private sequence: number[];

	constructor() {
		this.sequence = [];
	}

	// 次数配列形式の文字列取得
	getArrayString() {
		return this.sequence.join(", ");
	}

	// ランレングス圧縮形式の文字列取得
	getRunLengthString() {
		return this.convertToRunLength(this.sequence);
	}

	// 入力文字から配列にセットする
	setValue(value: String): void {
		let cleanedValue = value
			.replace(/([,*])\1+/g, "$1") // 連続するカンマやアスタリスクを一つにする
			.replace(/[,*]$/, ""); // 最後のカンマやアスタリスクを削除

		// 文字列を配列に変換
		if (cleanedValue.includes("*")) {
			this.sequence = this.runLengthStringToSequence(cleanedValue);
		} else {
			this.sequence = this.arrayStringToSequence(cleanedValue);
		}
		// ソート
		this.sequence = this.arrangeSequence(this.sequence);
	}

	// ランレングス圧縮形式の文字列を配列に変換
	private runLengthStringToSequence(input: string): number[] {
		if (!input) return [];
		return input.split(",").reduce((acc, part) => {
			const [value, count] = part.split("*").map(Number);
			if (count !== 0) {
				// 数が0でない場合のみ追加
				for (let i = 0; i < count; i++) {
					acc.push(value);
				}
			}
			return acc;
		}, [] as number[]);
	}

	// 次数配列形式の文字列を配列に変換
	private arrayStringToSequence(input: string): number[] {
		return input
			.split(",")
			.filter((item) => item !== "")
			.map(Number);
	}

	// ランレングス圧縮形式の文字列に変換
	private convertToRunLength(sequence: number[]): string {
		if (sequence.length === 0) return "";

		// 降順にソート
		sequence.sort((a, b) => b - a);

		let result = [];
		let current = sequence[0];
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

	// 配列を特定のパターンで再配置
	arrangeSequence(sequence: number[]): number[] {
		sequence.sort((a, b) => a - b);
		let arranged = [];
		let addLast = true;

		for (const num of sequence) {
			if (addLast) {
				arranged.push(num);
			} else {
				arranged.unshift(num);
			}
			addLast = !addLast;
		}

		return arranged;
	}

	// 極大平面グラフかどうかを検証
	isMaximalPlanarGraph(): boolean {
		if (!this.isValidDegreeSequence()) {
			return false;
		}

		const n = this.sequence.length;
		const totalDegree = this.sequence.reduce((sum, degree) => sum + degree, 0);
		const expectedEdges = 3 * n - 6;

		if (n < 3) return false;
		if (totalDegree !== 2 * expectedEdges) return false;
		return true;
	}

	// ハベル・ハキミの定理を用いて次数配列がグラフになるかチェック
	isValidDegreeSequence(): boolean {
		let degrees = [...this.sequence].sort((a, b) => b - a);

		while (degrees.length > 0 && degrees[0] > 0) {
			let first = degrees.shift()!;
			if (first > degrees.length) {
				return false;
			}

			for (let i = 0; i < first; i++) {
				degrees[i]--;
				if (degrees[i] < 0) {
					return false;
				}
			}
			degrees = degrees.sort((a, b) => b - a);
		}

		return degrees.every((degree) => degree === 0);
	}
}
