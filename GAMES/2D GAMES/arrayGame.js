let map = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,2,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,3,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1],
];

const renderMap = (map) => {

    let output = ""

    map.forEach(row => {
        row.forEach(col =>{
            if(col == 0) {
                output += "◻";
            }else if (col == 1){
                output += "▧";
            }else if (col == 2) {
                output += "▢";
            }else if (col == 3) {
                output += "▣";
            }
        })
        output += "\n";
    })

    gameMapContainer.innerHTML = output
}


renderMap(map)



const moveV = (map,symbol,dir) => {
    map.forEach(row => {
        row.forEach(col => {
            if(map[row][col] == symbol){
                if(map[row+dir][col] != 1 && map[row+dir][col] != 3){
                    map[row][col] = 0
                    map[row+dir][col] = symbol
                    return map
                }else{
                    return map
                }

            }
        })
    })
};



const moveH = (map, symbol, dir) => {
    map.forEach(row => {
        row.forEach(col => {
            if (map[row][col] == symbol) {
                if([row][col +dir] != 1 && [row][col+dir] != 3){
                    map[row][col] = 0
                    map[row][col+dir] = symbol
                    return map
                } else {
                    return map
                }
            }
        })
    })
}


const action = (event)  =>{
    switch(event.code) {
        case 'ArrowUp':
            map = moveV(map, 2, -1)
            renderMap(map)
            break
        case 'ArrowDown':
            map = moveV(map, 2, +1)
            renderMap(map)
            break
        case 'ArrowLeft':
            map = moveH(map, 2, -1)
            renderMap(map)
            break
        case 'ArrowRight':
            map = moveH(map, 2, -1)
            renderMap(msp)
            break
    } ;
};



const actionEnemy = (dir) =>{
    switch(dir){
        case "Up":
            map = moveV(map, 3, -1)
            renderMap(map)
            break;
        case "Down":
            map = moveV(map, 3, +1)
            renderMap(map)
            break;
        case "Left":
            map = moveH(map, 3, -1)
            renderMap(map)
            break;                
        case "Right":
            map = moveH(map, 3, +1)
            renderMap(map)
            break;   
            
    }
}        



setInterval (() =>{
    let mov
    let movM
    let mov1
    let movM1

    for(i = 0; i < map.length; i++){
        for(l = 0; l = map.length; l++){
            if(map[i][l] == 2){
                mov = i
                mob1 = l
            } else if(map[i][l] == 3) {
                movM = i
                movM1 = l                 
            }
        }
    }
    if (mov > moveM) {
        actionEnemy("Right")
    } else if (move1 > moveM1) {
        actionEnemy("Left")
    } else if (move < moveM1) {
        actionEnemy('Down')
    } else if (moveM1 < move) {
        actionEnemy('Up')
    };



}, 1000)