// progress like preloader component
class BasePreloader {

    constructor(rootDiv) {
       this.rootDiv = rootDiv
        this.init()
        // class specific logic <<<<<<

        this.onload()
    }

    onload() {
        this.timerId = setInterval(()=>{
            this.step()
            if (this.condition()) {
                
                clearInterval(this.timerId)
            }
            this.rootDiv.innerHTML = this.render()
        },500)
    }
    
    condition() {}
    step() {}   
    render() {}
    init() {}

}


class ProgressPreloader extends BasePreloader{

    constructor(rootDiv) {
        super(rootDiv)
    }

/*     onload() {
        this.timerId = setInterval(()=>{
            this.progress += 10
            if(this.progress >= 100) {
                this.progress = 100
            }
            this.rootDiv.innerHTML = `[ ${this.progress}% ]`
        },500)
    } */

    // overriding methods 

    init() {
        this.progress = 0
    }

    condition() {
        return this.progress >= 100
    }
    step() {
        this.progress += 10
    }
    render() {
        return `[${this.progress}%]`
    }
}



class CircularPreloader extends BasePreloader{

    constructor(rootDiv) {
        this.rootDiv = rootDiv
    
        this.onload()
    }

    /* onload() {
        this.timerId = setInterval(()=>{
            this.progress -= 500
            if(this.progress >= 100) {
                clearInterval(this.timerId)
            }

            // round sht frame = this.frames.shift()
            this.frame.push(frame)
            console.log(this.frames)
            this.rootDiv.innerHTML = `[ ${frame}% ]`
        },250)
    } */


    init() {
        this.progress = 3000
        this.frames = ['|', '/', '--', '\\']   // JS String Character Escaping
    }
    condition() {
        return this.duration <= 0
    }
    step() {
            this.duration -= 250
       let frame = this.frames.shift()
            this.frame.push(frame)
    }
    render() {
        return `[ ${this.frame[0]}]`
    }

}





///////////////////////////////

let pp1 = new ProgressPreloader(window["prel-1"])
let pp2 = new CircularPreloader(windows["pre2-2"])
console.log(pp1);
console.log(pp2);
