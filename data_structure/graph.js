var Queue = require('./queue');
var Dictionary = require('./dictionary');
var Stack = require('./stack');

function Graph() {
    var vertices = [];
    var adjList = new Dictionary();

    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []);
    };

    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };

    this.toString = function () {
        var s = '';
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]);
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }

        return s;
    };

    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }

        return color;
    };

    this.bfs = function (v, callback) {
        var color = initializeColor();
        var queue = new Queue();

        queue.enqueue(v);

        while (!queue.isEmpty()) {
            var u = queue.dequeue();
            var neighbors = adjList.get(u);
            color[u] = 'grey';

            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }

            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    };

    this.BFS = function (v) {
        var color = initializeColor();
        var queue = new Queue();
        var d = [];
        var pred = [];

        queue.enqueue(v);
        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (!queue.isEmpty()) {
            var u = queue.dequeue();
            var neighbors = adjList.get(u);
            color[u] = 'grey';

            for (i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;

                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }

        return {
            distances: d,
            predecessors: pred
        }
    };

    this.dfs = function (callback) {
        var color = initializeColor();
        for (var i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback);
            }
        }
    };

    var dfsVisit = function (u, color, callback) {
        color[u] = 'grey';
        if (callback) {
            callback(u);
        }

        var neighbors = adjList.get(u);
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                dfsVisit(w, color, callback);
            }
        }

        color[u] = 'black';
    };

    var time = 0;
    this.DFS = function () {
        var color = initializeColor();
        var d = [];
        var f = [];
        var p = [];
        time = 0;

        for (var i = 0; i < vertices.length; i++) {
            f[vertices[i]] = 0;
            d[vertices[i]] = 0;
            p[vertices[i]] = null;
        }

        for (i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                DFSVisit(vertices[i], color, d, f, p);
            }
        }

        return {
            discovery: d,
            finished: f,
            predecessors: p
        }
    };

    var DFSVisit = function (u, color, d, f, p) {
        console.log('discoverd ' + u);
        color[u] = 'grey';
        d[u] = ++time;

        var neighbors = adjList.get(u);
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                p[w] = u;
                DFSVisit(w, color, d, f, p);
            }
        }

        color[u] = 'black';
        f[u] = ++time;
        console.log('expored ' + u);
    };
}

// var graph = new Graph();
// var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
// for (var i = 0; i < myVertices.length; i++) {
//     graph.addVertex(myVertices[i]);
// }
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');

// console.log(graph.toString());
// graph.bfs(myVertices[0], console.log);


// var shortestPathA = graph.BFS(myVertices[0]);
// console.log(shortestPathA);

// var fromVertex = myVertices[0];
// for (var i = 1; i < myVertices.length; i++) {
//     var toVertex = myVertices[i];
//     var path = new Stack();
//
//     for (var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
//         path.push(v);
//     }
//     path.push(fromVertex);
//
//     var s = path.pop();
//     while (!path.isEmpty()) {
//         s += ' -> ' + path.pop();
//     }
//     console.log(s);
// }


// graph.dfs(console.log);



var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');
var result = graph.DFS();