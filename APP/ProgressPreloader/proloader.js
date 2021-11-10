

// common preloader logic
class BasePreloader {

    constructor(rootDiv) {
        this.rootDiv = rootDiv

        // HW4.
        this.init()
        this.onload()
    }
        

    onload() {
        this.timerID = setInterval(()=>{
            this.step()
            if(this.condition()) {
    
                clearInterval(this.timerID)
            }
            this.rootDiv.innerHTML = this.render()
        },this.repeat) 
    }
    

    // abstract meth ods
    init() {}

    //HW7.
    condition() {
        throw new ReferenceError(`Condition is check as: ${this.check()}`)
    }
    check() {}
    step() {}
    render() {}
}


class ProgressPreloader extends BasePreloader {

    constructor(rootDiv) {
        super(rootDiv)
        this.progress = 0  // 0....100 %
    }

    init() {
        this.repeat = 500
    }


    // Overriding methods
    condition() {
        return this.progress >= 100
    }

    step() {
        this.progress += 10
    }

    render () {
        return `[ ${this.progress}% ]`
    }


}


class CircularPreloader extends BasePreloader {

    constructor(rootDiv) {
        super(rootDiv)
        this.duration = 3000
        this.frames = ['|', '/', '--', '\\'] ///// JS String Character Escaping (caractere speciale in string JS)
    }

    init() {
        this.repeat = 250
    }
   

    condition() {
        return this.progress <= 0
    }


    // HW2.
    
    /* step() {
        this.duration -= 250
        let frame = this.frames.shift()
        this.frames.push(frame)  
    } */


    // HW.3
    step() {
        this.duration -= 250
           let frame = this.frames.splice(0,0,this.frames[3])
           frame = this.frames.splice(3,0)    
    }


/*     step() {
        this.duration -= 250
        let frame = this.frames.pop()
        this.frames.unshift(frame)
    } */

    render () {
        return   `[ ${this.frames[0]} ]`
    }
}
    // HW5.
 class IncompletePreloader extends BasePreloader {

    constructor(rootDiv) {
        super(rootDiv)
        this.progress = 0  // 0....100 %
    }

    init() {
        this.repeat = 500
    }


    step() {
        this.progress += 10
    }

    render () {
        return `[ ${this.progress}% ]`
    }

    }



////////////////////////////////////////////////////

let pp1 = new ProgressPreloader(window["prel-1"])
let pp2 = new CircularPreloader(window["prel-2"])

   // HW6. 
let pp3 = new IncompletePreloader(window["prel-3"])
console.log(pp3)
    /* In interiorul clasei IncompletePreloader lipseste metoda condition(),
    astfel "if" va returna mereu "false" si codul din interiorul if-ului
    nu se va executa niciodata. Atunci "this.pprogress" va creste pana la infinit. */




