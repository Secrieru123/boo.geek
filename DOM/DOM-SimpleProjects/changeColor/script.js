let wrapper = document.getElementById('wrapper')
let button = document.getElementById('button')


let colors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink']



const updateColor = (e) => {
    return Math.floor(Math.random()*e.length)
};

button.addEventListener('click', (e) =>{
    wrapper.style.backgroundColor = colors[updateColor(colors)]
});

button.addEventListener('mouseenter', (e) =>{
    button.style.cursor = 'pointer';
    button.style.border = '1px solid black'
});

