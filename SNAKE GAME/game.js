class Component {
    constructor(x,y,w,h, frames, rootElement) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.frames = frames
        this.currentFrames = this.frames [Object.keys(this.frames)[0]]
        this.rootElement = rootElement
        this.children = []
        this.render()
    }

    render() {
        // HW1. ES6+ refactor the next tow 

        let xOffset = this.frames.up.x
        let yOffset = this.frames.up.y
        this.rootElement.innerHTML = `
        <div 
            id="component 
            class="component" 
            style="background-position: ${xOffset}px ${yOffset}px>
        </div>`
    }

}



class SnakeHead extends Component {

}

class SnakeBody extends Component {
    
}

class SnakeTail extends Component {
    
}

class Snake extends Component {
    constructor() {
        super(0,0,0,0, { default: {x: 0, y: 0}}, rootElement)

        //add the head and tail
        this.children.push(new SnakeHead (0,0,64,64 {
            up:   { x: -192, y: 0},
            right:{ x: -256, y: 0},
            down: { x: -256, y: -64},
            left: { x: -192, y: -64},
        }, windows["test"]))
    }
}

class Apple extends Component {
    
}

class Map extends Component {
    
}


let head = new Component (0,0,64,64, { 
    up:   { x: -192, y: 0},
    right:{ x: -256, y: 0},
    down: { x: -256, y: -64},
    left: { x: -192, y: -64},
}, windows["test"]);

console.log(head)

let apple = new Component (0,0,64,64, { 
    default: { x: 0, y: -192}
}, windows["test"]);


let snake = new Component (0,0,64,64, { 
    default: { x: 0, y: -192}
}, windows["test"]);