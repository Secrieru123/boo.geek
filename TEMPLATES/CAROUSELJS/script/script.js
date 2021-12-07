class Component {
    constructor(x,y,w,h,frames,root,cb) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.frames = frames
        this.root = root
        this.cb = cb
        
        
        
        this.render()
        
    }
    render() {
        let moveRight = this.frames.right.x
        let moveLeft = this.frames.left.y
        this.root.innerHTML = `<div id='slice' class='test_slice'style='background-position: ${moveRight}px ${moveLeft}'></div>`
    };
    
}

class Carousel extends Component {
   
    
}



class SlideContainer extends Carousel {
    
}

class Slide extends Carousel {
    
}


class ButtonContainer extends Component {

}

class Button extends Component {
    constructor(cb) {

    }
}



let slice = new Component(0,0, 50, 500,{
    right: {x: 500, y: -50},
    left: {x: 50, y: 500},
   

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

