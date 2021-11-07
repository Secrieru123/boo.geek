const selectList = (root, data, cbName) =>{
    let html = `<select onchange='${cbName}(e)'>`


    // HW2. rewrite code -> .forEach() 
    Object.keys(data).forEach(element => {   
        let code = element
        html += `<option>${code}</option>`
    })

    html += `</select>`

    root.innerHTML = html
}