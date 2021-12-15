


let arr = []

const findElementByTagName = (element, className) => {
    if(element == element.className){
        arr.push(className)
    }

    let arrChild = [...element.children]
    arrChild.forEach(element =>
        findElementByTagName(element, className)
        );  
        return arr
}

console.log(findElementByTagName(root, 'menu-link'))
