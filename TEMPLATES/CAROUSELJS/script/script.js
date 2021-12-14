class Component {
    constructor(x,y,w,h,frames,root,cb) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.frames = frames
        this.root = root

        
        
        this.children=[]
        this.render()
        
    }


    init() {

    }

    addChild(child) {
        if(child instanceof Component && !this.children.includes(child)) {
            this.children.push(child);
        }
    }

    update(){

    }

    render() {
         
            let moveRight = this.frames.right.x
        
        this.root.innerHTML = `<div 
        id='slice' 
        class='test_slice'
        style='background-position: ${moveRight}px'></div>`  
        
    
      
    };
    
    
}

class Carousel extends Component {
   
    start() {

    }

    stop() {

    }
}

class SlideContainer extends Carousel {
    constructor(){
        super(0, 0, 0, 0,{x: 0, y: 0},root)
        let addSlide
       

        for(let i = 0; i < 10; i++) {
            addSlide += this.addChild(new Slide(0, 0, 0, 0, root))
            
            document.getElementsById('test_slice')[i]
        }
   }
    
        
    
}
class Slide extends Carousel {
    
}
class ButtonContainer extends Component {
    constructor(cb) {
    }
}
class Button extends Component {
    
}

let slice = new SlideContainer(window['test'])



/* object tree

    Carousel{
        x,y,w,h,root,cb
    }
    children [
         SlideContainer {
     ....
     ---> children [
     Button{  
       x,y,w,h
       label: "play"
     },


   ]
 },


  SlideContainer {
    ....
   ---> children [
 
     Slide {
       x,y,....
     },
    Slide {
       x,y, ...
    }
 ]
}
 ....
]
    ]





*/ 

