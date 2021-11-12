class Component {
    constructor (x, y, w, h, frames, key, rootElement) {
            this.x = x
            this.y = y
            this.w = w
            this.h = h
            this.key = key
            this.frames = frames
            this.currentFrame = /* this.frames[Object.keys(this.frames)[0]] */ this.getFrame(this.key)
            this.rootElement = rootElement   
            
            this.children = []
            this.render()
            this.getFrame() 

            
            
    };


     getFrame(key) {
        if(typeof key === "number") {
            if(key >= 0) {
                return this.frames[Object.keys(this.frames)[key-1]]
            } else if (key < 0) {
                return this.frames[Object.keys(this.frames)[Object.keys(this.frames).length + key]]
            }
        } else if (typeof key === "string") {
            return this.frames[key]
        }
    } 


    render() {

        // nesting      ... = this
        let {x: xOffset, y: yOffset} = this.currentFrame
        
        let div = document.createElement('div')
            div.className = "component"
            div.style = `background-position: ${xOffset}px ${yOffset}px;
            top: ${this.y}px;
            left: ${this.x}px;
            `
        this.rootElement.appendChild(div)
    };
};



class SnakeHead extends Component {

}

class SnakeBody extends Component {

}

class SnakeTail extends Component {

}

class Snake extends Component {
    constructor(rootElement) {
        super(0,0,0,0,0,{default: {x: 0, y: 0}}, rootElement)
  
        this.children.push(new SnakeHead(8,137,64,64,{ 
            up:   {x: -192, y: 0}, 
            right:{x: -256, y: 0},
            down: {x: -256, y: -64}, 
            left: {x: -192, y: -64}, 
        },window['map']));

        /* this.children.push(new SnakeBody(0,0,64,64, {
            br:   {x: 0, y: 0},
            br:   {x: -128, y: -128},
        }, window["map"])); */

        this.children.push(new SnakeTail(8,200,64,64,{ 
            up:   {x: -192, y: -128}, 
            right:{x: -256, y: -128},
            down: {x: -256, y: -192}, 
            left: {x: -192, y: -192}, 
        },window['map']));
    }

    render() {

    }
}

class Apple extends Component {

}

class Map extends Component {
    render() {

        let div = document.createElement('div')
            div.style = `
            border: 10px solid black; 
            position: absolute;
            width: ${this.w}px; 
            height: ${this.h}px;
            background-image: linear-gradient(transparent 98%,black), linear-gradient(90deg, transparent 98%,black);
            background-size: 64px 64px;
            `
        this.rootElement.appendChild(div)
    };
    
}




/* let snake = new Snake(window['test']); */
let gameMap = new Map(0,0,640,640,{default:{x:0,y:0}},window["map"])

gameMap.children.push(new Apple(136,136,64,64,{default:{x: 0, y: -192},},window['map']));
gameMap.children.push(new Snake(window['map']));