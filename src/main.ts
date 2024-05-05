import { GraphInfo, GraphManager } from "./GraphManager";
import { Edge } from "./object/Edge";
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
		// 平面グラフ判定
		if (graphManager.degrees.isPlanarGraph()) {
			degreesInput.classList.remove("is-invalid");
			degreesInput.classList.add("is-valid");
			applyButton.disabled = false;
		} else {
			degreesInput.classList.add("is-invalid");
			degreesInput.classList.remove("is-valid");
			applyButton.disabled = true;
		}
	}

	// 適用ボタンが押された時の処理
	function applyDegreeSequence(e: Event): void {
		const input = document.querySelector(".form-control") as HTMLInputElement;
		const inputValue = input.value;
		console.log("入力された数式:", inputValue);

		// TODO: グラフの生成
	}

	// 次数配列の更新
	function updateDegreeSequence(vertices: Vertex[], edges: Edge[]): void {
		graphManager.degrees.setVertices(vertices, edges);
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
	const vertexDisplay = document.getElementById("vertexDisplay") as HTMLElement;
	const edgeDisplay = document.getElementById("edgeDisplay") as HTMLElement;

	const graphStatusDisplay = document.getElementById("graphStatusDisplay") as HTMLElement;
	const maxGraphEdgeDisplay = document.getElementById("maxGraphEdgeDisplay") as HTMLElement;
	const hasK33Display = document.getElementById("hasK33Display") as HTMLElement;
	const hasK5Display = document.getElementById("hasK5Display") as HTMLElement;

	const showIndexCheckbox = document.getElementById("showIndexCheckbox") as HTMLInputElement;
	const showDegreeCheckbox = document.getElementById("showDegreeCheckbox") as HTMLInputElement;
	const changeForceDirectModeButton = document.getElementById("changeForceDirectModeButton") as HTMLButtonElement;
	const straightenEdgesButton = document.getElementById("straightenEdgesButton") as HTMLButtonElement;

	initGraphButton.addEventListener("click", initGraph);
	showIndexCheckbox.addEventListener("change", showIndex);
	showDegreeCheckbox.addEventListener("change", showDegree);
	changeForceDirectModeButton.addEventListener("click", changeForceDirectMode);
	straightenEdgesButton.addEventListener("click", straightenEdges);

	// グラフの初期化
	function initGraph(e: Event) {
		Utils.confirmAction("グラフが初期化されますがよろしいですか？", () => {
			graphManager.initGraph();
		});
	}

	// オブジェクト情報の更新
	function updateInfo(info: GraphInfo): void {
		vertexDisplay.textContent = `頂点の数: ${info.vertices.length}`;
		edgeDisplay.textContent = `辺の数: ${info.edges.length}`;

		if (info.vertices.length < 3) {
			maxGraphEdgeDisplay.textContent = " - ";
			return;
		}

		// 極大平面グラフ判定（ 3V - E = 6 ）
		const result = 3 * info.vertices.length - info.edges.length;
		// 非平面チェック結果
		const k33 = info.degrees.resultK33;
		const k5 = info.degrees.resultK5;

		// グラフ状態
		if (k33 || k5) {
			graphStatusDisplay.textContent = "グラフ: 非平面グラフ";
			graphStatusDisplay.style.color = "red";
			graphStatusDisplay.style.fontWeight = "bold";
		} else {
			if (result > 6) {
				graphStatusDisplay.textContent = "グラフ: 平面グラフ";
				graphStatusDisplay.style.color = "";
				graphStatusDisplay.style.fontWeight = "";
				maxGraphEdgeDisplay.textContent = `辺数 ${result - 6} 追加可能`;
			} else if (result == 6) {
				graphStatusDisplay.textContent = "グラフ: 極大平面グラフ";
				graphStatusDisplay.style.color = "blue";
				graphStatusDisplay.style.fontWeight = "bold";
				maxGraphEdgeDisplay.textContent = ` - `;
			}
		}

		// K3,3があるか
		if (k33) {
			hasK33Display.textContent = `k3,3: ${k33.map((sub) => `(${sub.join(",")})`).join(", ")}`;
			hasK33Display.style.color = "red";
			hasK33Display.style.fontWeight = "bold";
		} else {
			hasK33Display.textContent = "k3,3: -";
			hasK33Display.style.color = "";
			hasK33Display.style.fontWeight = "";
		}

		// K5があるか
		if (k5) {
			hasK5Display.textContent = `k5: (${k5.join(", ")})`;
			hasK5Display.style.color = "red";
			hasK5Display.style.fontWeight = "bold";
		} else {
			hasK5Display.textContent = "k5: -";
			hasK5Display.style.color = "";
			hasK5Display.style.fontWeight = "";
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

	let forceDirectMode: boolean = true;

	// 力指向モードを切り替える
	function changeForceDirectMode(e: Event) {
		forceDirectMode = !forceDirectMode;
		graphManager.changeForceDirectMode(forceDirectMode);
		if (forceDirectMode) {
			changeForceDirectModeButton.textContent = "ペジェ曲線モードにする";
			straightenEdgesButton.disabled = true;
		} else {
			changeForceDirectModeButton.textContent = "力指向モードにする";
			straightenEdgesButton.disabled = false;
		}
	}

	// すべての辺を直線にする
	function straightenEdges(e: Event) {
		Utils.confirmAction("すべての辺が直線になりますがよろしいですか？", () => {
			graphManager.straightenEdges();
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
