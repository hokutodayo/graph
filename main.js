import { ControlPoint } from './js/ControlPoint.js';
import { Edge } from './js/Edge.js';
import { Vertex } from './js/Vertex.js';
import { findEdgeAt, findPointAt, findVertexAt, getPosition } from './js/utils.js';

// ============================================================================
// メイン処理
// ============================================================================
document.addEventListener('DOMContentLoaded', setup);

function setup() {
    // キャンバス
    const canvas = document.getElementById('graphCanvas');
    // コンテキスト
    const ctx = canvas.getContext('2d');
    // 頂点の配列
    const vertices = [];
    // 辺の配列
    const edges = [];
    // 選択中の頂点
    let selectedVertex = null;
    // ドラッグ状態の点
    let draggingPoint = null;
    // 選択中の辺
    let selectedEdge = null;
    // アクティブな辺
    let activeEdge = null;

    // ============================================================================
    // イベント処理
    // ============================================================================
    canvas.addEventListener('dblclick', handleDoubleClick);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseout', handleMouseOut);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('contextmenu', handleContextMenu);

    // ダブルクリック
    function handleDoubleClick(e) {
        // マウス位置
        const { x, y } = getPosition(e, canvas);
        // 頂点を追加する
        addVetex(x, y);
    }

    // マウスムーブイベント
    function handleMouseMove(e) {
        // マウス位置
        const { x, y } = getPosition(e, canvas);

        // 状態に合わせた処理
        if (draggingPoint !== null) {
            // ドラッグ中の処理
            draggingPoint.x = x;
            draggingPoint.y = y;
            canvas.style.cursor = 'move';
        } else if (selectedVertex !== null) {
            // 選択中の処理
            canvas.style.cursor = 'crosshair';
        } else {
            // 通常時のマウスオーバー
            // 辺
            const edge = findEdgeAt(x, y, edges);
            activeEdge = (edge !== null) ? edge : activeEdge;

            // 頂点
            const point = findPointAt(x, y, vertices, edges);
            canvas.style.cursor = (point != null) ? 'move' : 'default';

        }
        // 描画
        drawGraph();
    };

    // マウスアウトイベント
    function handleMouseOut(e) {
        canvas.style.cursor = 'default';
    };

    // マウスクリックダウンイベント
    function handleMouseDown(e) {
        // マウス位置
        const { x, y } = getPosition(e, canvas);
        const vertex = findVertexAt(x, y, vertices);
        const edge = findEdgeAt(x, y, edges);

        // 選択判定
        const point = findPointAt(x, y, vertices, edges);
        if (point !== null) {
            draggingPoint = point;
        }

        // 一時的に状態を保持
        const tempSelectedVertex = selectedVertex;
        // 選択状態の初期化
        if (selectedVertex) { selectedVertex.isSelected = false; }
        selectedVertex = null;
        if (selectedEdge) { selectedEdge.isSelected = false; }
        selectedEdge = null;
        canvas.style.cursor = 'default';

        // 頂点が選択されていた場合
        if (tempSelectedVertex !== null) {
            // 選択されている頂点と、異なる頂点が取得できた場合は、辺を追加する
            if (vertex !== null && tempSelectedVertex !== vertex) {
                addEdge(tempSelectedVertex, vertex);
            }
        }

        // 頂点の選択
        if (vertex !== null) {
            selectedVertex = vertex;
            selectedVertex.isSelected = true;
            // カーソルを選択用に変更
            canvas.style.cursor = 'crosshair';
        }
        // 辺の選択
        else if (edge !== null) {
            selectedEdge = edge;
            selectedEdge.isSelected = true;
        }

        drawGraph();
    };

    // マウスクリックアップイベント
    function handleMouseUp(e) {
        draggingPoint = null;
        drawGraph();
    };

    // 右クリックイベント
    function handleContextMenu(e) {
        // デフォルトの右クリックメニューを無効化
        e.preventDefault();

        // マウス位置
        const { x, y } = getPosition(e, canvas);

        // マウス位置にある頂点を検索
        const vertex = findVertexAt(x, y, vertices);
        if (vertex !== null) {
            // 頂点が見つかった場合、その頂点を削除
            const vertexIndex = vertices.indexOf(vertex);
            if (vertexIndex > -1) {
                vertices.splice(vertexIndex, 1); // 頂点配列から削除

                // この頂点に接続された辺も削除
                for (let i = edges.length - 1; i >= 0; i--) {
                    if (edges[i].from === vertex || edges[i].to === vertex) {
                        edges.splice(i, 1); // 辺を削除
                    }
                }

                drawGraph(); // グラフを再描画して変更を反映
            }
        }


        // マウス位置にある辺を検索
        const edge = findEdgeAt(x, y, edges);
        if (edge !== null) {
            // 辺が見つかった場合、その辺を削除
            const index = edges.indexOf(edge);
            if (index > -1) {
                edges.splice(index, 1); // 配列から辺を削除
                drawGraph(); // グラフを再描画して変更を反映
            }
        }
    };

    // ============================================================================
    // 各種処理
    // ============================================================================
    // 頂点を追加する
    function addVetex(x, y) {
        const vertex = new Vertex(x, y);
        vertices.push(vertex);
        vertex.animate(ctx);
        return vertex;
    }

    // 辺を追加する
    function addEdge(from, to) {
        // 異なる２頂点になっているか
        if (from !== null && to !== null && from !== to) {
            // 既存の辺を確認し、重複辺になる場合は削除
            for (let i = edges.length - 1; i >= 0; i--) {
                if ((edges[i].from === from && edges[i].to === to) || (edges[i].from === to && edges[i].to === from)) {
                    edges.splice(i, 1); // 既存の辺を削除
                }
            }
            // 新しい辺を追加
            const control = new ControlPoint(from, to);
            const edge = new Edge(from, to, control);
            edges.push(edge);
            return edge;
        }
        return null;
    }

    // グラフ描画
    function drawGraph() {
        // キャンバスをクリア
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 辺の描画
        edges.forEach(edge => {
            edge.draw(ctx);
            // マウスがその辺の近くにあるか、ドラッグ中の制御点がその辺に属している場合のみ制御点を描画
            if (edge === activeEdge || (draggingPoint && draggingPoint.edge === edge)) {
                edge.control.draw(ctx);
            }
        });
        // 頂点の描画
        vertices.forEach(vertex => { vertex.draw(ctx); });
        // 統計情報を更新する
        updateStatistics();
    }

    // ============================================================================
    // GUIメニュー処理
    // ============================================================================
    window.generateVertices = function () {
        const count = parseInt(document.getElementById('vertexCount').value);
        // 初期化
        vertices.length = 0;
        edges.length = 0;
        selectedVertex = null;
        draggingPoint = null;
        selectedEdge = null;
        activeEdge = null;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const baseRadius = 150; // 同心円の基本半径

        drawGraph();

        // 中心の頂点を追加
        const centerVertex = new Vertex(centerX, centerY);
        vertices.push(centerVertex);
        centerVertex.animate(ctx);

        drawGraph();

        let layer = 0; // 現在の六角形の層
        let placed = 1; // 配置された頂点の数
        let vertexIndex = 1; // 頂点配列のインデックス

        while (placed < count) {
            const numVerticesInLayer = 6 * (layer + 1); // 現在の層に配置する頂点数
            const angleStep = 2 * Math.PI / numVerticesInLayer; // 角度のステップ
            let verticesInCurrentLayer = [];

            for (let i = 0; i < numVerticesInLayer && placed < count; i++) {
                const angle = i * angleStep;
                const x = centerX + (layer + 1) * baseRadius * Math.cos(angle);
                const y = centerY + (layer + 1) * baseRadius * Math.sin(angle);
                verticesInCurrentLayer.push(addVetex(x, y));
                drawGraph();
                placed++;
            }

            // 辺を追加する
            if (layer == 0) {
                // 中心の頂点と最初の層の頂点を接続
                verticesInCurrentLayer.forEach(v => addEdge(centerVertex, v));
            } else {
                // 前の層との接続
                let previousLayerStart = vertexIndex - 6 * layer;
                verticesInCurrentLayer.forEach((vertex, index) => {
                    let prevIndex = Math.floor(index / (layer + 1));
                    addEdge(vertex, vertices[previousLayerStart + prevIndex]); // 前の層の頂点と接続
                    if (index % (layer + 1) == 0) {
                        addEdge(vertex, vertices[previousLayerStart + prevIndex + 1]); // 円の周りを接続
                    }
                });
            }

            // 同じ層の頂点を接続する
            for (let i = 0; i < verticesInCurrentLayer.length; i++) {
                let nextVertex = verticesInCurrentLayer[(i + 1) % verticesInCurrentLayer.length];
                addEdge(verticesInCurrentLayer[i], nextVertex);
            }

            vertexIndex += numVerticesInLayer;
            layer++;
        }

        drawGraph(); // グラフを再描画
    };

    function updateStatistics() {
        document.getElementById('vertexDisplay').textContent = '頂点の数: ' + vertices.length;
        document.getElementById('edgeDisplay').textContent = '辺の数: ' + edges.length;
    }
}
