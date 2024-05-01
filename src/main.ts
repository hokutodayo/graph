import Swal from "sweetalert2";
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
const clearGraphButton = document.getElementById("clearGraphButton") as HTMLButtonElement;
const vertexDisplay = document.getElementById("vertexDisplay") as HTMLSelectElement;
const edgeDisplay = document.getElementById("edgeDisplay") as HTMLButtonElement;
const isMaxGraphDisplay = document.getElementById("isMaxGraphDisplay") as HTMLSelectElement;
const maxGraphEdgeDisplay = document.getElementById("maxGraphEdgeDisplay") as HTMLButtonElement;
const straightenEdgesButton = document.getElementById("straightenEdgesButton") as HTMLButtonElement;

// グラフの初期化
clearGraphButton.addEventListener("click", () => {
	Swal.fire({
		title: "確認",
		text: "グラフが初期化されますがよろしいですか？",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "はい、実行します",
		cancelButtonText: "いいえ",
	}).then((result) => {
		if (result.isConfirmed) {
			graphManager.initGraph();
			Swal.fire("実行完了!", "グラフが初期化されました。", "success");
		}
	});
});

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

// すべての辺を直線にする
straightenEdgesButton.addEventListener("click", () => {
	Swal.fire({
		title: "確認",
		text: "すべての辺が直線になりますがよろしいですか？",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "はい、実行します",
		cancelButtonText: "いいえ",
	}).then((result) => {
		if (result.isConfirmed) {
			graphManager.straightenEdges();
			Swal.fire("実行完了!", "すべての辺が直線になりました。", "success");
		}
	});
});

// ============================================================================
// エクスポート／インポート処理
// ============================================================================
const exportButton = document.getElementById("exportButton") as HTMLButtonElement;
const importButton = document.getElementById("importButton") as HTMLButtonElement;
const importFileInput = document.getElementById("importFileInput") as HTMLInputElement;

// エクスポートボタンが押下されたら、エクスポートする
exportButton.addEventListener("click", () => {
	// データ取得
	const jsonData = graphManager.exportToJson();
	// ファイル名
	const date = new Date();
	const timestamp =
		date.getFullYear().toString() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + "_" + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
	const filename = `graph-data_${timestamp}.json`;
	// ダウンロードURL
	const blob = new Blob([jsonData], { type: "application/json" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	// リンクをプログラム的にクリックしてダウンロードを実行
	a.click();
	document.body.removeChild(a);
	// 作成したURLを解放
	URL.revokeObjectURL(url);
});

// ボタンがクリックされたら、ファイル入力をトリガーする
importButton.addEventListener("click", function () {
	importFileInput.click();
});

// ファイルが入力されたら、インポートする
importFileInput.addEventListener("change", function (event) {
	const file = (event.target! as HTMLInputElement).files![0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			const content = (e.target! as FileReader).result as string;
			// 読み込んだJSONデータでグラフをインポート
			graphManager.importFromJson(content);
			console.log("Graph imported successfully");
		};
		reader.readAsText(file);
	}
});

// ============================================================================
// メイン処理
// ============================================================================
const canvas = document.getElementById("graphCanvas") as HTMLCanvasElement;
const graphManager = new GraphManager(canvas, updateInfo);
const degrees = new DegreeSequence();
