import Swal from "sweetalert2";
import { GraphInfo, GraphManager } from "./GraphManager";
import { Vertex } from "./object/Vertex";
import { Utils } from "./utils";

// ============================================================================
// HTML項目関連処理
// ============================================================================
document.addEventListener("DOMContentLoaded", setup);

function setup(): void {
	// ============================================================================
	// 次数配列
	// ============================================================================
	const toggleButton = document.getElementById("formatToggle") as HTMLButtonElement;
	const degreesInput = document.getElementById("degreeSequenceInput") as HTMLInputElement;
	const applyButton = document.getElementById("applyDegreeSequence") as HTMLButtonElement;

	toggleButton.addEventListener("click", toggleFormat);
	degreesInput.addEventListener("input", inputDegreeSequence);
	degreesInput.addEventListener("blur", blurDegreeSequence);
	applyButton.addEventListener("click", applyDegreeSequence);

	// トグルボタンの状態: 初期値は「次数配列」とする
	let isDegreeArray = true;

	// トグルボタンが切り替わった時の処理
	function toggleFormat(e: Event) {
		isDegreeArray = !isDegreeArray;

		if (isDegreeArray) {
			toggleButton.textContent = "次数配列";
			degreesInput.placeholder = "例: 4,4,4,3,3";
			degreesInput.value = graphManager.degrees.getArrayString();
		} else {
			toggleButton!.textContent = "ランレングス圧縮";
			degreesInput.placeholder = "例: 4*3,3*2";
			degreesInput.value = graphManager.degrees.getRunLengthString();
		}
	}

	// 次数配列入力欄に入力した時の処理
	function inputDegreeSequence(e: Event): void {
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
	function blurDegreeSequence(e: Event): void {
		graphManager.degrees.setValue(degreesInput.value);
		// 値の設定
		if (isDegreeArray) {
			degreesInput.value = graphManager.degrees.getArrayString();
		} else {
			degreesInput.value = graphManager.degrees.getRunLengthString();
		}
		// 極大平面グラフの検証
		if (!graphManager.degrees.isMaximalPlanarGraph()) {
			degreesInput.classList.add("is-invalid");
			degreesInput.classList.remove("is-valid");
			applyButton.disabled = true;
		} else {
			degreesInput.classList.remove("is-invalid");
			degreesInput.classList.add("is-valid");
			applyButton.disabled = false;
		}
	}

	// 適用ボタンが押された時の処理
	function applyDegreeSequence(e: Event): void {
		const input = document.querySelector(".form-control") as HTMLInputElement;
		const inputValue = input.value;
		console.log("入力された数式:", inputValue);

		// ここに数式を解析してグラフを描画するロジックを追加
	}

	// 次数配列の更新
	function updateDegreeSequence(vertices: Vertex[]): void {
		graphManager.degrees.setVertices(vertices);
		if (isDegreeArray) {
			degreesInput.value = graphManager.degrees.getArrayString();
		} else {
			degreesInput.value = graphManager.degrees.getRunLengthString();
		}
	}

	// ============================================================================
	// プロパティエリア
	// ============================================================================
	const initGraphButton = document.getElementById("initGraphButton") as HTMLButtonElement;
	const vertexDisplay = document.getElementById("vertexDisplay") as HTMLSelectElement;
	const edgeDisplay = document.getElementById("edgeDisplay") as HTMLButtonElement;
	const isMaxGraphDisplay = document.getElementById("isMaxGraphDisplay") as HTMLSelectElement;
	const maxGraphEdgeDisplay = document.getElementById("maxGraphEdgeDisplay") as HTMLButtonElement;
	const showIndexCheckbox = document.getElementById("showIndexCheckbox") as HTMLInputElement;
	const showDegreeCheckbox = document.getElementById("showDegreeCheckbox") as HTMLInputElement;
	const straightenEdgesButton = document.getElementById("straightenEdgesButton") as HTMLButtonElement;

	initGraphButton.addEventListener("click", initGraph);
	showIndexCheckbox.addEventListener("change", showIndex);
	showDegreeCheckbox.addEventListener("change", showDegree);
	straightenEdgesButton.addEventListener("click", straightenEdges);

	// グラフの初期化
	function initGraph(e: Event) {
		Utils.confirmAction("グラフが初期化されますがよろしいですか？", () => {
			graphManager.initGraph();
			Swal.fire("実行完了!", "グラフが初期化されました。", "success");
		});
	}

	// オブジェクト情報の更新
	function updateInfo(info: GraphInfo): void {
		vertexDisplay.textContent = `頂点の数: ${info.vertexCount}`;
		edgeDisplay.textContent = `辺の数: ${info.edgeCount}`;

		if (info.vertexCount < 3) {
			isMaxGraphDisplay.textContent = " - ";
			maxGraphEdgeDisplay.textContent = " - ";
			return;
		}

		// 極大平面グラフ判定（ 3V - E = 6 ）
		const result = 3 * info.vertexCount - info.edgeCount;
		if (result > 6) {
			isMaxGraphDisplay.textContent = `極大平面グラフか: NO`;
			maxGraphEdgeDisplay.textContent = `辺の数が ${result - 6} 足りません`;
		} else if (result == 6) {
			isMaxGraphDisplay.textContent = `極大平面グラフか: YES`;
			maxGraphEdgeDisplay.textContent = ` - `;
		} else {
			isMaxGraphDisplay.textContent = `極大平面グラフか: 非平面`;
			maxGraphEdgeDisplay.textContent = `辺の数が ${6 - result} 多いです`;
		}
	}

	// 頂点番号を表示
	function showIndex(e: Event) {
		graphManager.drawVertexInfo(showIndexCheckbox.checked, showDegreeCheckbox.checked);
	}

	// 次数を表示
	function showDegree(e: Event) {
		graphManager.drawVertexInfo(showIndexCheckbox.checked, showDegreeCheckbox.checked);
	}

	// すべての辺を直線にする
	function straightenEdges(e: Event) {
		Utils.confirmAction("すべての辺が直線になりますがよろしいですか？", () => {
			graphManager.straightenEdges();
			Swal.fire("実行完了!", "すべての辺が直線になりました。", "success");
		});
	}

	// ============================================================================
	// エクスポート／インポート処理
	// ============================================================================
	const exportButton = document.getElementById("exportButton") as HTMLButtonElement;
	const importButton = document.getElementById("importButton") as HTMLButtonElement;
	const importFileInput = document.getElementById("importFileInput") as HTMLInputElement;

	exportButton.addEventListener("click", exportJson);
	importButton.addEventListener("click", uploadJson);
	importFileInput.addEventListener("change", importJson);

	// エクスポートボタンが押下されたら、エクスポートする
	function exportJson(e: Event) {
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
	}

	// ボタンがクリックされたら、ファイル入力をトリガーする
	function uploadJson() {
		importFileInput.click();
	}

	// ファイルが入力されたら、インポートする
	function importJson(e: Event) {
		const file = (e.target! as HTMLInputElement).files![0];
		if (file) {
			const reader = new FileReader();
			reader.onload = function (event) {
				const content = (event.target! as FileReader).result as string;
				// 読み込んだJSONデータでグラフをインポート
				graphManager.importFromJson(content);
				// ファイル入力をリセット
				importFileInput.value = "";
			};
			reader.readAsText(file);
		}
	}

	// ============================================================================
	// メイン処理
	// ============================================================================
	const canvas = document.getElementById("graphCanvas") as HTMLCanvasElement;
	const graphManager = new GraphManager(canvas, updateDegreeSequence, updateInfo);
}
