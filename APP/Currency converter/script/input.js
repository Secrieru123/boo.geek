let inputAmount = (root, hint, cbName) => {
    root.innerHTML = `<input type='text' placeholder='${hint}' onkeyup='${cbName}(event)'/>`
}