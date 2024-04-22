document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');
    const vertices = [];
    const edges = [];
    let selectedVertexIndex = null;
    let draggingVertexIndex = -1;
    let dragStartPoint = null;
    // 制御点のドラッグ状態を管理
    let draggingControl = null;
    let draggingControlIndex = null;

    // ダブルクリックで、頂点を追加
    canvas.addEventListener('dblclick', function (e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const newVertex = { x: x, y: y, radius: 1, maxRadius: 10, growing: true, growSpeed: 0.6 };
        // 頂点追加
        vertices.push(newVertex);
        // 追加アニメーション
        animateVertex(newVertex);
    });

    // 頂点追加時のアニメーション
    function animateVertex(vertex) {
        function grow() {
            if (vertex.growing) {
                if (vertex.radius < vertex.maxRadius) {
                    vertex.radius += vertex.growSpeed;
                } else {
                    vertex.growing = false;
                }
            } else {
                if (vertex.radius > vertex.maxRadius * 0.8) {
                    vertex.radius -= vertex.growSpeed * 0.5;
                }
            }

            drawGraph();

            if (vertex.growing || vertex.radius > vertex.maxRadius * 0.8) {
                requestAnimationFrame(grow);
            }
        }
        requestAnimationFrame(grow);
    }

    // 辺追加時のアニメーション
    function animateEdge(from, to, control, tMax, step) {
        if (step <= tMax) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // 画面をクリア
            drawVertices(); // 頂点を再描画

            // すべての辺を描画
            edges.forEach(edge => {
                ctx.beginPath();
                if (edge.from === from && edge.to === to) {
                    // アニメーション対象の辺のみ動的に制御点を更新して描画
                    ctx.moveTo(vertices[from].x, vertices[from].y);
                    // t の値に基づいて曲線の一部を描画
                    for (let t = 0; t <= step; t += 0.01) {
                        const x = (1 - t) * (1 - t) * vertices[from].x + 2 * (1 - t) * t * control.x + t * t * vertices[to].x;
                        const y = (1 - t) * (1 - t) * vertices[from].y + 2 * (1 - t) * t * control.y + t * t * vertices[to].y;
                        ctx.lineTo(x, y);
                    }
                } else {
                    // 他の辺は元の制御点で静的に描画
                    ctx.moveTo(vertices[edge.from].x, vertices[edge.from].y);
                    ctx.quadraticCurveTo(edge.control.x, edge.control.y, vertices[edge.to].x, vertices[edge.to].y);
                }
                ctx.strokeStyle = 'rgba(135, 206, 250, 0.85)';
                ctx.lineWidth = 4;
                ctx.stroke();
            });

            requestAnimationFrame(() => animateEdge(from, to, control, tMax, step + 0.05)); // 次のフレームをリクエスト
        } else {
            // tMax が 1 以下で、step が tMax を超える場合、最終的な辺を描画してアニメーションを終了
            drawGraph();
        }
    }


    // 頂点追加
    function addEdge(fromIndex, toIndex) {
        const from = vertices[fromIndex];
        const to = vertices[toIndex];
        const controlX = (from.x + to.x) / 2;
        const controlY = (from.y + to.y) / 2 - 50;

        const newEdge = {
            from: fromIndex,
            to: toIndex,
            control: { x: controlX, y: controlY }
        };
        edges.push(newEdge);
        animateEdge(fromIndex, toIndex, newEdge.control, 1, 0); // アニメーションを開始
    }

    // マウスムーブイベント
    canvas.addEventListener('mousemove', function (e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // ドラッグ中の頂点があれば更新
        if (draggingVertexIndex !== -1) {
            vertices[draggingVertexIndex].x += x - dragStartPoint.x;
            vertices[draggingVertexIndex].y += y - dragStartPoint.y;
            dragStartPoint = { x: x, y: y };
            drawGraph();
        } else if (draggingControl) {
            // 制御点の位置を更新
            draggingControl.x = x;
            draggingControl.y = y;
            drawGraph(); // グラフ再描画
        }

        // 各制御点に対してマウスが近いかチェック
        let overControlPoint = false;
        edges.forEach(edge => {
            const controlX = edge.control.x;
            const controlY = edge.control.y;
            if (Math.hypot(controlX - x, controlY - y) < 5) { // 制御点の近くであれば
                overControlPoint = true;
            }
        });

        // カーソルのスタイルを更新
        if (overControlPoint) {
            canvas.style.cursor = 'move';
        } else {
            const vertexIndex = findVertexAt(x, y);
            if (vertexIndex >= 0) {
                canvas.style.cursor = 'move'; // 頂点の近くなら 'move' に
            } else {
                canvas.style.cursor = 'default'; // それ以外は 'default'
            }
        }
    });

    // マウスオーバーイベント
    canvas.addEventListener('mouseover', function (e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const vertexIndex = findVertexAt(x, y);

        if (vertexIndex >= 0) {
            canvas.style.cursor = 'move';
        }
    });

    // マウスアウトイベント
    canvas.addEventListener('mouseout', function (e) {
        canvas.style.cursor = 'default';
    });

    // マウスクリックダウンイベント
    canvas.addEventListener('mousedown', function (e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 頂点判定
        const vertexIndex = findVertexAt(x, y);
        if (vertexIndex >= 0) {
            draggingVertexIndex = vertexIndex;  // 頂点を選択してドラッグを開始
            dragStartPoint = { x: x, y: y };
        }

        // 制御点判定
        // 制御点判定とドラッグ開始
        edges.forEach((edge, index) => {
            if (Math.hypot(edge.control.x - x, edge.control.y - y) < 5) { // 制御点の近くでクリックされた場合
                draggingControl = edge.control; // ドラッグする制御点を設定
            }
        });

    });

    // マウスクリックアップイベント
    canvas.addEventListener('mouseup', function (e) {
        draggingControl = null;
        draggingVertexIndex = -1;
        dragStartPoint = null;
        drawGraph();
    });

    // 右クリックイベント
    canvas.addEventListener('contextmenu', function (e) {
        e.preventDefault();  // デフォルトの右クリックメニューを無効化
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const vertexIndex = findVertexAt(x, y);

        if (vertexIndex >= 0) {
            if (selectedVertexIndex === null) {
                // 頂点が選択されていない場合、選択を開始
                selectedVertexIndex = vertexIndex;
                canvas.style.cursor = 'crosshair';  // カーソルを選択用に変更
            } else if (selectedVertexIndex !== vertexIndex) {
                // 異なる頂点が選択された場合、辺を描画
                addEdge(selectedVertexIndex, vertexIndex);
                selectedVertexIndex = null;  // 選択を解除
                canvas.style.cursor = 'default';
            }
        } else {
            // 頂点以外がクリックされた場合は選択をキャンセル
            selectedVertexIndex = null;
            canvas.style.cursor = 'default';
        }
        drawGraph();
    });


    // 座標から頂点インデックスを取得する
    function findVertexAt(x, y) {
        return vertices.findIndex(vertex => {
            return Math.sqrt((vertex.x - x) ** 2 + (vertex.y - y) ** 2) <= vertex.radius * 2;
        });
    }

    // グラフ描画
    function drawGraph() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawEdges();
        drawVertices();
    }

    // 頂点描画
    function drawVertices() {
        vertices.forEach(vertex => {
            ctx.beginPath();
            ctx.arc(vertex.x, vertex.y, vertex.radius, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(255, 100, 150, 1)'; // ここで色を設定
            ctx.fill();
            ctx.strokeStyle = 'rgba(135, 206, 250, 0.85)'; // 枠の色を設定
            ctx.lineWidth = 4;
            ctx.stroke();
        });
    }

    // 辺描画
    function drawEdges() {
        edges.forEach(edge => {
            const from = vertices[edge.from];
            const to = vertices[edge.to];
            // 制御点の座標を使用
            const controlX = edge.control.x;
            const controlY = edge.control.y;

            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.quadraticCurveTo(controlX, controlY, to.x, to.y);
            ctx.strokeStyle = 'rgba(135, 206, 250, 0.85)'; // 辺の色
            ctx.lineWidth = 4; // 辺の太さ
            ctx.stroke();

            // 制御点の描画
            ctx.fillStyle = 'red';  // 制御点の色
            ctx.beginPath();
            ctx.arc(controlX, controlY, 5, 0, 2 * Math.PI); // 制御点のサイズと形状
            ctx.fill();
        });
    }

    // グラフ描画
    drawGraph();
});
