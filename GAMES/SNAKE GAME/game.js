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

    addChild(child) {
        if(child instanceof Component && !this.children.includes(child)) {
                this.children.push(child);
            }
    }

    removeChild(remChild) {
        if(child instanceof Component) {
                this.children.filter(elem => elem != remChild);
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


/* class SnakeSegment extends Component {
    moveDir (e) {

        // ONLY ON TIMER
                if(e == undefined) {
                    if(this.direction == "up") {
                        this.y -=64
                    }else if(this.direction == "right") {
                        this.x +=64

                    }else if(this.direction == "down") {
                        this.y +=64
                    }else if(this.direction == "left") {
                        this.x -=64
                    }
            };
            // update the div inside DOM
            this.div.style.top = `${this.y}px`
            this.div.style.left = `${this.x}px`
            this.div.style.top = `${this.y}px`
            this.div.style.left = `${this.x}px`
            let dirFrame = this.frames[this.direction]
            if(dirFrame) {
                this.currentFrame = dirFrame
            }
            let {x: xOffset, y: yOffset} = this.currentFrame
            this.div.style.backgroundPosition = `${xOffset}px ${yOffset}px `
    };

    
} */

class SnakeHead extends Component {
    update(e) {

        if(e !== undefined){
            if(e.key == 'ArrowUp') {
                this.direction = 'up'
            }else if(e.key == 'ArrowRight') {
                this.direction = 'right'
            }else if(e.key == 'ArrowDown') {
                this.direction = 'down'
            }else if(e.key == 'ArrowLeft') {
                this.direction = 'left'
            }
        };

        // ONLY ON TIMER
        if(e == undefined) {
            if(this.direction == "up") {
                this.y -=64
            }else if(this.direction == "right") {
                this.x +=64
            }else if(this.direction == "down") {
                this.y +=64
            }else if(this.direction == "left") {
                this.x -=64
            }
             // update the div inside DOM
            this.div.style.top = `${this.y}px`
            this.div.style.left = `${this.x}px`
            this.div.style.top = `${this.y}px`
            this.div.style.left = `${this.x}px`
            let dirFrame = this.frames[this.direction]
            if(dirFrame) {
                this.currentFrame = dirFrame
            }
            let {x: xOffset, y: yOffset} = this.currentFrame
            this.div.style.backgroundPosition = `${xOffset}px ${yOffset}px `
    };
    };
   
};

class SnakeBody extends Component {
     update(e, prevChild, nextChild) {
         //ONLY ON TIMER
         if(e == undefined)  {
            if(prevChild!= undefined){
                if(prevChild != undefined) {
                    this.direction = prevChild.direction
                    this.x = prevChild.x
                    this.y = prevChild.y
                }
            }
        
        // update the div inside DOM
        this.div.style.top = `${this.y}px`
        this.div.style.left = `${this.x}px`
        this.div.style.top = `${this.y}px`
        this.div.style.left = `${this.x}px`

        if(prevChild.direction == "up" && nextChild.direction == "right") {
            this.currentFrame = this.frames["tl"]
        };
        if(prevChild.direction == "right" && nextChild.direction == "up") {
            this.currentFrame = this.frames["br"]
        };
        if(prevChild.direction == "up" && nextChild.direction == "up") {
            this.currentFrame = this.frames["tb"]
        };
        if(prevChild.direction == "right" && nextChild.direction == "right") {
            this.currentFrame = this.frames["lr"]
        };
        if(prevChild.direction == "left" && nextChild.direction == "up") {
            this.currentFrame = this.frames["bl"]
        };
        if(prevChild.direction == "right" && nextChild.direction == "down") {
            this.currentFrame = this.frames["tr"]
        };
        if(prevChild.direction == "left" && nextChild.direction == "down") {
            this.currentFrame = this.frames["tl"]
        };
        if(prevChild.direction == "down" && nextChild.direction == "left") {
            this.currentFrame = this.frames["br"]
        };
        if(prevChild.direction == "down" && nextChild.direction == "down") {
            this.currentFrame = this.frames["tb"]
        };
        if(prevChild.direction == "left" && nextChild.direction == "left") {
            this.currentFrame = this.frames["lr"]
        };
        if(prevChild.direction == "down" && nextChild.direction == "right") {
            this.currentFrame = this.frames["bl"]
        };
        if(prevChild.direction == "up" && nextChild.direction == "left") {
            this.currentFrame = this.frames["tr"]
        };
        

        this.currentFrame = this.currentFrame || this.frames["tb"]

        let dirFrame = this.frames[this.direction]
        let {x: xOffset, y: yOffset} = this.currentFrame
        this.div.style.backgroundPosition = `${xOffset}px ${yOffset}px `
    }
    }
}

class SnakeTail extends Component {
    update(e, prevChild) {
        //ONLY ON TIMER
        if(e == undefined)  {
            if(prevChild!= undefined){
                if(prevChild != undefined) {
                    this.direction = prevChild.direction
                    this.x = prevChild.x
                    this.y = prevChild.y
                }
            }
        
        // update the div inside DOM
        this.div.style.top = `${this.y}px`
        this.div.style.left = `${this.x}px`
        this.div.style.top = `${this.y}px`
        this.div.style.left = `${this.x}px`
        let dirFrame = this.frames[this.direction]
        if(dirFrame) {
            this.currentFrame = dirFrame
        }
        let {x: xOffset, y: yOffset} = this.currentFrame
        this.div.style.backgroundPosition = `${xOffset}px ${yOffset}px `
    }
    }
}


class Snake extends Component {
    constructor(rootElement) {
        super(0,0,0,0,0,{default: {x: 0, y: 0}}, rootElement)
        this.direction = "up"

        let sh = (new SnakeHead(8,137,64,64,1,{ 
            up:   {x: -192, y: 0}, 
            right:{x: -256, y: 0},
            down: {x: -256, y: -64}, 
            left: {x: -192, y: -64}, 
        },window['map']));

        this.addChild(sh)
        

        this.addChild(new SnakeBody(8,200,64,64,1, {
            tr:   {x: 0, y: -64},
            tl:   {x: -128, y: -128},
            br:   {x: 0, y: 0},
            bl:   {x: -128, y: 0},
            tb:   {x: -128, y: -64},
            lr:   {x: -64, y: 0},
        }, window["map"]));

        this.addChild(new SnakeBody(8,264,64,64,1, {
            tr:   {x: 0, y: -64},
            tl:   {x: -128, y: -128},
            br:   {x: 0, y: 0},
            bl:   {x: -128, y: 0},
            tb:   {x: -128, y: -64},
            lr:   {x: -64, y: 0},
        }, window["map"]));

        this.addChild(new SnakeBody(8,328,64,64,1, {
            tr:   {x: 0, y: -64},
            tl:   {x: -128, y: -128},
            br:   {x: 0, y: 0},
            bl:   {x: -128, y: 0},
            tb:   {x: -128, y: -64},
            lr:   {x: -64, y: 0},
        }, window["map"]));

        let st = (new SnakeTail(8,392,64,64,1,{ 
            up:   {x: -192, y: -128}, 
            right:{x: -256, y: -128},
            down: {x: -256, y: -192}, 
            left: {x: -192, y: -192}, 
        },window['map']));

        this.addChild(st)
       
    }

    update(e) {
        for(let i = this.children.length - 1; i >= 0; i--) {
            this.children[i].update(e, this.children[i-1], this.children[i + 1]) 
        }
        /* this.children.slice().reverse().forEach( (element, index) => { 
            this.children[index].update(e, this.children[index - 1 ], this.children[index + 1] )
            }) */
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
        }, 700)
    }


    update(e) {
        /* for(let i=0; i<this.children.length; i++) {
            this.children[i].update(e)
        } */
        this.children.forEach( element => element.update(e))
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

let gameMap = new Map(0,0,640,640,1,{default:{x:0,y:0}},window["map"])

gameMap.children.push(new Apple(136,136,64,64,1,{default:{x: 0, y: -192},},window['map']));
gameMap.children.push(new Snake(window['map']));

gameMap.start()

