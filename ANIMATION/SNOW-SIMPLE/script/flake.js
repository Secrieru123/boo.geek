//methods: fall(), move(), fade() ........
//properties: size, left, top. speed(x,y), color ........


class Flake {
    //APPEAR
    constructor( n, left, top, speed, size ) {
        this.n = n
        this.left = left 
        this.top = top
        this.speed = speed
        this.size = size
    }
 


    // falling phase
    
    fall(cw, ch, cb) {
        this.timerId = setInterval(()=> {
           this.top += this.speed 
           this.update()

           if(this.top >= ch){
               this.disappear(cb)
           }
       }, 20 )
   }

    // DISAPPEAR

    disappear(cb) {
        clearInterval(this.timerId)
        window[`flake__${this.n}`].style.display = 'none'
        cb()
        
    }

    update () {
        // search the div of the current flake
        window[`flake__${this.n}`].style.top = `${this.top}px`
    }

    //PRESENTATION
    render(root) {
        root.innerHTML += `<div id="flake__${this.n}" class="flake" style="transform: scale(${this.size});left: ${this.left}px; top: ${this.top}px;">${this.n}</div>`
    } 


}

