

let arr = []

const findElementByTagName = (element, tagName) => {

debugger
    if(element.tagName == tagName) {
        arr.push(element)
    };

    let arrChild = [...element.children]

    arrChild.forEach(element => 
        findElementByTagName(element, tagName) 
        )
        return arr


};

console.log(findElementByTagName(root, "div"))