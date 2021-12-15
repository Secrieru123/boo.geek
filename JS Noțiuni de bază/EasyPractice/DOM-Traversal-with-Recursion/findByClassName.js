


let arr = []

const findElementByTagName = (element, className) => {
    if(className == element.className){
        arr.push(element)
    }

    let arrChild = [...element.children]
    arrChild.forEach(element =>
        findElementByTagName(element, className)
        );  
        return arr
}

console.log(findElementByTagName(root, 'menu-link'))
