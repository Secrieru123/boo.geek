class Component {
    constructor (x, y, w, h, key, frames, rootElement) {
            this.x = x
            this.y = y
            this.w = w
            this.h = h
            this.direction = "up"
            this.key = key
            this.frames = frames
            this.currentFrame = /* this.frames[Object.keys(this.frames)[0]] */ this.getFrame(this.key)
            this.rootElement = rootElement   
            
            this.children = []
            this.render()
            this.getFrame() 
    };

    update() {

    }


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
        let componentClassName = this.constructor.name    // which class is this object from?

        // before render
        let dirFrame = this.getFrame[this.direction]
        if(dirFrame) {
            this.currentFrame = dirFrame
        }
        // nesting      ... = this
        let {x: xOffset, y: yOffset} = this.currentFrame
        
        // remember the LINK to the DOM element
        this.div = document.createElement('div')
        this.div.className = `component ${componentClassName}`    
        this.div.style = `background-position: ${xOffset}px ${yOffset}px;
            top: ${this.y}px;
            left: ${this.x}px;
            `
        this.rootElement.appendChild(this.div)
    };
};


class SnakeHead extends Component {
    update(e) {
        // movement
        if(e !== undefined){
            if(e.key == 'ArrowUp') {
                this.direction = 'up'
            }
            if(e.key == 'ArrowRight') {
                this.direction = 'right'
            }
        };




        if(this.direction == "up") {
            this.y -=64
            this.div.style.top = `${this.y}px`
        }
        if(this.direction == "right") {
            this.x +=64
            this.div.style.left = `${this.x}px`
        }
        // update the div inside DOM
        let dirFrame = this.frames[this.direction]
        if(dirFrame) {
            this.currentFrame = dirFrame
        }
        let {x: xOffset, y: yOffset} = this.currentFrame
        this.div.style.backgroundPosition = `${xOffset}px ${yOffset}px`
    }
}

class SnakeBody extends Component {
   /*  update(e) {
        // movement
        
        if(this.direction == "up") {
            this.y -=64
            this.div.style.top = `${this.y}px`
        }
        if(this.direction == "right") {
            this.x +=64
            this.div.style.left = `${this.x}px`
        }
        // update the div inside DOM
        let dirFrame = this.frames[this.direction]
        if(dirFrame) {
            this.currentFrame = dirFrame
        }
        let {x: xOffset, y: yOffset} = this.currentFrame
        this.div.style.backgroundPosition = `${xOffset}px ${yOffset}px`
    } */
}

class SnakeTail extends Component {
    /* update(e) {
        // movement
        if(this.direction == "up") {
            this.y -=64
            this.div.style.top = `${this.y}px`
        }
        if(this.direction == "right") {
            this.x +=64
            this.div.style.left = `${this.x}px`
        }
        // update the div inside DOM
        let dirFrame = this.frames[this.direction]
        if(dirFrame) {
            this.currentFrame = dirFrame
        }
        let {x: xOffset, y: yOffset} = this.currentFrame
        this.div.style.backgroundPosition = `${xOffset}px ${yOffset}px`
    } */
}

class Snake extends Component {
    constructor(rootElement) {
        super(0,0,0,0,0,{default: {x: 0, y: 0}}, rootElement)
        this.direction = "up"

        this.children.push(new SnakeHead(8,137,64,64,1,{ 
            up:   {x: -192, y: 0}, 
            right:{x: -256, y: 0},
            down: {x: -256, y: -64}, 
            left: {x: -192, y: -64}, 
        },window['map']));

/*         this.children.push(new SnakeBody(8,200,64,64,1, {
            br:   {x: 0, y: 0},
            br:   {x: -128, y: -64},
        }, window["map"]));

        this.children.push(new SnakeBody(8,264,64,64,1, {
            br:   {x: 0, y: 0},
            br:   {x: -128, y: -128},
        }, window["map"]));

        this.children.push(new SnakeBody(8,328,64,64,1, {
            br:   {x: 0, y: 0},
            br:   {x: 0, y: -64},
        }, window["map"]));

        this.children.push(new SnakeTail(8,392,64,64,1,{ 
            up:   {x: -192, y: -128}, 
            right:{x: -256, y: -128},
            down: {x: -256, y: -192}, 
            left: {x: -192, y: -192}, 
        },window['map'])); */
    }

    update(e) {
        for(let i=0; i<this.children.length; i++) {
            this.children[i].update(e)
        }
    }

    render() {

    }
}

class Apple extends Component {

}

class Map extends Component {
    // starts the game
    start() {

        document.body.addEventListener( "keydown",  this.update.bind(this) )

        setInterval(()=>{
            this.update()
        }, 1000)
    }


    update(e) {
        for(let i=0; i<this.children.length; i++) {
            this.children[i].update(e)
        }
    }

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
let gameMap = new Map(0,0,640,640,1,{default:{x:0,y:0}},window["map"])

gameMap.children.push(new Apple(136,136,64,64,1,{default:{x: 0, y: -192},},window['map']));
gameMap.children.push(new Snake(window['map']));

gameMap.start()