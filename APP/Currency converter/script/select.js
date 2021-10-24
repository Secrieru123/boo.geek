const selectList = (root, data, cbName) =>{
    let html = `<select onchange='${cbName}'>`


    // HW2. rewrite code -> .forEach() 
    for (let i=0; i < Object.keys(data).length; i++) {
    let code = Object.keys(data)[i]
        html += `<option>${code}</option>`
    }

    html += `</select>`

    root.innerHTML = html
}