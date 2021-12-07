class Component {
    constructor(x,y,w,h,frames,root,cb) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.frames = frames
        this.root = root
        this.cb = cb
        
        
        this.children=[]
        this.render()
        
    }
    render() {
        let moveRight = this.frames.right.x
        
        this.root.innerHTML = `<div 
        id='slice' 
        class='test_slice'
        style='background-position: ${moveRight}px'></div>`  
        this.children.forEach(child => moveRight += child.render())
      
    };
    
    
}

class Carousel extends Component {
   constructor(){
        super(0,0,0,0,{right: {x: 0, y: 0}},root,cb)
   }
    
}

class SlideContainer extends Carousel {
    render(){}
    
        
    
}
class Slide extends Carousel {
    
}
class ButtonContainer extends Component {
    constructor(cb) {
    }
}
class Button extends Component {
    
}


let slice = new Component(0,0, 50, 500,{
    right: {x: 0, y: 0},
    left: {x: 0, y: 0},
   

}, window['test'])
console.log(slice)


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

