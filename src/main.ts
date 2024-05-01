import { DegreeSequence } from "./DegreeSequence ";
import { GraphInfo, GraphManager } from "./GraphManager";

// ============================================================================
// イベントリスナー
// ============================================================================
// イベントリスナーを設定
document.addEventListener("DOMContentLoaded", setup);

function setup(): void {
	toggleButton.addEventListener("click", toggleFormat);
	degreesInput.addEventListener("input", inputDegreeSequence);
	degreesInput.addEventListener("blur", blurDegreeSequence);
	applyButton.addEventListener("click", applyDegreeSequence);
}

// ============================================================================
// GUIメニュー処理
// ============================================================================
// htmlコンポーネント
const toggleButton = document.getElementById("formatToggle") as HTMLButtonElement;
const degreesInput = document.getElementById("degreeSequenceInput") as HTMLInputElement;
const applyButton = document.getElementById("applyDegreeSequence") as HTMLButtonElement;

// トグルボタンの状態: 初期値は「次数配列」とする
let isDegreeArray = true;

// トグルボタンが切り替わった時の処理
function toggleFormat() {
	isDegreeArray = !isDegreeArray;

	if (isDegreeArray) {
		toggleButton.textContent = "次数配列";
		degreesInput.placeholder = "例: 4,4,4,3,3";
		degreesInput.value = degrees.getArrayString();
	} else {
		toggleButton!.textContent = "ランレングス圧縮";
		degreesInput.placeholder = "例: 4*3,3*2";
		degreesInput.value = degrees.getRunLengthString();
	}
}

// 次数配列入力欄に入力した時の処理
function inputDegreeSequence(): void {
	if (isDegreeArray) {
		// 数字、カンマを許容
		const cleanedValue = degreesInput.value.replace(/[^0-9,]/g, "");
		degreesInput.value = cleanedValue;
	} else {
		// 数字、カンマ、アスタリスクを許容
		const cleanedValue = degreesInput.value.replace(/[^0-9,*]/g, "");
		degreesInput.value = cleanedValue;
	}
}

// 次数配列入力欄のロストフォーカス時の処理
function blurDegreeSequence(): void {
	degrees.setValue(degreesInput.value);
	// 値の設定
	if (isDegreeArray) {
		degreesInput.value = degrees.getArrayString();
	} else {
		degreesInput.value = degrees.getRunLengthString();
	}
	// 極大平面グラフの検証
	if (!degrees.isMaximalPlanarGraph()) {
		degreesInput.classList.add("is-invalid");
		degreesInput.classList.remove("is-valid");
		applyButton.disabled = true; // 適用ボタンを無効にする
	} else {
		degreesInput.classList.remove("is-invalid");
		degreesInput.classList.add("is-valid");
		applyButton.disabled = false; // 適用ボタンを有効にする
	}
}

// 適用ボタンが押された時の処理
function applyDegreeSequence(): void {
	const input = document.querySelector(".form-control") as HTMLInputElement;
	const inputValue = input.value;
	console.log("入力された数式:", inputValue);

	// ここに数式を解析してグラフを描画するロジックを追加
}

// ============================================================================
// プロパティエリア
// ============================================================================
const vertexDisplay = document.getElementById("vertexDisplay") as HTMLSelectElement;
const edgeDisplay = document.getElementById("edgeDisplay") as HTMLButtonElement;
const isMaxGraphDisplay = document.getElementById("isMaxGraphDisplay") as HTMLSelectElement;
const maxGraphEdgeDisplay = document.getElementById("maxGraphEdgeDisplay") as HTMLButtonElement;

// オブジェクト情報の更新
function updateInfo(info: GraphInfo): void {
	vertexDisplay.textContent = `頂点の数: ${info.vertexCount}`;
	edgeDisplay.textContent = `辺の数: ${info.edgeCount}`;

	if (info.vertexCount < 3) {
		isMaxGraphDisplay.textContent = "";
		maxGraphEdgeDisplay.textContent = "";
		return;
	}

	// 極大平面グラフ判定（ 3V - E = 6 ）
	const result = 3 * info.vertexCount - info.edgeCount;
	if (result > 6) {
		isMaxGraphDisplay.textContent = `極大平面グラフか: NO`;
		maxGraphEdgeDisplay.textContent = `辺の数が ${result - 6} 足りません`;
	} else if (result == 6) {
		isMaxGraphDisplay.textContent = `極大平面グラフか: YES`;
		maxGraphEdgeDisplay.textContent = ``;
	} else {
		isMaxGraphDisplay.textContent = `極大平面グラフか: 非平面`;
		maxGraphEdgeDisplay.textContent = `辺の数が ${6 - result} 多いです`;
	}
}

// ============================================================================
// メイン処理
// ============================================================================
const canvas = document.getElementById("graphCanvas") as HTMLCanvasElement;
const graphManager = new GraphManager(canvas, updateInfo);
const degrees = new DegreeSequence();
