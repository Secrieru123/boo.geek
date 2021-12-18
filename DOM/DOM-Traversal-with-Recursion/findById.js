let setId = document.getElementById('root').children[1].children[0].setAttribute('id','newDiv')
let newId = document.getElementById('newDiv')




const findElementById = (element, id) =>{

    let content = element.childNodes[0].textContent.trim()
    console.log(
        `visiting ${content}`
    )
    if(id == element.id) {
        return element
    };
  
    let found = null;
    const arr = [...element.children]
    arr.forEach(element => 
        found = findElementById(element, id) ?? found
        );
        return found        

}

console.log(`Found it in element ${findElementById(root, "newDiv")}`)