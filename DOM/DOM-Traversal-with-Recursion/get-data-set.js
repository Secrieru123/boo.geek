const setData = (element, key, value) => {
    element.dataset[key] = value
};

const getData = (element, key) => {
    return element.dataset[key]
}

const removeData = (element,key) => {
    delete element.dataset[key]
}


const bubbleEvent = (element, root) => {
    let newElement = element.parentElement

    setData(newElement, key, value)
    if(newElement  == root){
        return root
    }
    bubbleEvent(newElement, root)
        
    
}
  