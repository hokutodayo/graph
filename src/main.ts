import { Utils } from "./common/utils";
import { DegreeSeqEnum } from "./component/DegreeSequence";
import { EdgeDrawingEnum, GraphInfo, GraphLayoutEnum, GraphManager } from "./component/GraphManager";
import { Edge } from "./object/Edge";
import { Vertex } from "./object/Vertex";

// ============================================================================
// HTML項目関連処理
// ============================================================================
document.addEventListener("DOMContentLoaded", setup);

function setup(): void {
	// ============================================================================
	// 操作エリア - 戻す、やり直す
	// ============================================================================
	const undoButton = document.getElementById("undoButton") as HTMLButtonElement;
	const redoButton = document.getElementById("redoButton") as HTMLButtonElement;

	undoButton.addEventListener("click", clickUndo);
	redoButton.addEventListener("click", clickRedo);

	// 戻すボタンがクリックされた時の処理
	function clickUndo() {
		graphManager.undo();
		undoButton.disabled = !graphManager.canUndo();
	}

	// やり直すボタンがクリックされた時の処理
	function clickRedo() {
		graphManager.redo();
		redoButton.disabled = !graphManager.canRedo();
	}

	// ============================================================================
	// 操作エリア - 次数配列
	// ============================================================================
	const degreeToggle1 = document.getElementById("degreeToggle1") as HTMLButtonElement;
	const degreeToggle2 = document.getElementById("degreeToggle2") as HTMLButtonElement;
	const degreesInput = document.getElementById("degreeSequenceInput") as HTMLInputElement;
	const applyButton = document.getElementById("applyDegreeSequence") as HTMLButtonElement;
	const initGraphButton = document.getElementById("initGraphButton") as HTMLButtonElement;

	degreeToggle1.addEventListener("click", clickDegreeArray);
	degreeToggle2.addEventListener("click", clickRunLength);
	degreesInput.addEventListener("input", inputDegreeSequence);
	degreesInput.addEventListener("blur", blurDegreeSequence);
	applyButton.addEventListener("click", applyDegreeSequence);
	initGraphButton.addEventListener("click", initGraph);

	// トグルボタンの状態: 初期値は「次数配列」とする
	let degreeMode = DegreeSeqEnum.Array;

	// トグルボタンで、次数配列が選択された時の処理
	function clickDegreeArray() {
		degreeMode = DegreeSeqEnum.Array;
		degreeToggle1.textContent = degreeMode;
		degreeToggle1.classList.add("active");
		degreeToggle2.classList.remove("active");
		degreesInput.placeholder = "例: 4,4,4,3,3";
		degreesInput.value = graphManager.degreeSequence.getArrayString();
	}

	// トグルボタンで、ランレングス圧縮が選択された時の処理
	function clickRunLength() {
		degreeMode = DegreeSeqEnum.RunLength;
		degreeToggle2!.textContent = degreeMode;
		degreeToggle2.classList.add("active");
		degreeToggle1.classList.remove("active");
		degreesInput.placeholder = "例: 4*3,3*2";
		degreesInput.value = graphManager.degreeSequence.getRunLengthString();
	}

	// 次数配列入力欄に入力した時の処理
	function inputDegreeSequence(): void {
		switch (degreeMode) {
			case DegreeSeqEnum.Array:
				// 数字、カンマを許容
				degreesInput.value = degreesInput.value.replace(/[^0-9, ]/g, "");
				break;
			case DegreeSeqEnum.RunLength:
				// 数字、カンマ、アスタリスクを許容
				degreesInput.value = degreesInput.value.replace(/[^0-9,* ]/g, "");
				break;
		}
	}

	// 次数配列入力欄のロストフォーカス時の処理
	function blurDegreeSequence(): void {
		graphManager.degreeSequence.setValue(degreeMode, degreesInput.value);
		// 値の設定
		switch (degreeMode) {
			case DegreeSeqEnum.Array:
				degreesInput.value = graphManager.degreeSequence.getArrayString();
				break;
			case DegreeSeqEnum.RunLength:
				degreesInput.value = graphManager.degreeSequence.getRunLengthString();
				break;
		}

		// 有効性判定
		if (graphManager.degreeSequence.isValid()) {
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
	function applyDegreeSequence(): void {
		if (graphManager.degreeSequence.vertexCount() > 1000) {
			Utils.confirmAction("頂点の数が1000を超えるグラフは描画できません", () => {});
		} else if (graphManager.degreeSequence.vertexCount() > 500) {
			Utils.confirmAction("頂点の数が大きいため、描画に数分かかる場合がありますがよろしいですか？", () => {
				graphManager.createGraphFromMatrix();
			});
		} else {
			graphManager.createGraphFromMatrix();
		}
	}

	// グラフの初期化
	function initGraph() {
		Utils.confirmAction("グラフが初期化されますがよろしいですか？", () => {
			graphManager.initGraph();
			// 初期設定値
			setInitialValue();
		});
	}

	// 次数配列の更新（GraphManager内の変更を反映するためのコールバック関数）
	function updateDegreeSequence(vertices: Vertex[], edges: Edge[]): void {
		graphManager.degreeSequence.setVertices(vertices, edges);
		// 値の設定
		switch (degreeMode) {
			case DegreeSeqEnum.Array:
				degreesInput.value = graphManager.degreeSequence.getArrayString();
				break;
			case DegreeSeqEnum.RunLength:
				degreesInput.value = graphManager.degreeSequence.getRunLengthString();
				break;
		}
	}

	// ============================================================================
	// プロパティエリア - グラフ情報
	// ============================================================================
	const vertexDisplay = document.getElementById("vertexDisplay") as HTMLElement;
	const edgeDisplay = document.getElementById("edgeDisplay") as HTMLElement;
	const graphStatusDisplay = document.getElementById("graphStatusDisplay") as HTMLElement;
	const maxGraphEdgeDisplay = document.getElementById("maxGraphEdgeDisplay") as HTMLElement;
	const hasK33Display = document.getElementById("hasK33Display") as HTMLElement;
	const hasK5Display = document.getElementById("hasK5Display") as HTMLElement;
	const showIndexCheckbox = document.getElementById("showIndexCheckbox") as HTMLInputElement;
	const showDegreeCheckbox = document.getElementById("showDegreeCheckbox") as HTMLInputElement;

	showIndexCheckbox.addEventListener("change", showIndex);
	showDegreeCheckbox.addEventListener("change", showDegree);

	// オブジェクト情報の更新
	function updateInfo(info: GraphInfo): void {
		// 頂点と辺の数
		vertexDisplay.textContent = `頂点の数: ${info.vertices.length}`;
		edgeDisplay.textContent = `辺の数: ${info.edges.length}`;

		// 初期化
		graphStatusDisplay.textContent = "グラフ: 平面グラフ";
		graphStatusDisplay.style.color = "";
		graphStatusDisplay.style.fontWeight = "";
		maxGraphEdgeDisplay.textContent = " - ";
		hasK33Display.textContent = "k3,3: -";
		hasK33Display.style.color = "";
		hasK33Display.style.fontWeight = "";
		hasK5Display.textContent = "k5: -";
		hasK5Display.style.color = "";
		hasK5Display.style.fontWeight = "";

		// 最小限のグラフ判定
		if (info.vertices.length < 3) {
			return;
		}

		// 極大平面グラフ判定（ 3V - E = 6 ）
		const result = 3 * info.vertices.length - info.edges.length;
		// 隣接行列を取得
		const adjacencyMatrix = info.degreeSequence.getAdjacencyMatrix();

		// グラフ状態
		if (adjacencyMatrix === null) {
			// 描画不可能
			graphStatusDisplay.textContent = "グラフ: 実現不可";
			graphStatusDisplay.style.color = "red";
			graphStatusDisplay.style.fontWeight = "bold";
		} else if (adjacencyMatrix.hasK33() || adjacencyMatrix.hasK5()) {
			// 非平面グラフ
			graphStatusDisplay.textContent = "グラフ: 非平面グラフ";
			graphStatusDisplay.style.color = "red";
			graphStatusDisplay.style.fontWeight = "bold";

			// K3,3
			if (adjacencyMatrix && adjacencyMatrix.hasK33()) {
				const k33 = adjacencyMatrix.getResultK33();
				hasK33Display.textContent = `k3,3: ${k33!.map((sub) => `(${sub.join(",")})`).join(", ")}`;
				hasK33Display.style.color = "red";
				hasK33Display.style.fontWeight = "bold";
			}
			// K5
			if (adjacencyMatrix && adjacencyMatrix.hasK5()) {
				const k5 = adjacencyMatrix.getResultK5();
				hasK5Display.textContent = `k5: (${k5!.join(", ")})`;
				hasK5Display.style.color = "red";
				hasK5Display.style.fontWeight = "bold";
			}
		} else {
			// 平面グラフ
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
		// 戻す、やり直すボタンの有効無効化
		undoButton.disabled = !graphManager.canUndo();
		redoButton.disabled = !graphManager.canRedo();
	}

	// 頂点の番号を表示
	function showIndex() {
		graphManager.setShowIndex(showIndexCheckbox.checked);
	}

	// 頂点の次数を表示
	function showDegree() {
		graphManager.setShowDegree(showDegreeCheckbox.checked);
	}

	// ============================================================================
	// プロパティエリア - レイアウト
	// ============================================================================
	const graphLayoutToggle1 = document.getElementById("graphLayoutToggle1") as HTMLButtonElement;
	const graphLayoutToggle2 = document.getElementById("graphLayoutToggle2") as HTMLButtonElement;
	const drawEdgeToggle1 = document.getElementById("drawEdgeToggle1") as HTMLButtonElement;
	const drawEdgeToggle2 = document.getElementById("drawEdgeToggle2") as HTMLButtonElement;
	const canTransFormCheckbox = document.getElementById("canTransFormCheckbox") as HTMLInputElement;
	const canAddRemoveCheckbox = document.getElementById("canAddRemoveCheckbox") as HTMLInputElement;

	graphLayoutToggle1.addEventListener("click", clickGraphLayoutForceDirect);
	graphLayoutToggle2.addEventListener("click", clickGraphLayoutFixed);
	drawEdgeToggle1.addEventListener("click", clickEdgeDrawingStraightLine);
	drawEdgeToggle2.addEventListener("click", clickEdgeDrawingBezierCurve);
	canTransFormCheckbox.addEventListener("change", canTransForm);
	canAddRemoveCheckbox.addEventListener("change", canAddRemove);

	// グラフレイアウトの初期値は、力指向とする
	let graphLayoutMode = GraphLayoutEnum.ForceDirect;

	// グラフレイアウトトグルボタンで、力指向が選択された時の処理
	function clickGraphLayoutForceDirect() {
		graphLayoutMode = GraphLayoutEnum.ForceDirect;
		// オブジェクト配置モード
		graphLayoutToggle1.textContent = graphLayoutMode;
		graphLayoutToggle1.classList.add("active");
		graphLayoutToggle2.classList.remove("active");
		graphManager.setGraphLayout(graphLayoutMode);
		// 辺の描画モード
		drawEdgeToggle1.disabled = false;
		drawEdgeToggle1.classList.add("active");
		drawEdgeToggle2.disabled = true;
		drawEdgeToggle2.classList.remove("active");
		graphManager.setEdgeDrawing(EdgeDrawingEnum.straightLine);
		// オブジェクト操作
		canTransFormCheckbox.checked = true;
		canTransFormCheckbox.disabled = true;
		graphManager.setCanTransForm(canTransFormCheckbox.checked);
	}

	// グラフレイアウトトグルボタンで、固定が選択された時の処理
	function clickGraphLayoutFixed() {
		graphLayoutMode = GraphLayoutEnum.Fixed;
		// オブジェクト配置モード
		graphLayoutToggle2.textContent = graphLayoutMode;
		graphLayoutToggle2.classList.add("active");
		graphLayoutToggle1.classList.remove("active");
		graphManager.setGraphLayout(graphLayoutMode);
		// 辺の描画モード
		drawEdgeToggle1.disabled = false;
		drawEdgeToggle2.disabled = false;
		drawEdgeToggle1.classList.add("active");
		drawEdgeToggle2.classList.remove("active");
		// オブジェクト操作
		canTransFormCheckbox.disabled = false;
	}

	// 辺の描画トグルボタンで、直線が選択された時の処理
	function clickEdgeDrawingStraightLine() {
		drawEdgeToggle1.classList.add("active");
		drawEdgeToggle2.classList.remove("active");
		graphManager.setEdgeDrawing(EdgeDrawingEnum.straightLine);
	}

	// 辺の描画トグルボタンで、直線が選択された時の処理
	function clickEdgeDrawingBezierCurve() {
		drawEdgeToggle1.classList.remove("active");
		drawEdgeToggle2.classList.add("active");
		graphManager.setEdgeDrawing(EdgeDrawingEnum.bezierCurve);
	}

	// オブジェクトの移動変形可否
	function canTransForm() {
		graphManager.setCanTransForm(canTransFormCheckbox.checked);
	}

	// オブジェクトの追加削除可否
	function canAddRemove() {
		graphManager.setCanAddRemove(canAddRemoveCheckbox.checked);
	}

	// ============================================================================
	// プロパティエリア - データの入出力
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

			// ファイル読み込み後のイベントハンドラ
			reader.onload = function (event) {
				const content = (event.target! as FileReader).result as string;
				try {
					// 読み込んだJSONデータでグラフをインポート
					graphManager.importFromJson(content);
				} catch (error) {
					Utils.errorAction("JSONデータのインポート中にエラーが発生しました: " + (error as Error).message);
				}
			};

			// ファイル読み込みエラーのハンドラ
			reader.onerror = function () {
				Utils.errorAction("ファイルの読み込み中にエラーが発生しました。");
			};

			// ファイルをテキストとして読み込む
			reader.readAsText(file);
			// ファイル入力をリセット
			importFileInput.value = "";
		}
	}

	// ============================================================================
	// 初期値設定
	// ============================================================================
	function setInitialValue() {
		undoButton.disabled = !graphManager.canUndo();
		redoButton.disabled = !graphManager.canRedo();
		// 次数配列のトグルボタン
		clickDegreeArray();
		// 頂点情報表示のチェックボックス
		showIndexCheckbox.checked = graphManager.isShowIndex();
		showDegreeCheckbox.checked = graphManager.isShowDegree();
		// オブジェクト操作のチェックボックス
		canTransFormCheckbox.checked = graphManager.getCanTransForm();
		canAddRemoveCheckbox.checked = graphManager.getCanAddRemove();
		// グラフレイアウトのトグルボタン
		clickGraphLayoutForceDirect();
		// 初期グラフ
		degreesInput.value = "3, 3, 3, 3";
		blurDegreeSequence();
		applyDegreeSequence();
	}

	// ============================================================================
	// メイン処理
	// ============================================================================
	const canvas = document.getElementById("graphCanvas") as HTMLCanvasElement;
	const graphManager = new GraphManager(canvas, updateDegreeSequence, updateInfo);
	// 初期設定値
	setInitialValue();
}
