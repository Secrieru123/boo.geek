const find = (element, what) => {
    let content = element.childNodes[0].textContent.trim()
    console.log(`visiting ${content}`)

    if(what == content) {
        return element
    }
/*     for(let index = 0; index < element.children.length; index++) {
        let found = find(element.children[index], what)
        if(found != undefined) {
            return found
        }
    } */
    

    //HW. forEach
    let found = null;
    [...element.children].forEach(element => {
        found= find(element, what) ?? found;  //coalescing operator (??)

    });
    return found
}
let found = find(root, '1.2.1')
console.log(`Found it in element`, found)