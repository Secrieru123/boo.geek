const game = document.getElementById('game')
const btnReset = document.getElementById('reset')

let gamer = "X", move=0;
let table = [[null,null,null],[null,null,null],[null,null,null]]

let


const genTable = () => {
    let l, c 
    for (let i=0; i<9; i++) {
        let e = document.createElement('div');
        l = Math.round((i+2)/3)-1;
        c = math.round(i%3);
        e.setAttribute('l', l);
        e.setAttribute('c', c)
        jc.appendChild(e);
    }
}

genTable();