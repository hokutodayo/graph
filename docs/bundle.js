/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DegreeSequence .ts":
/*!********************************!*\
  !*** ./src/DegreeSequence .ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DegreeSequence: () => (/* binding */ DegreeSequence)
/* harmony export */ });
// ============================================================================
// 次数配列クラス
// ============================================================================
class DegreeSequence {
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
    setValue(value) {
        let cleanedValue = value
            .replace(/([,*])\1+/g, "$1") // 連続するカンマやアスタリスクを一つにする
            .replace(/[,*]$/, ""); // 最後のカンマやアスタリスクを削除
        // 文字列を配列に変換
        if (cleanedValue.includes("*")) {
            this.sequence = this.runLengthStringToSequence(cleanedValue);
        }
        else {
            this.sequence = this.arrayStringToSequence(cleanedValue);
        }
        // ソート
        this.sequence = this.arrangeSequence(this.sequence);
    }
    // ランレングス圧縮形式の文字列を配列に変換
    runLengthStringToSequence(input) {
        if (!input)
            return [];
        return input.split(",").reduce((acc, part) => {
            const [value, count] = part.split("*").map(Number);
            if (count !== 0) {
                // 数が0でない場合のみ追加
                for (let i = 0; i < count; i++) {
                    acc.push(value);
                }
            }
            return acc;
        }, []);
    }
    // 次数配列形式の文字列を配列に変換
    arrayStringToSequence(input) {
        return input
            .split(",")
            .filter((item) => item !== "")
            .map(Number);
    }
    // ランレングス圧縮形式の文字列に変換
    convertToRunLength(sequence) {
        if (sequence.length === 0)
            return "";
        // 降順にソート
        sequence.sort((a, b) => b - a);
        let result = [];
        let current = sequence[0];
        let count = 1;
        for (let i = 1; i < this.sequence.length; i++) {
            if (this.sequence[i] === current) {
                count++;
            }
            else {
                result.push(`${current}*${count}`);
                current = this.sequence[i];
                count = 1;
            }
        }
        // 最後の要素を追加
        result.push(`${current}*${count}`);
        return result.join(", ");
    }
    // 極大平面グラフかどうかを検証
    isMaximalPlanarGraph() {
        const n = this.sequence.length;
        const totalDegree = this.sequence.reduce((sum, degree) => sum + degree, 0);
        const expectedEdges = 3 * n - 6;
        if (n < 3)
            return false;
        if (totalDegree !== 2 * expectedEdges)
            return false;
        return true;
    }
    // 配列を特定のパターンで再配置
    arrangeSequence(sequence) {
        sequence.sort((a, b) => a - b);
        let arranged = [];
        let addLast = true;
        for (const num of sequence) {
            if (addLast) {
                arranged.push(num);
            }
            else {
                arranged.unshift(num);
            }
            addLast = !addLast;
        }
        return arranged;
    }
}


/***/ }),

/***/ "./src/GraphManager.ts":
/*!*****************************!*\
  !*** ./src/GraphManager.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphManager: () => (/* binding */ GraphManager)
/* harmony export */ });
/* harmony import */ var _object_Control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object/Control */ "./src/object/Control.ts");
/* harmony import */ var _object_Edge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object/Edge */ "./src/object/Edge.ts");
/* harmony import */ var _object_Vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/Vertex */ "./src/object/Vertex.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");




// ============================================================================
// 列挙体
// ============================================================================
// マウスボタンの列挙体
var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["Left"] = 0] = "Left";
    MouseButton[MouseButton["Middle"] = 1] = "Middle";
    MouseButton[MouseButton["Right"] = 2] = "Right";
})(MouseButton || (MouseButton = {}));
// ============================================================================
// グラフクラス
// ============================================================================
class GraphManager {
    constructor(canvas, updateInfo) {
        this.MAX_CANVAS_WIDTH = 20000;
        this.MAX_CANVAS_HEIGHT = 10000;
        // グリッド表示状態
        this.showGrid = true;
        // マウス位置
        this.mouse = { x: 0, y: 0 };
        // オブジェクト管理
        this.vertices = [];
        this.edges = [];
        // オブジェクト操作
        this.selectedVertex = null;
        this.selectedEdge = null;
        this.draggingPoint = null;
        this.activeEdge = null;
        // ズーム機能関連
        this.origin = { x: 0, y: 0 };
        this.scale = 1;
        this.zoomLevels = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.75, 2.0, 2.5, 3.0, 3.5, 4.0];
        this.currentZoomIndex = 10; // 初期値 100%
        // パン機能
        this.isDragging = false;
        this.lastPos = { x: 0, y: 0 };
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.updateInfo = updateInfo;
        this.setupEvents();
        this.resizeCanvas();
    }
    // ============================================================================
    // イベント処理
    // ============================================================================
    // イベント登録
    setupEvents() {
        this.canvas.addEventListener("dblclick", this.handleDoubleClick.bind(this));
        this.canvas.addEventListener("mousemove", this.handleMouseMove.bind(this));
        this.canvas.addEventListener("mouseout", this.handleMouseOut.bind(this));
        this.canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
        this.canvas.addEventListener("mouseup", this.handleMouseUp.bind(this));
        this.canvas.addEventListener("contextmenu", this.handleContextMenu.bind(this));
        this.canvas.addEventListener("wheel", this.handleWheel.bind(this));
        window.addEventListener("resize", this.resizeCanvas.bind(this));
    }
    // ダブルクリック
    handleDoubleClick(e) {
        this.mouse = this.getMousePosition(e);
        this.addVertex(this.mouse.x, this.mouse.y);
        this.drawGraph();
    }
    // マウスムーブ
    handleMouseMove(e) {
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
            const maxX = this.MAX_CANVAS_WIDTH * this.scale - this.canvas.width;
            const maxY = this.MAX_CANVAS_HEIGHT * this.scale - this.canvas.height;
            this.origin.x = this.origin.x + maxX < 0 ? -maxX : this.origin.x;
            this.origin.y = this.origin.y + maxY < 0 ? -maxY : this.origin.y;
            this.origin.x = 0 < this.origin.x ? 0 : this.origin.x;
            this.origin.y = 0 < this.origin.y ? 0 : this.origin.y;
            this.lastPos.x = e.clientX;
            this.lastPos.y = e.clientY;
        }
        // 頂点選択済みの場合
        else if (this.selectedVertex) {
            this.canvas.style.cursor = "crosshair";
        }
        else {
            // 辺の近くの場合
            const edge = _utils__WEBPACK_IMPORTED_MODULE_3__.Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);
            edge && (this.activeEdge = edge);
            // 頂点か制御点の近くの場合
            const point = _utils__WEBPACK_IMPORTED_MODULE_3__.Utils.findPointAt(this.mouse.x, this.mouse.y, this.vertices, this.edges);
            this.canvas.style.cursor = point ? "move" : "default";
        }
        this.drawGraph();
    }
    // マウスアウト
    handleMouseOut(e) {
        this.canvas.style.cursor = "default";
        this.handleMouseUp(e);
    }
    // マウスダウン
    handleMouseDown(e) {
        // 左クリック以外は処理なし
        if (e.button !== MouseButton.Left) {
            return;
        }
        this.mouse = this.getMousePosition(e);
        const vertex = _utils__WEBPACK_IMPORTED_MODULE_3__.Utils.findVertexAt(this.mouse.x, this.mouse.y, this.vertices);
        const edge = _utils__WEBPACK_IMPORTED_MODULE_3__.Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);
        const control = _utils__WEBPACK_IMPORTED_MODULE_3__.Utils.findControlAt(this.mouse.x, this.mouse.y, this.edges);
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
    handleMouseUp(e) {
        if (this.draggingPoint instanceof _object_Control__WEBPACK_IMPORTED_MODULE_0__.Control) {
            // バウンディングボックスの再算出
        }
        this.draggingPoint = null;
        this.isDragging = false;
        this.drawGraph();
    }
    // 右クリック
    handleContextMenu(e) {
        e.preventDefault();
        this.mouse = this.getMousePosition(e);
        const vertex = _utils__WEBPACK_IMPORTED_MODULE_3__.Utils.findVertexAt(this.mouse.x, this.mouse.y, this.vertices);
        const edge = _utils__WEBPACK_IMPORTED_MODULE_3__.Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);
        // 選択状態の初期化
        this.initSelected();
        // 削除処理
        if (vertex) {
            // 頂点を削除
            this.deleteVertex(vertex);
        }
        else if (edge) {
            // 辺を削除
            this.deleteEdge(edge);
        }
        this.drawGraph();
    }
    // マウスホイール
    handleWheel(e) {
        e.preventDefault();
        this.mouse = this.getMousePosition(e);
        // ズームレベルの更新
        if (e.deltaY < 0) {
            // ズームイン
            this.currentZoomIndex = Math.min(this.currentZoomIndex + 1, this.zoomLevels.length - 1);
        }
        else {
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
            const maxX = this.MAX_CANVAS_WIDTH * this.scale - this.canvas.width;
            const maxY = this.MAX_CANVAS_HEIGHT * this.scale - this.canvas.height;
            this.origin.x = this.origin.x + maxX < 0 ? -maxX : this.origin.x;
            this.origin.y = this.origin.y + maxY < 0 ? -maxY : this.origin.y;
            this.origin.x = 0 < this.origin.x ? 0 : this.origin.x;
            this.origin.y = 0 < this.origin.y ? 0 : this.origin.y;
        }
        this.drawGraph();
    }
    // ============================================================================
    // 処理関数
    // ============================================================================
    // マウス位置を取得する
    getMousePosition(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left - this.origin.x) / this.scale;
        const y = (e.clientY - rect.top - this.origin.y) / this.scale;
        return { x, y };
    }
    // 選択状態を初期化する
    initSelected() {
        this.selectedVertex && (this.selectedVertex.isSelected = false);
        this.selectedVertex = null;
        this.selectedEdge && (this.selectedEdge.isSelected = false);
        this.selectedEdge = null;
        this.canvas.style.cursor = "default";
    }
    // 頂点を追加する
    addVertex(x, y) {
        const vertex = new _object_Vertex__WEBPACK_IMPORTED_MODULE_2__.Vertex(x, y);
        this.vertices.push(vertex);
        return vertex;
    }
    // 頂点を削除する
    deleteVertex(vertex) {
        // 頂点を削除
        this.vertices.splice(this.vertices.indexOf(vertex), 1);
        // 頂点に接続された辺を取得
        const deleteEdges = this.edges.filter((edge) => edge.from === vertex || edge.to === vertex);
        // 辺を削除
        deleteEdges.forEach((edge) => {
            this.deleteEdge(edge);
        });
    }
    // 辺を追加する
    addEdge(from, to) {
        // 異なる２頂点か？
        if (from && to && from !== to) {
            // 重複辺を取得
            const duplicateEdge = this.edges.find((edge) => (edge.from === from && edge.to === to) || (edge.from === to && edge.to === from));
            // 重複辺は削除
            if (duplicateEdge) {
                this.edges = this.edges.filter((edge) => edge !== duplicateEdge);
                // 辺に接続している頂点から削除する
                from.deleteEdge(duplicateEdge);
                to.deleteEdge(duplicateEdge);
            }
            // 新しい辺を追加
            const edge = new _object_Edge__WEBPACK_IMPORTED_MODULE_1__.Edge(from, to);
            this.edges.push(edge);
            // 頂点に辺を追加
            from.addEdge(edge);
            to.addEdge(edge);
            return edge;
        }
        return null;
    }
    // 辺を削除する
    deleteEdge(edge) {
        // 辺に接続している頂点から、辺を削除
        edge.from.deleteEdge(edge);
        edge.to.deleteEdge(edge);
        // 辺オブジェクト配列から、辺を削除
        this.edges = this.edges.filter((tempEdge) => tempEdge !== edge);
    }
    // リサイズ
    resizeCanvas() {
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
    // ============================================================================
    // 描画処理
    // ============================================================================
    // グリッドの描画
    drawGrid() {
        if (!this.showGrid) {
            return;
        }
        const gridSize = 100; // グリッドの間隔
        const gridCountX = Math.ceil(this.MAX_CANVAS_WIDTH / gridSize);
        const gridCountY = Math.ceil(this.MAX_CANVAS_HEIGHT / gridSize);
        this.ctx.save();
        this.ctx.strokeStyle = "#e0e0e0"; // グリッド線の色
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
    drawGraph() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        this.ctx.translate(this.origin.x, this.origin.y);
        this.ctx.scale(this.scale, this.scale);
        // グリッドの描画
        this.drawGrid();
        // 辺の描画
        this.edges.forEach((edge) => {
            edge.draw(this.ctx);
            // マウスの近くの辺の制御点とドラッグ中の制御点を描画
            if (edge === this.activeEdge || (this.draggingPoint && this.draggingPoint === edge.control)) {
                edge.control.draw(this.ctx);
            }
        });
        // 頂点の描画
        this.vertices.forEach((vertex) => vertex.draw(this.ctx));
        this.ctx.restore();
        // 画面上の情報更新
        this.updateInfo({
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
}


/***/ }),

/***/ "./src/object/Control.ts":
/*!*******************************!*\
  !*** ./src/object/Control.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* binding */ Control)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/object/Point.ts");
/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Position */ "./src/object/Position.ts");


// ============================================================================
// 制御点クラス
// ============================================================================
class Control extends _Point__WEBPACK_IMPORTED_MODULE_0__.Point {
    constructor(from, to, edge) {
        super(0, 0);
        this.from = from;
        this.to = to;
        this.edge = edge;
        // 中点の座標にする
        this.x = (from.x + to.x) / 2;
        this.y = (from.y + to.y) / 2 - Control.ADJUST_VIEW;
    }
    // 計算用の制御点座標（ペジェ曲線算出用）
    getCalcPosition() {
        const controlX = this.x;
        const controlY = this.y + Control.ADJUST_VIEW;
        const midpointX = (this.from.x + this.to.x) / 2;
        const midpointY = (this.from.y + this.to.y) / 2;
        const x = midpointX + Control.IMPACT_FACTOR * (controlX - midpointX);
        const y = midpointY + Control.IMPACT_FACTOR * (controlY - midpointY);
        return new _Position__WEBPACK_IMPORTED_MODULE_1__.Position(x, y);
    }
    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
// 制御点移動の影響倍率
Control.IMPACT_FACTOR = 3;
// 制御点の表示位置調整
Control.ADJUST_VIEW = 20;


/***/ }),

/***/ "./src/object/Edge.ts":
/*!****************************!*\
  !*** ./src/object/Edge.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edge: () => (/* binding */ Edge)
/* harmony export */ });
/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Control */ "./src/object/Control.ts");
/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Position */ "./src/object/Position.ts");


// ============================================================================
// 辺クラス
// ============================================================================
class Edge {
    constructor(from, to) {
        this.from = from;
        this.to = to;
        this.control = new _Control__WEBPACK_IMPORTED_MODULE_0__.Control(from, to, this);
        this.isSelected = false;
        // 頂点に辺を追加する
        this.from.addEdge(this);
        this.to.addEdge(this);
    }
    // マウスの座標がこの辺に近いか判定
    isNear(mouseX, mouseY, tolerance = 10) {
        const calcPosition = this.control.getCalcPosition();
        // ベジェ曲線を分割して近似
        const segment = 10;
        for (let i = 0; i < segment; i++) {
            const t1 = i / segment;
            const t2 = (i + 1) / segment;
            const p1 = this.getBezierPosition(t1, calcPosition);
            const p2 = this.getBezierPosition(t2, calcPosition);
            if (this.pointToSegmentDistance(mouseX, mouseY, p1.x, p1.y, p2.x, p2.y) < tolerance) {
                return true;
            }
        }
        return false;
    }
    getBezierPosition(t, calcPosition) {
        const x = (1 - t) * (1 - t) * this.from.x + 2 * (1 - t) * t * calcPosition.x + t * t * this.to.x;
        const y = (1 - t) * (1 - t) * this.from.y + 2 * (1 - t) * t * calcPosition.y + t * t * this.to.y;
        return new _Position__WEBPACK_IMPORTED_MODULE_1__.Position(x, y);
    }
    pointToSegmentDistance(px, py, x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        if (dx === 0 && dy === 0) {
            return Math.sqrt(Math.pow((px - x1), 2) + Math.pow((py - y1), 2));
        }
        const t = ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy);
        const tClamped = Math.max(0, Math.min(1, t));
        const nearestX = x1 + tClamped * dx;
        const nearestY = y1 + tClamped * dy;
        return Math.sqrt(Math.pow((px - nearestX), 2) + Math.pow((py - nearestY), 2));
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.from.x, this.from.y);
        // 二次ベジェ曲線
        const calcPosition = this.control.getCalcPosition();
        ctx.quadraticCurveTo(calcPosition.x, calcPosition.y, this.to.x, this.to.y);
        ctx.strokeStyle = this.isSelected ? "red" : "rgba(135, 206, 250, 0.85)";
        ctx.lineWidth = 4;
        ctx.stroke();
        if (this.isSelected) {
            this.control.draw(ctx);
        }
    }
}


/***/ }),

/***/ "./src/object/Point.ts":
/*!*****************************!*\
  !*** ./src/object/Point.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Point: () => (/* binding */ Point)
/* harmony export */ });
/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Position */ "./src/object/Position.ts");

// ============================================================================
// 点クラス
// ============================================================================
class Point extends _Position__WEBPACK_IMPORTED_MODULE_0__.Position {
    constructor(x, y) {
        super(x, y);
        this.radius = 4;
    }
    isNear(x, y) {
        return Math.hypot(this.x - x, this.y - y) < this.radius * 2;
    }
}


/***/ }),

/***/ "./src/object/Position.ts":
/*!********************************!*\
  !*** ./src/object/Position.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Position: () => (/* binding */ Position)
/* harmony export */ });
// ============================================================================
// 位置クラス
// ============================================================================
class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


/***/ }),

/***/ "./src/object/Vertex.ts":
/*!******************************!*\
  !*** ./src/object/Vertex.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vertex: () => (/* binding */ Vertex)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/object/Point.ts");

// ============================================================================
// 頂点クラス
// ============================================================================
class Vertex extends _Point__WEBPACK_IMPORTED_MODULE_0__.Point {
    constructor(x, y) {
        super(x, y);
        this.radius = 10;
        this.isSelected = false;
        this.edges = [];
    }
    addEdge(edge) {
        this.edges.push(edge);
    }
    deleteEdge(edge) {
        this.edges = this.edges.filter((tempEdge) => tempEdge !== edge);
    }
    getDegree() {
        return this.edges.length;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 100, 150, 1)";
        ctx.fill();
        ctx.strokeStyle = this.isSelected ? "red" : "rgba(135, 206, 250, 0.85)";
        ctx.lineWidth = 4;
        ctx.stroke();
    }
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Utils: () => (/* binding */ Utils)
/* harmony export */ });
// ============================================================================
// ユーティリティクラス
// ============================================================================
class Utils {
    // 位置に近い点を取得する
    static findPointAt(x, y, vertices, edges) {
        // 頂点を検索
        let point = Utils.findVertexAt(x, y, vertices);
        // 見つからない場合
        if (point == null) {
            // 制御点を検索
            point = Utils.findControlAt(x, y, edges);
        }
        return point;
    }
    // 位置に近い頂点を取得する
    static findVertexAt(x, y, vertices) {
        const foundVertex = vertices.find((vertex) => vertex.isNear(x, y));
        return foundVertex ? foundVertex : null;
    }
    // 位置に近い制御点を取得する
    static findControlAt(x, y, edges) {
        const foundControl = edges.find((edge) => edge.control.isNear(x, y));
        return foundControl ? foundControl.control : null;
    }
    // 位置に近い辺を取得する
    static findEdgeAt(x, y, edges) {
        const foundEdge = edges.find((edge) => edge.isNear(x, y));
        return foundEdge ? foundEdge : null;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DegreeSequence___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DegreeSequence  */ "./src/DegreeSequence .ts");
/* harmony import */ var _GraphManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphManager */ "./src/GraphManager.ts");


// ============================================================================
// イベントリスナー
// ============================================================================
// イベントリスナーを設定
document.addEventListener("DOMContentLoaded", setup);
function setup() {
    toggleButton.addEventListener("click", toggleFormat);
    degreesInput.addEventListener("input", inputDegreeSequence);
    degreesInput.addEventListener("blur", blurDegreeSequence);
    applyButton.addEventListener("click", applyDegreeSequence);
}
// ============================================================================
// GUIメニュー処理
// ============================================================================
// htmlコンポーネント
const toggleButton = document.getElementById("formatToggle");
const degreesInput = document.getElementById("degreeSequenceInput");
const applyButton = document.getElementById("applyDegreeSequence");
// トグルボタンの状態: 初期値は「次数配列」とする
let isDegreeArray = true;
// トグルボタンが切り替わった時の処理
function toggleFormat() {
    isDegreeArray = !isDegreeArray;
    if (isDegreeArray) {
        toggleButton.textContent = "次数配列";
        degreesInput.placeholder = "例: 4,4,4,3,3";
        degreesInput.value = degrees.getArrayString();
    }
    else {
        toggleButton.textContent = "ランレングス圧縮";
        degreesInput.placeholder = "例: 4*3,3*2";
        degreesInput.value = degrees.getRunLengthString();
    }
}
// 次数配列入力欄に入力した時の処理
function inputDegreeSequence() {
    if (isDegreeArray) {
        // 数字、カンマを許容
        const cleanedValue = degreesInput.value.replace(/[^0-9,]/g, "");
        degreesInput.value = cleanedValue;
    }
    else {
        // 数字、カンマ、アスタリスクを許容
        const cleanedValue = degreesInput.value.replace(/[^0-9,*]/g, "");
        degreesInput.value = cleanedValue;
    }
}
// 次数配列入力欄のロストフォーカス時の処理
function blurDegreeSequence() {
    degrees.setValue(degreesInput.value);
    // 値の設定
    if (isDegreeArray) {
        degreesInput.value = degrees.getArrayString();
    }
    else {
        degreesInput.value = degrees.getRunLengthString();
    }
    // 極大平面グラフの検証
    if (!degrees.isMaximalPlanarGraph()) {
        degreesInput.classList.add("is-invalid");
        degreesInput.classList.remove("is-valid");
        applyButton.disabled = true; // 適用ボタンを無効にする
    }
    else {
        degreesInput.classList.remove("is-invalid");
        degreesInput.classList.add("is-valid");
        applyButton.disabled = false; // 適用ボタンを有効にする
    }
}
// 適用ボタンが押された時の処理
function applyDegreeSequence() {
    const input = document.querySelector(".form-control");
    const inputValue = input.value;
    console.log("入力された数式:", inputValue);
    // ここに数式を解析してグラフを描画するロジックを追加
}
// ============================================================================
// プロパティエリア
// ============================================================================
const vertexDisplay = document.getElementById("vertexDisplay");
const edgeDisplay = document.getElementById("edgeDisplay");
const isMaxGraphDisplay = document.getElementById("isMaxGraphDisplay");
const maxGraphEdgeDisplay = document.getElementById("maxGraphEdgeDisplay");
// オブジェクト情報の更新
function updateInfo(info) {
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
    }
    else if (result == 6) {
        isMaxGraphDisplay.textContent = `極大平面グラフか: YES`;
        maxGraphEdgeDisplay.textContent = ``;
    }
    else {
        isMaxGraphDisplay.textContent = `極大平面グラフか: 非平面`;
        maxGraphEdgeDisplay.textContent = `辺の数が ${6 - result} 多いです`;
    }
}
// ============================================================================
// メイン処理
// ============================================================================
const canvas = document.getElementById("graphCanvas");
const graphManager = new _GraphManager__WEBPACK_IMPORTED_MODULE_1__.GraphManager(canvas, updateInfo);
const degrees = new _DegreeSequence___WEBPACK_IMPORTED_MODULE_0__.DegreeSequence();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlCQUFpQjtBQUMxRCxzQ0FBc0MsZUFBZTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsWUFBWTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxZQUFZO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1REFBWTtBQUNyQyxvQkFBb0IsNERBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9zcmMvRGVncmVlU2VxdWVuY2UgLnRzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL3NyYy9HcmFwaE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL29iamVjdC9Db250cm9sLnRzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL3NyYy9vYmplY3QvRWRnZS50cyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9zcmMvb2JqZWN0L1BvaW50LnRzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL3NyYy9vYmplY3QvUG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL29iamVjdC9WZXJ0ZXgudHMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BsYW5hci1ncmFwaC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOasoeaVsOmFjeWIl+OCr+ODqeOCuVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNsYXNzIERlZ3JlZVNlcXVlbmNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZSA9IFtdO1xuICAgIH1cbiAgICAvLyDmrKHmlbDphY3liJflvaLlvI/jga7mloflrZfliJflj5blvpdcbiAgICBnZXRBcnJheVN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VxdWVuY2Uuam9pbihcIiwgXCIpO1xuICAgIH1cbiAgICAvLyDjg6njg7Pjg6zjg7PjgrDjgrnlnKfnuK7lvaLlvI/jga7mloflrZfliJflj5blvpdcbiAgICBnZXRSdW5MZW5ndGhTdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb1J1bkxlbmd0aCh0aGlzLnNlcXVlbmNlKTtcbiAgICB9XG4gICAgLy8g5YWl5Yqb5paH5a2X44GL44KJ6YWN5YiX44Gr44K744OD44OI44GZ44KLXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgbGV0IGNsZWFuZWRWYWx1ZSA9IHZhbHVlXG4gICAgICAgICAgICAucmVwbGFjZSgvKFssKl0pXFwxKy9nLCBcIiQxXCIpIC8vIOmAo+e2muOBmeOCi+OCq+ODs+ODnuOChOOCouOCueOCv+ODquOCueOCr+OCkuS4gOOBpOOBq+OBmeOCi1xuICAgICAgICAgICAgLnJlcGxhY2UoL1ssKl0kLywgXCJcIik7IC8vIOacgOW+jOOBruOCq+ODs+ODnuOChOOCouOCueOCv+ODquOCueOCr+OCkuWJiumZpFxuICAgICAgICAvLyDmloflrZfliJfjgpLphY3liJfjgavlpInmj5tcbiAgICAgICAgaWYgKGNsZWFuZWRWYWx1ZS5pbmNsdWRlcyhcIipcIikpIHtcbiAgICAgICAgICAgIHRoaXMuc2VxdWVuY2UgPSB0aGlzLnJ1bkxlbmd0aFN0cmluZ1RvU2VxdWVuY2UoY2xlYW5lZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VxdWVuY2UgPSB0aGlzLmFycmF5U3RyaW5nVG9TZXF1ZW5jZShjbGVhbmVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOOCveODvOODiFxuICAgICAgICB0aGlzLnNlcXVlbmNlID0gdGhpcy5hcnJhbmdlU2VxdWVuY2UodGhpcy5zZXF1ZW5jZSk7XG4gICAgfVxuICAgIC8vIOODqeODs+ODrOODs+OCsOOCueWcp+e4ruW9ouW8j+OBruaWh+Wtl+WIl+OCkumFjeWIl+OBq+WkieaPm1xuICAgIHJ1bkxlbmd0aFN0cmluZ1RvU2VxdWVuY2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKCFpbnB1dClcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgcmV0dXJuIGlucHV0LnNwbGl0KFwiLFwiKS5yZWR1Y2UoKGFjYywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW3ZhbHVlLCBjb3VudF0gPSBwYXJ0LnNwbGl0KFwiKlwiKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChjb3VudCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIOaVsOOBjDDjgafjgarjgYTloLTlkIjjga7jgb/ov73liqBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG4gICAgLy8g5qyh5pWw6YWN5YiX5b2i5byP44Gu5paH5a2X5YiX44KS6YWN5YiX44Gr5aSJ5o+bXG4gICAgYXJyYXlTdHJpbmdUb1NlcXVlbmNlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBpbnB1dFxuICAgICAgICAgICAgLnNwbGl0KFwiLFwiKVxuICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gXCJcIilcbiAgICAgICAgICAgIC5tYXAoTnVtYmVyKTtcbiAgICB9XG4gICAgLy8g44Op44Oz44Os44Oz44Kw44K55Zyn57iu5b2i5byP44Gu5paH5a2X5YiX44Gr5aSJ5o+bXG4gICAgY29udmVydFRvUnVuTGVuZ3RoKHNlcXVlbmNlKSB7XG4gICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgLy8g6ZmN6aCG44Gr44K944O844OIXG4gICAgICAgIHNlcXVlbmNlLnNvcnQoKGEsIGIpID0+IGIgLSBhKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgY3VycmVudCA9IHNlcXVlbmNlWzBdO1xuICAgICAgICBsZXQgY291bnQgPSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuc2VxdWVuY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcXVlbmNlW2ldID09PSBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGAke2N1cnJlbnR9KiR7Y291bnR9YCk7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuc2VxdWVuY2VbaV07XG4gICAgICAgICAgICAgICAgY291bnQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOacgOW+jOOBruimgee0oOOCkui/veWKoFxuICAgICAgICByZXN1bHQucHVzaChgJHtjdXJyZW50fSoke2NvdW50fWApO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCIsIFwiKTtcbiAgICB9XG4gICAgLy8g5qW15aSn5bmz6Z2i44Kw44Op44OV44GL44Gp44GG44GL44KS5qSc6Ki8XG4gICAgaXNNYXhpbWFsUGxhbmFyR3JhcGgoKSB7XG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLnNlcXVlbmNlLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdG90YWxEZWdyZWUgPSB0aGlzLnNlcXVlbmNlLnJlZHVjZSgoc3VtLCBkZWdyZWUpID0+IHN1bSArIGRlZ3JlZSwgMCk7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkRWRnZXMgPSAzICogbiAtIDY7XG4gICAgICAgIGlmIChuIDwgMylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRvdGFsRGVncmVlICE9PSAyICogZXhwZWN0ZWRFZGdlcylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIOmFjeWIl+OCkueJueWumuOBruODkeOCv+ODvOODs+OBp+WGjemFjee9rlxuICAgIGFycmFuZ2VTZXF1ZW5jZShzZXF1ZW5jZSkge1xuICAgICAgICBzZXF1ZW5jZS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICAgIGxldCBhcnJhbmdlZCA9IFtdO1xuICAgICAgICBsZXQgYWRkTGFzdCA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgbnVtIG9mIHNlcXVlbmNlKSB7XG4gICAgICAgICAgICBpZiAoYWRkTGFzdCkge1xuICAgICAgICAgICAgICAgIGFycmFuZ2VkLnB1c2gobnVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFycmFuZ2VkLnVuc2hpZnQobnVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZExhc3QgPSAhYWRkTGFzdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYW5nZWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gXCIuL29iamVjdC9Db250cm9sXCI7XG5pbXBvcnQgeyBFZGdlIH0gZnJvbSBcIi4vb2JqZWN0L0VkZ2VcIjtcbmltcG9ydCB7IFZlcnRleCB9IGZyb20gXCIuL29iamVjdC9WZXJ0ZXhcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOWIl+aMmeS9k1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g44Oe44Km44K544Oc44K/44Oz44Gu5YiX5oyZ5L2TXG52YXIgTW91c2VCdXR0b247XG4oZnVuY3Rpb24gKE1vdXNlQnV0dG9uKSB7XG4gICAgTW91c2VCdXR0b25bTW91c2VCdXR0b25bXCJMZWZ0XCJdID0gMF0gPSBcIkxlZnRcIjtcbiAgICBNb3VzZUJ1dHRvbltNb3VzZUJ1dHRvbltcIk1pZGRsZVwiXSA9IDFdID0gXCJNaWRkbGVcIjtcbiAgICBNb3VzZUJ1dHRvbltNb3VzZUJ1dHRvbltcIlJpZ2h0XCJdID0gMl0gPSBcIlJpZ2h0XCI7XG59KShNb3VzZUJ1dHRvbiB8fCAoTW91c2VCdXR0b24gPSB7fSkpO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g44Kw44Op44OV44Kv44Op44K5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY2xhc3MgR3JhcGhNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHVwZGF0ZUluZm8pIHtcbiAgICAgICAgdGhpcy5NQVhfQ0FOVkFTX1dJRFRIID0gMjAwMDA7XG4gICAgICAgIHRoaXMuTUFYX0NBTlZBU19IRUlHSFQgPSAxMDAwMDtcbiAgICAgICAgLy8g44Kw44Oq44OD44OJ6KGo56S654q25oWLXG4gICAgICAgIHRoaXMuc2hvd0dyaWQgPSB0cnVlO1xuICAgICAgICAvLyDjg57jgqbjgrnkvY3nva5cbiAgICAgICAgdGhpcy5tb3VzZSA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jnrqHnkIZcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xuICAgICAgICB0aGlzLmVkZ2VzID0gW107XG4gICAgICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOaTjeS9nFxuICAgICAgICB0aGlzLnNlbGVjdGVkVmVydGV4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEVkZ2UgPSBudWxsO1xuICAgICAgICB0aGlzLmRyYWdnaW5nUG9pbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZUVkZ2UgPSBudWxsO1xuICAgICAgICAvLyDjgrrjg7zjg6DmqZ/og73plqLpgKNcbiAgICAgICAgdGhpcy5vcmlnaW4gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICAgIHRoaXMuem9vbUxldmVscyA9IFswLjEsIDAuMiwgMC4zLCAwLjQsIDAuNSwgMC42LCAwLjcsIDAuOCwgMC45LCAxLjAsIDEuMSwgMS4yLCAxLjMsIDEuNCwgMS41LCAxLjc1LCAyLjAsIDIuNSwgMy4wLCAzLjUsIDQuMF07XG4gICAgICAgIHRoaXMuY3VycmVudFpvb21JbmRleCA9IDEwOyAvLyDliJ3mnJ/lgKQgMTAwJVxuICAgICAgICAvLyDjg5Hjg7PmqZ/og71cbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFBvcyA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMudXBkYXRlSW5mbyA9IHVwZGF0ZUluZm87XG4gICAgICAgIHRoaXMuc2V0dXBFdmVudHMoKTtcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOOCpOODmeODs+ODiOWHpueQhlxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDjgqTjg5njg7Pjg4jnmbvpjLJcbiAgICBzZXR1cEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIHRoaXMuaGFuZGxlRG91YmxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB0aGlzLmhhbmRsZU1vdXNlT3V0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCB0aGlzLmhhbmRsZUNvbnRleHRNZW51LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcy5oYW5kbGVXaGVlbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemVDYW52YXMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIC8vIOODgOODluODq+OCr+ODquODg+OCr1xuICAgIGhhbmRsZURvdWJsZUNsaWNrKGUpIHtcbiAgICAgICAgdGhpcy5tb3VzZSA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihlKTtcbiAgICAgICAgdGhpcy5hZGRWZXJ0ZXgodGhpcy5tb3VzZS54LCB0aGlzLm1vdXNlLnkpO1xuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDjg57jgqbjgrnjg6Djg7zjg5ZcbiAgICBoYW5kbGVNb3VzZU1vdmUoZSkge1xuICAgICAgICB0aGlzLm1vdXNlID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKGUpO1xuICAgICAgICAvLyDpoILngrnjgYvliLblvqHngrnjga7np7vli5VcbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmdQb2ludCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ1BvaW50LnggPSB0aGlzLm1vdXNlLng7XG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nUG9pbnQueSA9IHRoaXMubW91c2UueTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9IFwibW92ZVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIOOCreODo+ODs+ODkOOCueOBruenu+WLlVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gZS5jbGllbnRYIC0gdGhpcy5sYXN0UG9zLng7XG4gICAgICAgICAgICBjb25zdCBkeSA9IGUuY2xpZW50WSAtIHRoaXMubGFzdFBvcy55O1xuICAgICAgICAgICAgdGhpcy5vcmlnaW4ueCArPSBkeDtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luLnkgKz0gZHk7XG4gICAgICAgICAgICAvLyDnp7vli5XliLbpmZBcbiAgICAgICAgICAgIGNvbnN0IG1heFggPSB0aGlzLk1BWF9DQU5WQVNfV0lEVEggKiB0aGlzLnNjYWxlIC0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBtYXhZID0gdGhpcy5NQVhfQ0FOVkFTX0hFSUdIVCAqIHRoaXMuc2NhbGUgLSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbi54ID0gdGhpcy5vcmlnaW4ueCArIG1heFggPCAwID8gLW1heFggOiB0aGlzLm9yaWdpbi54O1xuICAgICAgICAgICAgdGhpcy5vcmlnaW4ueSA9IHRoaXMub3JpZ2luLnkgKyBtYXhZIDwgMCA/IC1tYXhZIDogdGhpcy5vcmlnaW4ueTtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luLnggPSAwIDwgdGhpcy5vcmlnaW4ueCA/IDAgOiB0aGlzLm9yaWdpbi54O1xuICAgICAgICAgICAgdGhpcy5vcmlnaW4ueSA9IDAgPCB0aGlzLm9yaWdpbi55ID8gMCA6IHRoaXMub3JpZ2luLnk7XG4gICAgICAgICAgICB0aGlzLmxhc3RQb3MueCA9IGUuY2xpZW50WDtcbiAgICAgICAgICAgIHRoaXMubGFzdFBvcy55ID0gZS5jbGllbnRZO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmggueCuemBuOaKnua4iOOBv+OBruWgtOWQiFxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGVkVmVydGV4KSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImNyb3NzaGFpclwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g6L6644Gu6L+R44GP44Gu5aC05ZCIXG4gICAgICAgICAgICBjb25zdCBlZGdlID0gVXRpbHMuZmluZEVkZ2VBdCh0aGlzLm1vdXNlLngsIHRoaXMubW91c2UueSwgdGhpcy5lZGdlcyk7XG4gICAgICAgICAgICBlZGdlICYmICh0aGlzLmFjdGl2ZUVkZ2UgPSBlZGdlKTtcbiAgICAgICAgICAgIC8vIOmggueCueOBi+WItuW+oeeCueOBrui/keOBj+OBruWgtOWQiFxuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBVdGlscy5maW5kUG9pbnRBdCh0aGlzLm1vdXNlLngsIHRoaXMubW91c2UueSwgdGhpcy52ZXJ0aWNlcywgdGhpcy5lZGdlcyk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBwb2ludCA/IFwibW92ZVwiIDogXCJkZWZhdWx0XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3R3JhcGgoKTtcbiAgICB9XG4gICAgLy8g44Oe44Km44K544Ki44Km44OIXG4gICAgaGFuZGxlTW91c2VPdXQoZSkge1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZVVwKGUpO1xuICAgIH1cbiAgICAvLyDjg57jgqbjgrnjg4Djgqbjg7NcbiAgICBoYW5kbGVNb3VzZURvd24oZSkge1xuICAgICAgICAvLyDlt6bjgq/jg6rjg4Pjgq/ku6XlpJbjga/lh6bnkIbjgarjgZdcbiAgICAgICAgaWYgKGUuYnV0dG9uICE9PSBNb3VzZUJ1dHRvbi5MZWZ0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3VzZSA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihlKTtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gVXRpbHMuZmluZFZlcnRleEF0KHRoaXMubW91c2UueCwgdGhpcy5tb3VzZS55LCB0aGlzLnZlcnRpY2VzKTtcbiAgICAgICAgY29uc3QgZWRnZSA9IFV0aWxzLmZpbmRFZGdlQXQodGhpcy5tb3VzZS54LCB0aGlzLm1vdXNlLnksIHRoaXMuZWRnZXMpO1xuICAgICAgICBjb25zdCBjb250cm9sID0gVXRpbHMuZmluZENvbnRyb2xBdCh0aGlzLm1vdXNlLngsIHRoaXMubW91c2UueSwgdGhpcy5lZGdlcyk7XG4gICAgICAgIC8vIOWIpOWumuOBruOBn+OCgeS4gOaZgumAgOmBv1xuICAgICAgICBjb25zdCB0ZW1wU2VsZWN0ZWRWZXJ0ZXggPSB0aGlzLnNlbGVjdGVkVmVydGV4O1xuICAgICAgICAvLyDpgbjmip7nirbmhYvjga7liJ3mnJ/ljJZcbiAgICAgICAgdGhpcy5pbml0U2VsZWN0ZWQoKTtcbiAgICAgICAgLy8g6aCC54K544Gu5aC05ZCIXG4gICAgICAgIGlmICh2ZXJ0ZXgpIHtcbiAgICAgICAgICAgIGlmICh0ZW1wU2VsZWN0ZWRWZXJ0ZXgpIHtcbiAgICAgICAgICAgICAgICAvLyDpgbjmip7muIjjgb/poILngrnjgajjgIHnlbDjgarjgovpoILngrnjgYzlj5blvpfjgafjgY3jgZ/loLTlkIhcbiAgICAgICAgICAgICAgICBpZiAodGVtcFNlbGVjdGVkVmVydGV4ICE9PSB2ZXJ0ZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFZGdlKHRlbXBTZWxlY3RlZFZlcnRleCwgdmVydGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDpoILngrnjgpLpgbjmip7muIjjgb/jgavjgZnjgotcbiAgICAgICAgICAgIHZlcnRleC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWZXJ0ZXggPSB2ZXJ0ZXg7XG4gICAgICAgICAgICAvLyDjgqvjg7zjgr3jg6vjgpLpgbjmip7nlKjjgavlpInmm7RcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XG4gICAgICAgICAgICAvLyDjg4njg6njg4PjgrDplovlp4tcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdQb2ludCA9IHZlcnRleDtcbiAgICAgICAgfVxuICAgICAgICAvLyDliLblvqHngrnjga7loLTlkIhcbiAgICAgICAgZWxzZSBpZiAoY29udHJvbCkge1xuICAgICAgICAgICAgLy8g44OJ44Op44OD44Kw6ZaL5aeLXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nUG9pbnQgPSBjb250cm9sO1xuICAgICAgICB9XG4gICAgICAgIC8vIOi+uuOBruWgtOWQiFxuICAgICAgICBlbHNlIGlmIChlZGdlKSB7XG4gICAgICAgICAgICAvLyDovrrjgpLpgbjmip7muIjjgb/jgavjgZnjgotcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRFZGdlID0gZWRnZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRFZGdlLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOOCreODo+ODs+ODkOOCueOBrumBuOaKnlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxhc3RQb3MueCA9IGUuY2xpZW50WDtcbiAgICAgICAgICAgIHRoaXMubGFzdFBvcy55ID0gZS5jbGllbnRZO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd0dyYXBoKCk7XG4gICAgfVxuICAgIC8vIOODnuOCpuOCueOCouODg+ODl1xuICAgIGhhbmRsZU1vdXNlVXAoZSkge1xuICAgICAgICBpZiAodGhpcy5kcmFnZ2luZ1BvaW50IGluc3RhbmNlb2YgQ29udHJvbCkge1xuICAgICAgICAgICAgLy8g44OQ44Km44Oz44OH44Kj44Oz44Kw44Oc44OD44Kv44K544Gu5YaN566X5Ye6XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmFnZ2luZ1BvaW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHJhd0dyYXBoKCk7XG4gICAgfVxuICAgIC8vIOWPs+OCr+ODquODg+OCr1xuICAgIGhhbmRsZUNvbnRleHRNZW51KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm1vdXNlID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKGUpO1xuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBVdGlscy5maW5kVmVydGV4QXQodGhpcy5tb3VzZS54LCB0aGlzLm1vdXNlLnksIHRoaXMudmVydGljZXMpO1xuICAgICAgICBjb25zdCBlZGdlID0gVXRpbHMuZmluZEVkZ2VBdCh0aGlzLm1vdXNlLngsIHRoaXMubW91c2UueSwgdGhpcy5lZGdlcyk7XG4gICAgICAgIC8vIOmBuOaKnueKtuaFi+OBruWIneacn+WMllxuICAgICAgICB0aGlzLmluaXRTZWxlY3RlZCgpO1xuICAgICAgICAvLyDliYrpmaTlh6bnkIZcbiAgICAgICAgaWYgKHZlcnRleCkge1xuICAgICAgICAgICAgLy8g6aCC54K544KS5YmK6ZmkXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVZlcnRleCh2ZXJ0ZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVkZ2UpIHtcbiAgICAgICAgICAgIC8vIOi+uuOCkuWJiumZpFxuICAgICAgICAgICAgdGhpcy5kZWxldGVFZGdlKGVkZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd0dyYXBoKCk7XG4gICAgfVxuICAgIC8vIOODnuOCpuOCueODm+OCpOODvOODq1xuICAgIGhhbmRsZVdoZWVsKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm1vdXNlID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKGUpO1xuICAgICAgICAvLyDjgrrjg7zjg6Djg6zjg5njg6vjga7mm7TmlrBcbiAgICAgICAgaWYgKGUuZGVsdGFZIDwgMCkge1xuICAgICAgICAgICAgLy8g44K644O844Og44Kk44OzXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRab29tSW5kZXggPSBNYXRoLm1pbih0aGlzLmN1cnJlbnRab29tSW5kZXggKyAxLCB0aGlzLnpvb21MZXZlbHMubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDjgrrjg7zjg6DjgqLjgqbjg4hcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFpvb21JbmRleCA9IE1hdGgubWF4KHRoaXMuY3VycmVudFpvb21JbmRleCAtIDEsIDApO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaWsOOBl+OBhOOCueOCseODvOODq+OCkuWPluW+l+OBl+OAgeOCueOCseODvOODq+OBjOWkieabtOOBleOCjOOBn+OBi+eiuuiqjVxuICAgICAgICBjb25zdCBuZXdTY2FsZSA9IHRoaXMuem9vbUxldmVsc1t0aGlzLmN1cnJlbnRab29tSW5kZXhdO1xuICAgICAgICBpZiAobmV3U2NhbGUgIT09IHRoaXMuc2NhbGUpIHtcbiAgICAgICAgICAgIC8vIOODnuOCpuOCueS9jee9ruOCkuOCuuODvOODoOOCpOODs+OAgeOCuuODvOODoOOCouOCpuODiOOBmeOCi1xuICAgICAgICAgICAgLy8gc2NhbGXjga7jgq3jg6Pjg7Pjg5Djgrnjga7jg57jgqbjgrnkvY3nva7jga7libLlkIjjgajjgIFuZXdTY2FsZeOBruOCreODo+ODs+ODkOOCueOBruODnuOCpuOCueS9jee9ruOBruWJsuWQiOOBjOWQjOOBmOOBn+OCgeS4i+iomOOBruW8j+OBjOaIkOOCiueri+OBpFxuICAgICAgICAgICAgLy8gKG1vdXNlICsgb3JpZ2luIC8gc2NhbGUpIC8gKGNhbnZhcyAvIHNjYWxlKSA9IChtb3VzZSArIG5ld09yaWdpbiAvIG5ld1NjYWxlKSAvIChjYW52YXMgLyBuZXdTY2FsZSlcbiAgICAgICAgICAgIC8vIOOBk+OCjOOCkiBuZXdPcmlnaW4g44Gr44Gk44GE44Gm6Kej44GP44Go44CB5qyh44Gu6YCa44KK44Gr44Gq44KLXG4gICAgICAgICAgICB0aGlzLm9yaWdpbi54ID0gdGhpcy5tb3VzZS54ICogKHRoaXMuc2NhbGUgLSBuZXdTY2FsZSkgKyB0aGlzLm9yaWdpbi54O1xuICAgICAgICAgICAgdGhpcy5vcmlnaW4ueSA9IHRoaXMubW91c2UueSAqICh0aGlzLnNjYWxlIC0gbmV3U2NhbGUpICsgdGhpcy5vcmlnaW4ueTtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSBuZXdTY2FsZTtcbiAgICAgICAgICAgIC8vIOenu+WLleWItumZkFxuICAgICAgICAgICAgY29uc3QgbWF4WCA9IHRoaXMuTUFYX0NBTlZBU19XSURUSCAqIHRoaXMuc2NhbGUgLSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IG1heFkgPSB0aGlzLk1BWF9DQU5WQVNfSEVJR0hUICogdGhpcy5zY2FsZSAtIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luLnggPSB0aGlzLm9yaWdpbi54ICsgbWF4WCA8IDAgPyAtbWF4WCA6IHRoaXMub3JpZ2luLng7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbi55ID0gdGhpcy5vcmlnaW4ueSArIG1heFkgPCAwID8gLW1heFkgOiB0aGlzLm9yaWdpbi55O1xuICAgICAgICAgICAgdGhpcy5vcmlnaW4ueCA9IDAgPCB0aGlzLm9yaWdpbi54ID8gMCA6IHRoaXMub3JpZ2luLng7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbi55ID0gMCA8IHRoaXMub3JpZ2luLnkgPyAwIDogdGhpcy5vcmlnaW4ueTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g5Yem55CG6Zai5pWwXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOODnuOCpuOCueS9jee9ruOCkuWPluW+l+OBmeOCi1xuICAgIGdldE1vdXNlUG9zaXRpb24oZSkge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHggPSAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gdGhpcy5vcmlnaW4ueCkgLyB0aGlzLnNjYWxlO1xuICAgICAgICBjb25zdCB5ID0gKGUuY2xpZW50WSAtIHJlY3QudG9wIC0gdGhpcy5vcmlnaW4ueSkgLyB0aGlzLnNjYWxlO1xuICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgfVxuICAgIC8vIOmBuOaKnueKtuaFi+OCkuWIneacn+WMluOBmeOCi1xuICAgIGluaXRTZWxlY3RlZCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZlcnRleCAmJiAodGhpcy5zZWxlY3RlZFZlcnRleC5pc1NlbGVjdGVkID0gZmFsc2UpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmVydGV4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEVkZ2UgJiYgKHRoaXMuc2VsZWN0ZWRFZGdlLmlzU2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFZGdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgfVxuICAgIC8vIOmggueCueOCkui/veWKoOOBmeOCi1xuICAgIGFkZFZlcnRleCh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgoeCwgeSk7XG4gICAgICAgIHRoaXMudmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgIH1cbiAgICAvLyDpoILngrnjgpLliYrpmaTjgZnjgotcbiAgICBkZWxldGVWZXJ0ZXgodmVydGV4KSB7XG4gICAgICAgIC8vIOmggueCueOCkuWJiumZpFxuICAgICAgICB0aGlzLnZlcnRpY2VzLnNwbGljZSh0aGlzLnZlcnRpY2VzLmluZGV4T2YodmVydGV4KSwgMSk7XG4gICAgICAgIC8vIOmggueCueOBq+aOpee2muOBleOCjOOBn+i+uuOCkuWPluW+l1xuICAgICAgICBjb25zdCBkZWxldGVFZGdlcyA9IHRoaXMuZWRnZXMuZmlsdGVyKChlZGdlKSA9PiBlZGdlLmZyb20gPT09IHZlcnRleCB8fCBlZGdlLnRvID09PSB2ZXJ0ZXgpO1xuICAgICAgICAvLyDovrrjgpLliYrpmaRcbiAgICAgICAgZGVsZXRlRWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVFZGdlKGVkZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8g6L6644KS6L+95Yqg44GZ44KLXG4gICAgYWRkRWRnZShmcm9tLCB0bykge1xuICAgICAgICAvLyDnlbDjgarjgovvvJLpoILngrnjgYvvvJ9cbiAgICAgICAgaWYgKGZyb20gJiYgdG8gJiYgZnJvbSAhPT0gdG8pIHtcbiAgICAgICAgICAgIC8vIOmHjeikh+i+uuOCkuWPluW+l1xuICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlRWRnZSA9IHRoaXMuZWRnZXMuZmluZCgoZWRnZSkgPT4gKGVkZ2UuZnJvbSA9PT0gZnJvbSAmJiBlZGdlLnRvID09PSB0bykgfHwgKGVkZ2UuZnJvbSA9PT0gdG8gJiYgZWRnZS50byA9PT0gZnJvbSkpO1xuICAgICAgICAgICAgLy8g6YeN6KSH6L6644Gv5YmK6ZmkXG4gICAgICAgICAgICBpZiAoZHVwbGljYXRlRWRnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRnZXMgPSB0aGlzLmVkZ2VzLmZpbHRlcigoZWRnZSkgPT4gZWRnZSAhPT0gZHVwbGljYXRlRWRnZSk7XG4gICAgICAgICAgICAgICAgLy8g6L6644Gr5o6l57aa44GX44Gm44GE44KL6aCC54K544GL44KJ5YmK6Zmk44GZ44KLXG4gICAgICAgICAgICAgICAgZnJvbS5kZWxldGVFZGdlKGR1cGxpY2F0ZUVkZ2UpO1xuICAgICAgICAgICAgICAgIHRvLmRlbGV0ZUVkZ2UoZHVwbGljYXRlRWRnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDmlrDjgZfjgYTovrrjgpLov73liqBcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UgPSBuZXcgRWRnZShmcm9tLCB0byk7XG4gICAgICAgICAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZSk7XG4gICAgICAgICAgICAvLyDpoILngrnjgavovrrjgpLov73liqBcbiAgICAgICAgICAgIGZyb20uYWRkRWRnZShlZGdlKTtcbiAgICAgICAgICAgIHRvLmFkZEVkZ2UoZWRnZSk7XG4gICAgICAgICAgICByZXR1cm4gZWRnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8g6L6644KS5YmK6Zmk44GZ44KLXG4gICAgZGVsZXRlRWRnZShlZGdlKSB7XG4gICAgICAgIC8vIOi+uuOBq+aOpee2muOBl+OBpuOBhOOCi+mggueCueOBi+OCieOAgei+uuOCkuWJiumZpFxuICAgICAgICBlZGdlLmZyb20uZGVsZXRlRWRnZShlZGdlKTtcbiAgICAgICAgZWRnZS50by5kZWxldGVFZGdlKGVkZ2UpO1xuICAgICAgICAvLyDovrrjgqrjg5bjgrjjgqfjgq/jg4jphY3liJfjgYvjgonjgIHovrrjgpLliYrpmaRcbiAgICAgICAgdGhpcy5lZGdlcyA9IHRoaXMuZWRnZXMuZmlsdGVyKCh0ZW1wRWRnZSkgPT4gdGVtcEVkZ2UgIT09IGVkZ2UpO1xuICAgIH1cbiAgICAvLyDjg6rjgrXjgqTjgrpcbiAgICByZXNpemVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAwLjg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDkwO1xuICAgICAgICAvLyDkuK3lv4PjgpLliJ3mnJ/mj4/nlLvkvY3nva7jgavjgZnjgotcbiAgICAgICAgdGhpcy5vcmlnaW4ueCA9ICh0aGlzLk1BWF9DQU5WQVNfV0lEVEggLSB0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuc2NhbGUpIC8gMjtcbiAgICAgICAgdGhpcy5vcmlnaW4ueSA9ICh0aGlzLk1BWF9DQU5WQVNfSEVJR0hUIC0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gdGhpcy5zY2FsZSkgLyAyO1xuICAgICAgICAvLyDluqfmqJnjgpLjg5Tjgq/jgrvjg6vjgavlpInmj5vjgZfjgIHlgKTjgpLjg57jgqTjg4rjgrnlpInmj5vjgpLjgZnjgovvvIhvcmlnaW7jga7ku5Xmp5jvvIlcbiAgICAgICAgdGhpcy5vcmlnaW4ueCA9IC10aGlzLm9yaWdpbi54ICogdGhpcy5zY2FsZTtcbiAgICAgICAgdGhpcy5vcmlnaW4ueSA9IC10aGlzLm9yaWdpbi55ICogdGhpcy5zY2FsZTtcbiAgICAgICAgdGhpcy5kcmF3R3JhcGgoKTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOaPj+eUu+WHpueQhlxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDjgrDjg6rjg4Pjg4njga7mj4/nlLtcbiAgICBkcmF3R3JpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3dHcmlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JpZFNpemUgPSAxMDA7IC8vIOOCsOODquODg+ODieOBrumWk+malFxuICAgICAgICBjb25zdCBncmlkQ291bnRYID0gTWF0aC5jZWlsKHRoaXMuTUFYX0NBTlZBU19XSURUSCAvIGdyaWRTaXplKTtcbiAgICAgICAgY29uc3QgZ3JpZENvdW50WSA9IE1hdGguY2VpbCh0aGlzLk1BWF9DQU5WQVNfSEVJR0hUIC8gZ3JpZFNpemUpO1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCIjZTBlMGUwXCI7IC8vIOOCsOODquODg+ODiee3muOBruiJslxuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAvLyDjgrDjg6rjg4Pjg4nnt5rjgpLmj4/nlLtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZ3JpZENvdW50WDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gaSAqIGdyaWRTaXplO1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgMCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCwgdGhpcy5NQVhfQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBncmlkQ291bnRZOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBqICogZ3JpZFNpemU7XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLCB5KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLk1BWF9DQU5WQVNfV0lEVEgsIHkpO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgICAvLyDjgrDjg6njg5Xmj4/nlLtcbiAgICBkcmF3R3JhcGgoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xuICAgICAgICAvLyDjgrDjg6rjg4Pjg4njga7mj4/nlLtcbiAgICAgICAgdGhpcy5kcmF3R3JpZCgpO1xuICAgICAgICAvLyDovrrjga7mj4/nlLtcbiAgICAgICAgdGhpcy5lZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBlZGdlLmRyYXcodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8g44Oe44Km44K544Gu6L+R44GP44Gu6L6644Gu5Yi25b6h54K544Go44OJ44Op44OD44Kw5Lit44Gu5Yi25b6h54K544KS5o+P55S7XG4gICAgICAgICAgICBpZiAoZWRnZSA9PT0gdGhpcy5hY3RpdmVFZGdlIHx8ICh0aGlzLmRyYWdnaW5nUG9pbnQgJiYgdGhpcy5kcmFnZ2luZ1BvaW50ID09PSBlZGdlLmNvbnRyb2wpKSB7XG4gICAgICAgICAgICAgICAgZWRnZS5jb250cm9sLmRyYXcodGhpcy5jdHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8g6aCC54K544Gu5o+P55S7XG4gICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXguZHJhdyh0aGlzLmN0eCkpO1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgIC8vIOeUu+mdouS4iuOBruaDheWgseabtOaWsFxuICAgICAgICB0aGlzLnVwZGF0ZUluZm8oe1xuICAgICAgICAgICAgdmVydGV4Q291bnQ6IHRoaXMudmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgICAgZWRnZUNvdW50OiB0aGlzLmVkZ2VzLmxlbmd0aCxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOaDheWgseihqOekuu+8iOWAjeeOh+OBqOW6p+aome+8iVxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTZweCBTYW5zLXNlcmlmXCI7XG4gICAgICAgIGNvbnN0IHpvb21UZXh0ID0gYOWAjeeOhzogJHt0aGlzLnNjYWxlLnRvRml4ZWQoMil9eCAg5bqn5qiZOiAoJHt0aGlzLm1vdXNlLngudG9GaXhlZCgwKX0sICR7dGhpcy5tb3VzZS55LnRvRml4ZWQoMCl9KWA7XG4gICAgICAgIGNvbnN0IHpvb21UZXh0V2lkdGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh6b29tVGV4dCkud2lkdGg7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAsIHpvb21UZXh0V2lkdGggKyAyMCwgMzApO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHpvb21UZXh0LCAxMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTApO1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9Qb3NpdGlvblwiO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g5Yi25b6h54K544Kv44Op44K5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY2xhc3MgQ29udHJvbCBleHRlbmRzIFBvaW50IHtcbiAgICBjb25zdHJ1Y3Rvcihmcm9tLCB0bywgZWRnZSkge1xuICAgICAgICBzdXBlcigwLCAwKTtcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICAgICAgdGhpcy50byA9IHRvO1xuICAgICAgICB0aGlzLmVkZ2UgPSBlZGdlO1xuICAgICAgICAvLyDkuK3ngrnjga7luqfmqJnjgavjgZnjgotcbiAgICAgICAgdGhpcy54ID0gKGZyb20ueCArIHRvLngpIC8gMjtcbiAgICAgICAgdGhpcy55ID0gKGZyb20ueSArIHRvLnkpIC8gMiAtIENvbnRyb2wuQURKVVNUX1ZJRVc7XG4gICAgfVxuICAgIC8vIOioiOeul+eUqOOBruWItuW+oeeCueW6p+aome+8iOODmuOCuOOCp+absue3mueul+WHuueUqO+8iVxuICAgIGdldENhbGNQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFggPSB0aGlzLng7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xZID0gdGhpcy55ICsgQ29udHJvbC5BREpVU1RfVklFVztcbiAgICAgICAgY29uc3QgbWlkcG9pbnRYID0gKHRoaXMuZnJvbS54ICsgdGhpcy50by54KSAvIDI7XG4gICAgICAgIGNvbnN0IG1pZHBvaW50WSA9ICh0aGlzLmZyb20ueSArIHRoaXMudG8ueSkgLyAyO1xuICAgICAgICBjb25zdCB4ID0gbWlkcG9pbnRYICsgQ29udHJvbC5JTVBBQ1RfRkFDVE9SICogKGNvbnRyb2xYIC0gbWlkcG9pbnRYKTtcbiAgICAgICAgY29uc3QgeSA9IG1pZHBvaW50WSArIENvbnRyb2wuSU1QQUNUX0ZBQ1RPUiAqIChjb250cm9sWSAtIG1pZHBvaW50WSk7XG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24oeCwgeSk7XG4gICAgfVxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxufVxuLy8g5Yi25b6h54K556e75YuV44Gu5b2x6Z+/5YCN546HXG5Db250cm9sLklNUEFDVF9GQUNUT1IgPSAzO1xuLy8g5Yi25b6h54K544Gu6KGo56S65L2N572u6Kq/5pW0XG5Db250cm9sLkFESlVTVF9WSUVXID0gMjA7XG4iLCJpbXBvcnQgeyBDb250cm9sIH0gZnJvbSBcIi4vQ29udHJvbFwiO1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9Qb3NpdGlvblwiO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g6L6644Kv44Op44K5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY2xhc3MgRWRnZSB7XG4gICAgY29uc3RydWN0b3IoZnJvbSwgdG8pIHtcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICAgICAgdGhpcy50byA9IHRvO1xuICAgICAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29udHJvbChmcm9tLCB0bywgdGhpcyk7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAvLyDpoILngrnjgavovrrjgpLov73liqDjgZnjgotcbiAgICAgICAgdGhpcy5mcm9tLmFkZEVkZ2UodGhpcyk7XG4gICAgICAgIHRoaXMudG8uYWRkRWRnZSh0aGlzKTtcbiAgICB9XG4gICAgLy8g44Oe44Km44K544Gu5bqn5qiZ44GM44GT44Gu6L6644Gr6L+R44GE44GL5Yik5a6aXG4gICAgaXNOZWFyKG1vdXNlWCwgbW91c2VZLCB0b2xlcmFuY2UgPSAxMCkge1xuICAgICAgICBjb25zdCBjYWxjUG9zaXRpb24gPSB0aGlzLmNvbnRyb2wuZ2V0Q2FsY1Bvc2l0aW9uKCk7XG4gICAgICAgIC8vIOODmeOCuOOCp+absue3muOCkuWIhuWJsuOBl+OBpui/keS8vFxuICAgICAgICBjb25zdCBzZWdtZW50ID0gMTA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0MSA9IGkgLyBzZWdtZW50O1xuICAgICAgICAgICAgY29uc3QgdDIgPSAoaSArIDEpIC8gc2VnbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHAxID0gdGhpcy5nZXRCZXppZXJQb3NpdGlvbih0MSwgY2FsY1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHAyID0gdGhpcy5nZXRCZXppZXJQb3NpdGlvbih0MiwgY2FsY1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50VG9TZWdtZW50RGlzdGFuY2UobW91c2VYLCBtb3VzZVksIHAxLngsIHAxLnksIHAyLngsIHAyLnkpIDwgdG9sZXJhbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXRCZXppZXJQb3NpdGlvbih0LCBjYWxjUG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgeCA9ICgxIC0gdCkgKiAoMSAtIHQpICogdGhpcy5mcm9tLnggKyAyICogKDEgLSB0KSAqIHQgKiBjYWxjUG9zaXRpb24ueCArIHQgKiB0ICogdGhpcy50by54O1xuICAgICAgICBjb25zdCB5ID0gKDEgLSB0KSAqICgxIC0gdCkgKiB0aGlzLmZyb20ueSArIDIgKiAoMSAtIHQpICogdCAqIGNhbGNQb3NpdGlvbi55ICsgdCAqIHQgKiB0aGlzLnRvLnk7XG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24oeCwgeSk7XG4gICAgfVxuICAgIHBvaW50VG9TZWdtZW50RGlzdGFuY2UocHgsIHB5LCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICBjb25zdCBkeCA9IHgyIC0geDE7XG4gICAgICAgIGNvbnN0IGR5ID0geTIgLSB5MTtcbiAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KChweCAtIHgxKSwgMikgKyBNYXRoLnBvdygocHkgLSB5MSksIDIpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ID0gKChweCAtIHgxKSAqIGR4ICsgKHB5IC0geTEpICogZHkpIC8gKGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgY29uc3QgdENsYW1wZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0KSk7XG4gICAgICAgIGNvbnN0IG5lYXJlc3RYID0geDEgKyB0Q2xhbXBlZCAqIGR4O1xuICAgICAgICBjb25zdCBuZWFyZXN0WSA9IHkxICsgdENsYW1wZWQgKiBkeTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdygocHggLSBuZWFyZXN0WCksIDIpICsgTWF0aC5wb3coKHB5IC0gbmVhcmVzdFkpLCAyKSk7XG4gICAgfVxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLmZyb20ueCwgdGhpcy5mcm9tLnkpO1xuICAgICAgICAvLyDkuozmrKHjg5njgrjjgqfmm7Lnt5pcbiAgICAgICAgY29uc3QgY2FsY1Bvc2l0aW9uID0gdGhpcy5jb250cm9sLmdldENhbGNQb3NpdGlvbigpO1xuICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhjYWxjUG9zaXRpb24ueCwgY2FsY1Bvc2l0aW9uLnksIHRoaXMudG8ueCwgdGhpcy50by55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5pc1NlbGVjdGVkID8gXCJyZWRcIiA6IFwicmdiYSgxMzUsIDIwNiwgMjUwLCAwLjg1KVwiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuZHJhdyhjdHgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9Qb3NpdGlvblwiO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g54K544Kv44Op44K5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY2xhc3MgUG9pbnQgZXh0ZW5kcyBQb3NpdGlvbiB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICBzdXBlcih4LCB5KTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA0O1xuICAgIH1cbiAgICBpc05lYXIoeCwgeSkge1xuICAgICAgICByZXR1cm4gTWF0aC5oeXBvdCh0aGlzLnggLSB4LCB0aGlzLnkgLSB5KSA8IHRoaXMucmFkaXVzICogMjtcbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDkvY3nva7jgq/jg6njgrlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbiB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4vUG9pbnRcIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOmggueCueOCr+ODqeOCuVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNsYXNzIFZlcnRleCBleHRlbmRzIFBvaW50IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHN1cGVyKHgsIHkpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDEwO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lZGdlcyA9IFtdO1xuICAgIH1cbiAgICBhZGRFZGdlKGVkZ2UpIHtcbiAgICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgICBkZWxldGVFZGdlKGVkZ2UpIHtcbiAgICAgICAgdGhpcy5lZGdlcyA9IHRoaXMuZWRnZXMuZmlsdGVyKCh0ZW1wRWRnZSkgPT4gdGVtcEVkZ2UgIT09IGVkZ2UpO1xuICAgIH1cbiAgICBnZXREZWdyZWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkZ2VzLmxlbmd0aDtcbiAgICB9XG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMTAwLCAxNTAsIDEpXCI7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuaXNTZWxlY3RlZCA/IFwicmVkXCIgOiBcInJnYmEoMTM1LCAyMDYsIDI1MCwgMC44NSlcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDjg6bjg7zjg4bjgqPjg6rjg4bjgqPjgq/jg6njgrlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gICAgLy8g5L2N572u44Gr6L+R44GE54K544KS5Y+W5b6X44GZ44KLXG4gICAgc3RhdGljIGZpbmRQb2ludEF0KHgsIHksIHZlcnRpY2VzLCBlZGdlcykge1xuICAgICAgICAvLyDpoILngrnjgpLmpJzntKJcbiAgICAgICAgbGV0IHBvaW50ID0gVXRpbHMuZmluZFZlcnRleEF0KHgsIHksIHZlcnRpY2VzKTtcbiAgICAgICAgLy8g6KaL44Gk44GL44KJ44Gq44GE5aC05ZCIXG4gICAgICAgIGlmIChwb2ludCA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyDliLblvqHngrnjgpLmpJzntKJcbiAgICAgICAgICAgIHBvaW50ID0gVXRpbHMuZmluZENvbnRyb2xBdCh4LCB5LCBlZGdlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgIH1cbiAgICAvLyDkvY3nva7jgavov5HjgYTpoILngrnjgpLlj5blvpfjgZnjgotcbiAgICBzdGF0aWMgZmluZFZlcnRleEF0KHgsIHksIHZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kVmVydGV4ID0gdmVydGljZXMuZmluZCgodmVydGV4KSA9PiB2ZXJ0ZXguaXNOZWFyKHgsIHkpKTtcbiAgICAgICAgcmV0dXJuIGZvdW5kVmVydGV4ID8gZm91bmRWZXJ0ZXggOiBudWxsO1xuICAgIH1cbiAgICAvLyDkvY3nva7jgavov5HjgYTliLblvqHngrnjgpLlj5blvpfjgZnjgotcbiAgICBzdGF0aWMgZmluZENvbnRyb2xBdCh4LCB5LCBlZGdlcykge1xuICAgICAgICBjb25zdCBmb3VuZENvbnRyb2wgPSBlZGdlcy5maW5kKChlZGdlKSA9PiBlZGdlLmNvbnRyb2wuaXNOZWFyKHgsIHkpKTtcbiAgICAgICAgcmV0dXJuIGZvdW5kQ29udHJvbCA/IGZvdW5kQ29udHJvbC5jb250cm9sIDogbnVsbDtcbiAgICB9XG4gICAgLy8g5L2N572u44Gr6L+R44GE6L6644KS5Y+W5b6X44GZ44KLXG4gICAgc3RhdGljIGZpbmRFZGdlQXQoeCwgeSwgZWRnZXMpIHtcbiAgICAgICAgY29uc3QgZm91bmRFZGdlID0gZWRnZXMuZmluZCgoZWRnZSkgPT4gZWRnZS5pc05lYXIoeCwgeSkpO1xuICAgICAgICByZXR1cm4gZm91bmRFZGdlID8gZm91bmRFZGdlIDogbnVsbDtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IERlZ3JlZVNlcXVlbmNlIH0gZnJvbSBcIi4vRGVncmVlU2VxdWVuY2UgXCI7XG5pbXBvcnQgeyBHcmFwaE1hbmFnZXIgfSBmcm9tIFwiLi9HcmFwaE1hbmFnZXJcIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOOCpOODmeODs+ODiOODquOCueODiuODvFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6Kit5a6aXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBzZXR1cCk7XG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUZvcm1hdCk7XG4gICAgZGVncmVlc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBpbnB1dERlZ3JlZVNlcXVlbmNlKTtcbiAgICBkZWdyZWVzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgYmx1ckRlZ3JlZVNlcXVlbmNlKTtcbiAgICBhcHBseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXBwbHlEZWdyZWVTZXF1ZW5jZSk7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHVUnjg6Hjg4vjg6Xjg7zlh6bnkIZcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGh0bWzjgrPjg7Pjg53jg7zjg43jg7Pjg4hcbmNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybWF0VG9nZ2xlXCIpO1xuY29uc3QgZGVncmVlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWdyZWVTZXF1ZW5jZUlucHV0XCIpO1xuY29uc3QgYXBwbHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcGx5RGVncmVlU2VxdWVuY2VcIik7XG4vLyDjg4jjgrDjg6vjg5zjgr/jg7Pjga7nirbmhYs6IOWIneacn+WApOOBr+OAjOasoeaVsOmFjeWIl+OAjeOBqOOBmeOCi1xubGV0IGlzRGVncmVlQXJyYXkgPSB0cnVlO1xuLy8g44OI44Kw44Or44Oc44K/44Oz44GM5YiH44KK5pu/44KP44Gj44Gf5pmC44Gu5Yem55CGXG5mdW5jdGlvbiB0b2dnbGVGb3JtYXQoKSB7XG4gICAgaXNEZWdyZWVBcnJheSA9ICFpc0RlZ3JlZUFycmF5O1xuICAgIGlmIChpc0RlZ3JlZUFycmF5KSB7XG4gICAgICAgIHRvZ2dsZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwi5qyh5pWw6YWN5YiXXCI7XG4gICAgICAgIGRlZ3JlZXNJbnB1dC5wbGFjZWhvbGRlciA9IFwi5L6LOiA0LDQsNCwzLDNcIjtcbiAgICAgICAgZGVncmVlc0lucHV0LnZhbHVlID0gZGVncmVlcy5nZXRBcnJheVN0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdG9nZ2xlQnV0dG9uLnRleHRDb250ZW50ID0gXCLjg6njg7Pjg6zjg7PjgrDjgrnlnKfnuK5cIjtcbiAgICAgICAgZGVncmVlc0lucHV0LnBsYWNlaG9sZGVyID0gXCLkvos6IDQqMywzKjJcIjtcbiAgICAgICAgZGVncmVlc0lucHV0LnZhbHVlID0gZGVncmVlcy5nZXRSdW5MZW5ndGhTdHJpbmcoKTtcbiAgICB9XG59XG4vLyDmrKHmlbDphY3liJflhaXlipvmrITjgavlhaXlipvjgZfjgZ/mmYLjga7lh6bnkIZcbmZ1bmN0aW9uIGlucHV0RGVncmVlU2VxdWVuY2UoKSB7XG4gICAgaWYgKGlzRGVncmVlQXJyYXkpIHtcbiAgICAgICAgLy8g5pWw5a2X44CB44Kr44Oz44Oe44KS6Kix5a65XG4gICAgICAgIGNvbnN0IGNsZWFuZWRWYWx1ZSA9IGRlZ3JlZXNJbnB1dC52YWx1ZS5yZXBsYWNlKC9bXjAtOSxdL2csIFwiXCIpO1xuICAgICAgICBkZWdyZWVzSW5wdXQudmFsdWUgPSBjbGVhbmVkVmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyDmlbDlrZfjgIHjgqvjg7Pjg57jgIHjgqLjgrnjgr/jg6rjgrnjgq/jgpLoqLHlrrlcbiAgICAgICAgY29uc3QgY2xlYW5lZFZhbHVlID0gZGVncmVlc0lucHV0LnZhbHVlLnJlcGxhY2UoL1teMC05LCpdL2csIFwiXCIpO1xuICAgICAgICBkZWdyZWVzSW5wdXQudmFsdWUgPSBjbGVhbmVkVmFsdWU7XG4gICAgfVxufVxuLy8g5qyh5pWw6YWN5YiX5YWl5Yqb5qyE44Gu44Ot44K544OI44OV44Kp44O844Kr44K55pmC44Gu5Yem55CGXG5mdW5jdGlvbiBibHVyRGVncmVlU2VxdWVuY2UoKSB7XG4gICAgZGVncmVlcy5zZXRWYWx1ZShkZWdyZWVzSW5wdXQudmFsdWUpO1xuICAgIC8vIOWApOOBruioreWumlxuICAgIGlmIChpc0RlZ3JlZUFycmF5KSB7XG4gICAgICAgIGRlZ3JlZXNJbnB1dC52YWx1ZSA9IGRlZ3JlZXMuZ2V0QXJyYXlTdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlZ3JlZXNJbnB1dC52YWx1ZSA9IGRlZ3JlZXMuZ2V0UnVuTGVuZ3RoU3RyaW5nKCk7XG4gICAgfVxuICAgIC8vIOalteWkp+W5s+mdouOCsOODqeODleOBruaknOiovFxuICAgIGlmICghZGVncmVlcy5pc01heGltYWxQbGFuYXJHcmFwaCgpKSB7XG4gICAgICAgIGRlZ3JlZXNJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaXMtaW52YWxpZFwiKTtcbiAgICAgICAgZGVncmVlc0lucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy12YWxpZFwiKTtcbiAgICAgICAgYXBwbHlCdXR0b24uZGlzYWJsZWQgPSB0cnVlOyAvLyDpgannlKjjg5zjgr/jg7PjgpLnhKHlirnjgavjgZnjgotcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlZ3JlZXNJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaW52YWxpZFwiKTtcbiAgICAgICAgZGVncmVlc0lucHV0LmNsYXNzTGlzdC5hZGQoXCJpcy12YWxpZFwiKTtcbiAgICAgICAgYXBwbHlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTsgLy8g6YGp55So44Oc44K/44Oz44KS5pyJ5Yq544Gr44GZ44KLXG4gICAgfVxufVxuLy8g6YGp55So44Oc44K/44Oz44GM5oq844GV44KM44Gf5pmC44Gu5Yem55CGXG5mdW5jdGlvbiBhcHBseURlZ3JlZVNlcXVlbmNlKCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRyb2xcIik7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKFwi5YWl5Yqb44GV44KM44Gf5pWw5byPOlwiLCBpbnB1dFZhbHVlKTtcbiAgICAvLyDjgZPjgZPjgavmlbDlvI/jgpLop6PmnpDjgZfjgabjgrDjg6njg5XjgpLmj4/nlLvjgZnjgovjg63jgrjjg4Pjgq/jgpLov73liqBcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOODl+ODreODkeODhuOCo+OCqOODquOColxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgdmVydGV4RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVydGV4RGlzcGxheVwiKTtcbmNvbnN0IGVkZ2VEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGdlRGlzcGxheVwiKTtcbmNvbnN0IGlzTWF4R3JhcGhEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpc01heEdyYXBoRGlzcGxheVwiKTtcbmNvbnN0IG1heEdyYXBoRWRnZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1heEdyYXBoRWRnZURpc3BsYXlcIik7XG4vLyDjgqrjg5bjgrjjgqfjgq/jg4jmg4XloLHjga7mm7TmlrBcbmZ1bmN0aW9uIHVwZGF0ZUluZm8oaW5mbykge1xuICAgIHZlcnRleERpc3BsYXkudGV4dENvbnRlbnQgPSBg6aCC54K544Gu5pWwOiAke2luZm8udmVydGV4Q291bnR9YDtcbiAgICBlZGdlRGlzcGxheS50ZXh0Q29udGVudCA9IGDovrrjga7mlbA6ICR7aW5mby5lZGdlQ291bnR9YDtcbiAgICBpZiAoaW5mby52ZXJ0ZXhDb3VudCA8IDMpIHtcbiAgICAgICAgaXNNYXhHcmFwaERpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBtYXhHcmFwaEVkZ2VEaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyDmpbXlpKflubPpnaLjgrDjg6njg5XliKTlrprvvIggM1YgLSBFID0gNiDvvIlcbiAgICBjb25zdCByZXN1bHQgPSAzICogaW5mby52ZXJ0ZXhDb3VudCAtIGluZm8uZWRnZUNvdW50O1xuICAgIGlmIChyZXN1bHQgPiA2KSB7XG4gICAgICAgIGlzTWF4R3JhcGhEaXNwbGF5LnRleHRDb250ZW50ID0gYOalteWkp+W5s+mdouOCsOODqeODleOBizogTk9gO1xuICAgICAgICBtYXhHcmFwaEVkZ2VEaXNwbGF5LnRleHRDb250ZW50ID0gYOi+uuOBruaVsOOBjCAke3Jlc3VsdCAtIDZ9IOi2s+OCiuOBvuOBm+OCk2A7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlc3VsdCA9PSA2KSB7XG4gICAgICAgIGlzTWF4R3JhcGhEaXNwbGF5LnRleHRDb250ZW50ID0gYOalteWkp+W5s+mdouOCsOODqeODleOBizogWUVTYDtcbiAgICAgICAgbWF4R3JhcGhFZGdlRGlzcGxheS50ZXh0Q29udGVudCA9IGBgO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaXNNYXhHcmFwaERpc3BsYXkudGV4dENvbnRlbnQgPSBg5qW15aSn5bmz6Z2i44Kw44Op44OV44GLOiDpnZ7lubPpnaJgO1xuICAgICAgICBtYXhHcmFwaEVkZ2VEaXNwbGF5LnRleHRDb250ZW50ID0gYOi+uuOBruaVsOOBjCAkezYgLSByZXN1bHR9IOWkmuOBhOOBp+OBmWA7XG4gICAgfVxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g44Oh44Kk44Oz5Yem55CGXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYXBoQ2FudmFzXCIpO1xuY29uc3QgZ3JhcGhNYW5hZ2VyID0gbmV3IEdyYXBoTWFuYWdlcihjYW52YXMsIHVwZGF0ZUluZm8pO1xuY29uc3QgZGVncmVlcyA9IG5ldyBEZWdyZWVTZXF1ZW5jZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9