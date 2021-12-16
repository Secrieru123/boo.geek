const setData = (element, key, value) => {
    element.dataset[key] = value
};

const getData = (element, key) => {
    return element.dataset[key]
}

const removeData = (element,key) => {
    delete element.dataset[key]
}