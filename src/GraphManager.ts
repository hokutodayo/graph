import { DegreeSequence } from "./DegreeSequence ";
import { Control } from "./object/Control";
import { Edge } from "./object/Edge";
import { Point } from "./object/Point";
import { Vertex } from "./object/Vertex";
import { MouseButton, Utils } from "./utils";

// ============================================================================
// インターフェース
// ============================================================================
export interface GraphInfo {
	vertexCount: number;
	edgeCount: number;
}

// ============================================================================
// グラフクラス
// ============================================================================
export class GraphManager {
	// キャンバス
	private canvas: HTMLCanvasElement;
	private readonly MAX_CANVAS_WIDTH = 20000;
	private readonly MAX_CANVAS_HEIGHT = 10000;
	private ctx: CanvasRenderingContext2D;
	// グリッド表示状態
	private showGrid: boolean = true;
	// 力指向モード
	private forceDirectMode: boolean = true;
	// マウス位置
	private mouse: { x: number; y: number } = { x: 0, y: 0 };
	// オブジェクト管理
	public vertices: Vertex[] = [];
	public edges: Edge[] = [];
	public degrees: DegreeSequence;
	// オブジェクト操作
	private selectedVertex: Vertex | null = null;
	private selectedEdge: Edge | null = null;
	private draggingPoint: Point | null = null;
	private activeEdge: Edge | null = null;
	// ズーム機能関連
	private origin: { x: number; y: number } = { x: 0, y: 0 };
	private scale: number = 1;
	private zoomLevels: number[] = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.75, 2.0, 2.5, 3.0, 3.5, 4.0];
	private currentZoomIndex: number = 10; // 初期値 100%
	// パン機能
	private isDragging = false;
	private lastPos = { x: 0, y: 0 };
	// コールバック関数
	private updateDegreeSequence: (vertices: Vertex[]) => void;
	private updateInfo: (info: GraphInfo) => void;
	// 頂点情報表示
	private showIndex: boolean = false;
	private showDegree: boolean = false;

	constructor(canvas: HTMLCanvasElement, updateDegreeSequence: (vertices: Vertex[]) => void, updateInfo: (info: GraphInfo) => void) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d")!;
		this.degrees = new DegreeSequence();
		this.updateDegreeSequence = updateDegreeSequence;
		this.updateInfo = updateInfo;
		this.setupEvents();
		this.resizeCanvas();
	}

	// ============================================================================
	// イベント処理
	// ============================================================================
	// イベント登録
	private setupEvents(): void {
		this.canvas.addEventListener("dblclick", this.handleDoubleClick.bind(this));
		this.canvas.addEventListener("mousemove", this.handleMouseMove.bind(this));
		this.canvas.addEventListener("mouseout", this.handleMouseOut.bind(this));
		this.canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
		this.canvas.addEventListener("mouseup", this.handleMouseUp.bind(this));
		this.canvas.addEventListener("contextmenu", this.handleContextMenu.bind(this));
		this.canvas.addEventListener("wheel", this.handleWheel.bind(this));
		window.addEventListener("resize", this.resizeCanvas.bind(this));
		this.changeForceDirectMode(this.forceDirectMode);
	}

	// ダブルクリック
	private handleDoubleClick(e: MouseEvent): void {
		this.mouse = this.getMousePosition(e);
		this.addVertex(this.mouse.x, this.mouse.y);
		this.drawGraph();
	}

	// マウスムーブ
	private handleMouseMove(e: MouseEvent): void {
		this.mouse = this.getMousePosition(e);
		// 頂点か制御点の移動
		if (this.draggingPoint) {
			this.draggingPoint.x = this.mouse.x;
			this.draggingPoint.y = this.mouse.y;
			this.canvas.style.cursor = "move";
		}
		// キャンバスの移動
		else if (this.isDragging) {
			const dx = e.clientX - this.lastPos.x;
			const dy = e.clientY - this.lastPos.y;
			this.origin.x += dx;
			this.origin.y += dy;
			// 移動制限
			this.limitCanvasPan();
			this.lastPos.x = e.clientX;
			this.lastPos.y = e.clientY;
		}
		// 頂点選択済みの場合
		else if (this.selectedVertex) {
			this.canvas.style.cursor = "crosshair";
		} else {
			// 辺の近くの場合
			const edge = Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);
			edge && (this.activeEdge = edge);
			// 頂点か制御点の近くの場合
			const point = Utils.findPointAt(this.mouse.x, this.mouse.y, this.vertices, this.edges);
			this.canvas.style.cursor = point ? "move" : "default";
		}
		this.drawGraph();
	}

	// マウスアウト
	private handleMouseOut(e: MouseEvent): void {
		this.canvas.style.cursor = "default";
		this.handleMouseUp(e);
	}

	// マウスダウン
	private handleMouseDown(e: MouseEvent): void {
		// 左クリック以外は処理なし
		if (e.button !== MouseButton.Left) {
			return;
		}

		this.mouse = this.getMousePosition(e);
		const vertex = Utils.findVertexAt(this.mouse.x, this.mouse.y, this.vertices);
		const edge = Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);
		const control = Utils.findControlAt(this.mouse.x, this.mouse.y, this.edges);
		// 判定のため一時退避
		const tempSelectedVertex = this.selectedVertex;
		// 選択状態の初期化
		this.initSelected();

		// 頂点の場合
		if (vertex) {
			if (tempSelectedVertex) {
				// 選択済み頂点と、異なる頂点が取得できた場合
				if (tempSelectedVertex !== vertex) {
					this.addEdge(tempSelectedVertex, vertex);
				}
			}
			// 頂点を選択済みにする
			vertex.isSelected = true;
			this.selectedVertex = vertex;
			// カーソルを選択用に変更
			this.canvas.style.cursor = "crosshair";

			// ドラッグ開始
			this.draggingPoint = vertex;
		}
		// 制御点の場合
		else if (control) {
			// ドラッグ開始
			this.draggingPoint = control;
		}
		// 辺の場合
		else if (edge) {
			// 辺を選択済みにする
			this.selectedEdge = edge;
			this.selectedEdge.isSelected = true;
		}
		// キャンバスの選択
		else {
			this.isDragging = true;
			this.lastPos.x = e.clientX;
			this.lastPos.y = e.clientY;
		}
		this.drawGraph();
	}

	// マウスアップ
	private handleMouseUp(e: MouseEvent): void {
		if (this.draggingPoint instanceof Control) {
			// バウンディングボックスの再算出
		}
		this.draggingPoint = null;
		this.isDragging = false;
		this.drawGraph();
	}

	// 右クリック
	private handleContextMenu(e: MouseEvent): void {
		e.preventDefault();
		this.mouse = this.getMousePosition(e);
		const vertex = Utils.findVertexAt(this.mouse.x, this.mouse.y, this.vertices);
		const edge = Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);

		// 選択状態の初期化
		this.initSelected();

		// 削除処理
		if (vertex) {
			// 頂点を削除
			this.deleteVertex(vertex);
		} else if (edge) {
			// 辺を削除
			this.deleteEdge(edge);
		}
		this.drawGraph();
	}

	// マウスホイール
	private handleWheel(e: WheelEvent): void {
		e.preventDefault();
		this.mouse = this.getMousePosition(e);
		// ズームレベルの更新
		if (e.deltaY < 0) {
			// ズームイン
			this.currentZoomIndex = Math.min(this.currentZoomIndex + 1, this.zoomLevels.length - 1);
		} else {
			// ズームアウト
			this.currentZoomIndex = Math.max(this.currentZoomIndex - 1, 0);
		}

		// 新しいスケールを取得し、スケールが変更されたか確認
		const newScale = this.zoomLevels[this.currentZoomIndex];
		if (newScale !== this.scale) {
			// マウス位置をズームイン、ズームアウトする
			// scaleのキャンバスのマウス位置の割合と、newScaleのキャンバスのマウス位置の割合が同じため下記の式が成り立つ
			// (mouse + origin / scale) / (canvas / scale) = (mouse + newOrigin / newScale) / (canvas / newScale)
			// これを newOrigin について解くと、次の通りになる
			this.origin.x = this.mouse.x * (this.scale - newScale) + this.origin.x;
			this.origin.y = this.mouse.y * (this.scale - newScale) + this.origin.y;
			this.scale = newScale;

			// 移動制限
			this.limitCanvasPan();
		}

		this.drawGraph();
	}

	// ============================================================================
	// 処理関数
	// ============================================================================
	// マウス位置を取得する
	private getMousePosition(e: MouseEvent) {
		const rect = this.canvas.getBoundingClientRect();
		const x = (e.clientX - rect.left - this.origin.x) / this.scale;
		const y = (e.clientY - rect.top - this.origin.y) / this.scale;
		return { x, y };
	}

	// 選択状態を初期化する
	private initSelected(): void {
		this.selectedVertex && (this.selectedVertex.isSelected = false);
		this.selectedVertex = null;
		this.selectedEdge && (this.selectedEdge.isSelected = false);
		this.selectedEdge = null;
		this.canvas.style.cursor = "default";
	}

	// 頂点を追加する
	private addVertex(x: number, y: number): Vertex {
		const vertex = new Vertex(x, y);
		this.vertices.push(vertex);
		// 次数配列の更新
		this.updateDegreeSequence(this.vertices);
		return vertex;
	}

	// 頂点を削除する
	private deleteVertex(vertex: Vertex): void {
		// 頂点を削除
		this.vertices.splice(this.vertices.indexOf(vertex), 1);
		// 頂点に接続された辺を取得
		const deleteEdges: Edge[] = this.edges.filter((edge) => edge.from === vertex || edge.to === vertex);
		// 辺を削除
		deleteEdges.forEach((edge) => {
			this.deleteEdge(edge);
		});
		// 次数配列の更新
		this.updateDegreeSequence(this.vertices);
	}

	// 辺を追加する
	private addEdge(from: Vertex, to: Vertex): Edge | null {
		// 異なる２頂点か？
		if (from && to && from !== to) {
			// 重複辺を取得
			const duplicateEdge = this.edges.find((edge) => (edge.from === from && edge.to === to) || (edge.from === to && edge.to === from));
			// 重複辺は削除
			if (duplicateEdge) {
				this.deleteEdge(duplicateEdge);
			}
			// 新しい辺を追加
			const edge = new Edge(from, to);
			this.edges.push(edge);
			// 次数配列の更新
			this.updateDegreeSequence(this.vertices);
			return edge;
		}
		return null;
	}

	// 辺を削除する
	private deleteEdge(edge: Edge): void {
		// 辺に接続している頂点から、辺を削除
		edge.from.deleteEdge(edge);
		edge.to.deleteEdge(edge);
		// 辺オブジェクト配列から、辺を削除
		this.edges = this.edges.filter((tempEdge) => tempEdge !== edge);
		// 次数配列の更新
		this.updateDegreeSequence(this.vertices);
	}

	// キャンバスの移動制限
	private limitCanvasPan(): void {
		const maxX = this.MAX_CANVAS_WIDTH * this.scale - this.canvas.width;
		const maxY = this.MAX_CANVAS_HEIGHT * this.scale - this.canvas.height;
		this.origin.x = this.origin.x + maxX < 0 ? -maxX : this.origin.x;
		this.origin.y = this.origin.y + maxY < 0 ? -maxY : this.origin.y;
		this.origin.x = 0 < this.origin.x ? 0 : this.origin.x;
		this.origin.y = 0 < this.origin.y ? 0 : this.origin.y;
	}

	// リサイズ
	private resizeCanvas(): void {
		this.canvas.width = window.innerWidth * 0.8;
		this.canvas.height = window.innerHeight - 90;

		// 中心を初期描画位置にする
		this.origin.x = (this.MAX_CANVAS_WIDTH - this.canvas.width / this.scale) / 2;
		this.origin.y = (this.MAX_CANVAS_HEIGHT - this.canvas.height / this.scale) / 2;
		// 座標をピクセルに変換し、値をマイナス変換をする（originの仕様）
		this.origin.x = -this.origin.x * this.scale;
		this.origin.y = -this.origin.y * this.scale;

		this.drawGraph();
	}

	// グラフの初期化
	initGraph(): void {
		this.vertices = [];
		this.edges = [];
		this.initSelected();
		this.scale = 1;
		this.currentZoomIndex = 10;
		this.draggingPoint = null;
		this.activeEdge = null;
		this.isDragging = false;
		this.lastPos = { x: 0, y: 0 };
		// 次数配列の更新
		this.updateDegreeSequence(this.vertices);
		this.resizeCanvas();
	}

	// 頂点情報の表示切り替え
	drawVertexInfo(showIndex: boolean, showDegree: boolean): void {
		this.showIndex = showIndex;
		this.showDegree = showDegree;
		this.drawGraph();
	}

	// 辺をすべて直線にする
	straightenEdges(): void {
		for (let edge of this.edges) {
			edge.straightenEdge();
		}
		// 次数配列の更新
		this.updateDegreeSequence(this.vertices);
		this.drawGraph();
	}

	// ============================================================================
	// 描画処理
	// ============================================================================
	// グリッドの描画
	private drawGrid() {
		if (!this.showGrid) {
			return;
		}

		const gridSize = 100;
		const gridCountX = Math.ceil(this.MAX_CANVAS_WIDTH / gridSize);
		const gridCountY = Math.ceil(this.MAX_CANVAS_HEIGHT / gridSize);

		this.ctx.save();
		this.ctx.strokeStyle = "#e0e0e0";
		this.ctx.lineWidth = 1;

		// グリッド線を描画
		for (let i = 0; i <= gridCountX; i++) {
			const x = i * gridSize;
			this.ctx.beginPath();
			this.ctx.moveTo(x, 0);
			this.ctx.lineTo(x, this.MAX_CANVAS_HEIGHT);
			this.ctx.stroke();
		}
		for (let j = 0; j <= gridCountY; j++) {
			const y = j * gridSize;
			this.ctx.beginPath();
			this.ctx.moveTo(0, y);
			this.ctx.lineTo(this.MAX_CANVAS_WIDTH, y);
			this.ctx.stroke();
		}

		this.ctx.restore();
	}

	// グラフ描画
	private drawGraph(): void {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.save();
		this.ctx.translate(this.origin.x, this.origin.y);
		this.ctx.scale(this.scale, this.scale);

		// グリッドの描画
		this.drawGrid();

		// 力指向モードによって辺の描画を切り替える
		if (this.forceDirectMode) {
			// 辺の描画
			this.edges.forEach((edge) => edge.draw(this.ctx));
		} else {
			// 辺の描画
			this.edges.forEach((edge) => edge.drawBezier(this.ctx));
			// 制御点の描画
			this.activeEdge && this.activeEdge.control.draw(this.ctx);
			this.draggingPoint instanceof Control && this.draggingPoint.draw(this.ctx);
		}
		// 頂点の描画
		this.vertices.forEach((vertex, index) => vertex.draw(this.ctx, this.showIndex, index, this.showDegree));
		this.ctx.restore();

		// 画面上の情報更新
		this.updateInfo!({
			vertexCount: this.vertices.length,
			edgeCount: this.edges.length,
		});

		// 情報表示（倍率と座標）
		this.ctx.save();
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.ctx.font = "16px Sans-serif";
		const zoomText = `倍率: ${this.scale.toFixed(2)}x  座標: (${this.mouse.x.toFixed(0)}, ${this.mouse.y.toFixed(0)})`;
		const zoomTextWidth = this.ctx.measureText(zoomText).width;
		this.ctx.fillStyle = "white";
		this.ctx.fillRect(0, this.canvas.height - 30, zoomTextWidth + 20, 30);
		this.ctx.fillStyle = "black";
		this.ctx.fillText(zoomText, 10, this.canvas.height - 10);
		this.ctx.restore();
	}

	// ============================================================================
	// 力指向アルゴリズム
	// ============================================================================
	private intervalId: NodeJS.Timeout | null = null;

	// 力指向モードのON/OFF
	changeForceDirectMode(forceDirectMode: boolean): void {
		this.forceDirectMode = forceDirectMode;
		if (this.forceDirectMode) {
			this.intervalId = setInterval(() => {
				this.updateForceDirectedLayout();
			}, 100);
		} else if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}

	// 力指向レイアウトの更新
	private updateForceDirectedLayout(): void {
		// 斥力
		const repulsionConstant = 30000;
		// 引力
		const attractionConstant = 10000;
		const maxDisplacement = 50;
		const minDistance = 10;

		// 初期変位を0で設定
		let displacements = this.vertices.map(() => ({ x: 0, y: 0 }));

		// 斥力
		this.vertices.forEach((from, i) => {
			this.vertices.forEach((to, j) => {
				if (i !== j) {
					const dx = from.x - to.x;
					const dy = from.y - to.y;
					let distance = Math.sqrt(dx * dx + dy * dy);
					distance = Math.max(distance, minDistance);
					const force = repulsionConstant / (distance * distance);
					displacements[i].x += (dx / distance) * force;
					displacements[i].y += (dy / distance) * force;
				}
			});
		});

		// 引力
		this.edges.forEach((edge) => {
			const fromIndex = this.vertices.indexOf(edge.from);
			const toIndex = this.vertices.indexOf(edge.to);
			const dx = edge.from.x - edge.to.x;
			const dy = edge.from.y - edge.to.y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			const force = (distance * distance) / attractionConstant;
			displacements[fromIndex].x -= (dx / distance) * force;
			displacements[fromIndex].y -= (dy / distance) * force;
			displacements[toIndex].x += (dx / distance) * force;
			displacements[toIndex].y += (dy / distance) * force;
		});

		// 移動座標設定
		displacements.forEach((displacement, index) => {
			const scalar = Math.sqrt(displacement.x * displacement.x + displacement.y * displacement.y);
			if (scalar > 0) {
				const limitedDispX = (displacement.x / scalar) * Math.min(scalar, maxDisplacement);
				const limitedDispY = (displacement.y / scalar) * Math.min(scalar, maxDisplacement);
				this.vertices[index].x += Math.round(limitedDispX);
				this.vertices[index].y += Math.round(limitedDispY);
			}
		});

		this.drawGraph();
	}

	// ============================================================================
	// エクスポート／インポート処理
	// ============================================================================
	// グラフの状態をJSONとしてエクスポート
	exportToJson(): string {
		const exportData = {
			vertices: this.vertices.map((vertex, index) => ({
				id: index,
				x: vertex.x,
				y: vertex.y,
			})),
			edges: this.edges.map((edge) => ({
				from: this.vertices.indexOf(edge.from),
				to: this.vertices.indexOf(edge.to),
				control: {
					x: edge.control.x,
					y: edge.control.y,
				},
			})),
		};
		return JSON.stringify(exportData);
	}

	// JSONからグラフの状態をインポート
	importFromJson(jsonString: string): void {
		const importData = JSON.parse(jsonString);
		this.vertices = importData.vertices.map((vData: any) => new Vertex(vData.x, vData.y));
		this.edges = importData.edges.map((eData: any) => {
			const fromVertex = this.vertices[eData.from];
			const toVertex = this.vertices[eData.to];
			const edge = new Edge(fromVertex, toVertex);
			edge.control.x = eData.control.x;
			edge.control.y = eData.control.y;
			return edge;
		});
		// 次数配列の更新
		this.updateDegreeSequence(this.vertices);
		this.drawGraph();
	}
}
