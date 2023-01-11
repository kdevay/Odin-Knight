const GridSize = 8;
let shortestRoute = 0;

function isOffGrid(row, col) {
    return row < 0 || row > 7 || col < 0 || col > 7 ? true : false;
}

function shortestArray(a, b, c, d, e, f, g, h) {
    if (!a && !b && !c && !d && !e && !f && !g && !h) { return null }
    let arr = [...arguments];
    let min = arr.reduce(function(prev, curr) {
        if (!curr) { return prev }
        if (!prev) { return curr }
        return prev.length < curr.length ? prev : curr
    });
    return arr[arr.indexOf(min)];           
}

function getRoutes(route, moves) {
    let routes = [];
    for (let i = 0; i < GridSize; i++) {
        let temp = route.slice(); // Clone route
        temp.push(moves[i]); // Add move to route
        routes.push(temp); // Add route to routes
    }
    return routes;
}

function getMoves(row, col) {
    return [
        [row - 2, col + 1],
        [row - 2, col - 1],
        [row + 2, col + 1],
        [row + 2, col - 1],
        [row - 1, col + 2],
        [row - 1, col - 2],
        [row + 1, col + 2],
        [row + 1, col - 2]
    ];
}

function trackMoves(start, end, route) {
    // If end is found
    if (start[0] === end[0] && start[1] === end[1]) { return route }
    // If current route is longer than shortest route
    if (route.length > shortestRoute) { return null }
    // If knight is off grid
    if (isOffGrid(...start)) { return null }
    // Get all moves for current position
    let moves = getMoves(...start);
    // Get all possible routes for current position
    let routes = getRoutes(route.slice(), moves);

    for (let i = 0; i < GridSize; i++) {
        routes[i] = isOffGrid(...moves[i]) ? null : trackMoves(moves[i], end, routes[i])
    }
    return shortestArray(...routes);
}

function knightMoves(a, b) {
    let path = null;
    while (path === null) {
        path = trackMoves(a, b, []);
        shortestRoute++;
    }
    console.log('You made it in ' + path.length + ' moves! Here\'s your path:')
    path.forEach(move => console.log(move));
    shortestRoute = 0;
}

let path = knightMoves([0, 0], [0, 0]);