let map =` 
▨▨▨▨▨▨▨▨▨▨
▨◼◼◼◼◼◼◼◼▨
▨◼◼◼◼◼◼◼◼▨
▨◼◼◼◼◼◼◼◼▨
▨◼◼◼◼◼◼◼◼▨
▨◼◼▢◼◼◼◼◼▨
▨◼◼◼◼◼◼◼◼▨
▨◼◼◼◼◼▣◼◼▨
▨◼◼◼◼◼◼◼◼▨
▨▨▨▨▨▨▨▨▨▨
`

function renderMap(map) {
    gameMapContainer.innerHTML = map
}


function moveAction(map, cb) {
    let idx = map.indexOf('▢')
    let newMap = cb(idx)
    return newMap
}

/* function map.substring(map, st, end){
    return map.map.substring(st, end)
}
 */

/* let checkSymbol = (symbol) => {return map.charAt(map.indexOf(symbol) + idxDifference) }  */

/* function moveRight(map) {
    let idx = map.indexOf('▢');
    let newMap = map.substring(0, idx) + '◼' + '▢' + map.substring(idx+2);
    return newMap
}
function moveLeft(map) {
    let idx = map.indexOf('▢')
    let newMap = map.substring(0, idx - 1) + '▢' + '◼'  + map.substring(idx + 1);
    return newMap
}
function moveDown(map) {
    let idx = map.indexOf('▢')
    let newMap = map.substring(0, idx) +  '◼'+  map.substring(idx +1, idx + 11) + '▢' + map.substring(idx + 12); 
    return newMap
}
function moveUp(map) {
    let idx = map.indexOf('▢')
    let newMap = map.substring(0, idx -11) + '▢' + map.substring(idx -10, idx) + '◼' + map.substring(idx + 1) 
    return newMap
} */


/* function action (event) {
  //console.log(event.code)
  if (event.code == 'ArrowUp'){
      map = moveUp(map)
        renderMap(map)
    }  else if (event.code == 'ArrowDown'){
    map = moveDown(map)
        renderMap(map)
    } else if (event.code == 'ArrowLeft'){
    map = moveLeft(map)
        renderMap(map)
    } else if (event.code == 'ArrowRight'){
    map = moveRight(map)
        renderMap(map)
    }  
} */

function action(event) {
    switch(event.code) {
        case "ArrowUp":
            map = moveAction(map, (idx) => map.substring(0, idx -11) + '▢' + map.substring(idx -10, idx) + '◼' + map.substring(idx + 1))
            renderMap(map)
            break
        case "ArrowDown":
            map = moveAction(map, (idx) => map.substring(0, idx) +  '◼'+  map.substring(idx +1, idx + 11) + '▢' + map.substring(idx + 12))
            renderMap(map)
            break
        case "ArrowLeft":
            map = moveAction(map, (idx) => map.substring(0, idx - 1) + '▢' + '◼'  + map.substring(idx + 1))
            renderMap(map)
            break
        case "ArrowRight":
            map = moveAction(map, (idx) => map.substring(0, idx) + '◼' + '▢' + map.substring(idx+2))
            renderMap(map)
            break
    } 
}



/* function moveEnemyRight(map) {
    let idx = map.indexOf('▣')
    let newMap = map.substring(0, idx) + '◼' + '▣' + map.substring(idx + 2)
    return newMap
}

function moveEnemyLeft(map) {
    let idx = map.indexOf('▣')
    let newMap = map.substring(0, idx -1) + '▣' + '◼' + map.substring(idx +1)
    return newMap 
}

function moveEnemyDown(map) {
    let idx = map.indexOf('▣')
    let newMap = map.substring(0,idx) + '◼' + map.substring(idx + 1, idx + 11) + '▣' + map.substring(idx +12)
    return newMap
}

function moveEnemyUp(map) {
    let idx = map.indexOf('▣')
    let newMap = map.substring(0, idx -11) + '▣' + map.substring(idx -10, idx) + '◼' + map.substring(idx + 1)
    return newMap
} */

/* function actionEnemy (dir) {
    if(dir == 'Up') {
        map = moveEnemyUp(map)
        renderMap(map)
    } else if (dir == 'Down') {
        map = moveEnemyDown(map)
        renderMap(map)
    } else if (dir == 'Left') {
        map = moveEnemyLeft(map)
        renderMap(map)
    } else if (dir == 'Right') {
        map = moveEnemyRight(map)
        renderMap(map)
}
} */

function actionEnemy(dir) {
    switch(dir) {
        case "Up":
            map = moveAction(map, (idx) => map.substring(0, idx -11) + '▣' + map.substring(idx -10, idx) + '◼' + map.substring(idx + 1))
            renderMap(map)
            break
        case "Down":
            map = moveAction(map, (idx) => map.substring(0,idx) + '◼' + map.substring(idx + 1, idx + 11) + '▣' + map.substring(idx +12))
            renderMap(map)
            break
        case "Left":
            map = moveAction(map, (idx) => map.substring(0, idx -1) + '▣' + '◼' + map.substring(idx +1))
            renderMap(map)
            break
        case "Right":
            map = moveAction(map, (idx) => map.substring(0, idx) + '◼' + '▣' + map.substring(idx + 2))
            renderMap(map)
            break
    }   
}



setInterval( () => {
    let idxP = map.indexOf('▢ ')
    let idxE = map.indexOf('▣')

    let idxDiff = idxE - idxP
    let rows = Math.round(idxDiff / 11)
    let cols = idxDiff - rows * 11
    //console.log(idxDiff, idxDiff / 11, '=>' , rows, cols)
    

    if(rows > 0) {
        actionEnemy('Up')
   } else if (cols > 0) {
        actionEnemy('Left')
   } else if (rows < 0) {
        actionEnemy('Down')
   } else if (cols < 0) {
        actionEnemy('Right')
   }

    
}, 1000)


/////////////////////////////////////////////
renderMap(map)