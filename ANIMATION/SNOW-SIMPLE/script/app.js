// SETTINGS 
const containerW = 1000
const containerH = 700 



let count = 1 

// initial WAVE
setInterval(() => {
    if(count < 200 ) {
        addAnotherFlake()
    }
}, 100) 


function addAnotherFlake () {
    count++
    let scale = randFloat(0.5, 1.5)
    let f = new Flake(count, randCoord(0, containerW), 0, scale, scale)
    f.render(scene)
    f.fall(containerW, containerH, addAnotherFlake)
}

