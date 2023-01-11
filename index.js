function shortestArray(a, b, c, d, e, f, g, h) {
    if (!a && !b && !c && !d && !e && !f && !g && !h) {
      return null;
    }
    let arr = [...arguments];
    let min = arr.reduce(function(prev, curr) {
      if (!curr) { return prev }
      if (!prev) { return curr }
      return prev.length < curr.length ? prev : curr
    });
    return arr[arr.indexOf(min)];
  }
  
  let shortestRoute = 0;
  
  function branch(queue, start){
    let route = queue.slice();
    route.push(start);
    return route > shortestRoute ? null : route;
  }
  
  function trackMoves(start, end, queue) {
    // Exit conditions
    if (queue.length > shortestRoute) {
      return null; // Current route is longer than shortestRoute
    }
    if (start[0] === end[0] && start[1] === end[1]) { // End is found
      if (queue.length <= shortestRoute) {
        // Current route is less than/equal to shortest route
        shortestRoute = queue.length;
        return queue;
      }
      return null;
    }
    let isOffGrid = start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7;
    if (isOffGrid) {
      return null; // Knight is off grid
    }
    let temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8;
    let queue1 = queue.slice();
    let queue2 = queue.slice();
    let queue3 = queue.slice();
    let queue4 = queue.slice();
    let queue5 = queue.slice();
    let queue6 = queue.slice();
    let queue7 = queue.slice();
    let queue8 = queue.slice();
    temp1 = [start[0] - 2, start[1] + 1];
    queue1.push(temp1);
    queue1 = queue1.length < shortestRoute ? trackMoves(temp1, end, queue1) : null;
    
    temp2 = [start[0] - 2, start[1] - 1];
    queue2.push(temp2);
    queue2 = queue2.length < shortestRoute ? trackMoves(temp2, end, queue2) : null;
    
    temp3 = [start[0] + 2, start[1] + 1];
    queue3.push(temp3);
    queue3 = queue3.length < shortestRoute ? trackMoves(temp3, end, queue3) : null;
    
    temp4 = [start[0] + 2, start[1] - 1];
    queue4.push(temp4);
    queue4 = queue4.length < shortestRoute ? trackMoves(temp4, end, queue4) : null;
    
    temp5 = [start[0] - 1, start[1] + 2];
    queue5.push(temp5);
    queue5 = queue5.length < shortestRoute ? trackMoves(temp5, end, queue5) : null;
    
    temp6 = [start[0] - 1, start[1] - 2];
    queue6.push(temp6);
    queue6 = queue6.length < shortestRoute ? trackMoves(temp6, end, queue6) : null;
    
    temp7 = [start[0] + 1, start[1] + 2];
    queue7.push(temp7);
    queue7 = queue7.length < shortestRoute ? trackMoves(temp7, end, queue7) : null;
    
    temp8 = [start[0] + 1, start[1] - 2];
    queue8.push(temp8);
    queue8 = queue8.length < shortestRoute ? trackMoves(temp8, end, queue8) : null;
  
    return shortestArray(queue1, queue2, queue3, queue4, queue5, queue6, queue7, queue8);
  }
  
  function knightTravails(a, b){
    let path = null;
    while (path === null) {
      path = trackMoves(a, b, []);
      shortestRoute++;
    }
    console.log('You made it in ' + path.length + ' moves! Here\'s your path:')
    path.forEach(move => console.log(move));
    shortestRoute = 0;
  }
  
  let path = knightTravails([0, 0], [7, 7]);
  