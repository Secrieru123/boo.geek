
const visit = (element) => {

    //HW1. props element get the first child element in array and represents the text content of the node, removes whitespace from both ends of a string and return a new string. 
    console.log(`
    visiting ${element.childNodes[0].textContent.trim()}
    `)
    
    //HW2. refactor the code using forEach()
    /* for (let index=0; index<element.children.length; index++) {
        visit(element.children[index])
    } */

    let children = /* Array.from(element.children) */ [...element.children] //spread operators
    children.forEach(element => visit(element))
    
}

visit(root)
