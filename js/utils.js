// ============================================================================
// ユーティリティクラス
// ============================================================================
// 位置を取得する
export function getPosition(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

// 位置に近い点を取得する
export function findPointAt(x, y, vertices, edges) {
    // 頂点を検索
    let point = findVertexAt(x, y, vertices);
    // 見つからない場合
    if (point == null) {
        //　制御点を検索
        point = findControlPointAt(x, y, edges);
    }
    return point;
}

// 位置に近い頂点を取得する
export function findVertexAt(x, y, vertices) {
    const foundVertex = vertices.find(vertex => {
        return vertex.isNear(x, y);
    });
    return foundVertex ? foundVertex : null;
}

// 位置に近い制御点を取得する
export function findControlPointAt(x, y, edges) {
    const foundControlPoint = edges.find(edge => {
        return edge.control.isNear(x, y);
    });
    return foundControlPoint ? foundControlPoint.control : null;
}

// 位置に近い辺を取得する
export function findEdgeAt(x, y, edges) {
    const foundEdge = edges.find(edge => {
        return edge.isNear(x, y);
    });
    return foundEdge ? foundEdge : null;
}

