class Button {
    constructor(root, text, type, action) {
        this.root = root
        this.text = text
        this.type = type
        this.action = action
        this.render()
    }

    render(root) {
        
        this.root.innerHTML += `<button class="${this.type}" onclick="${this.action}()">${this.text}</button>`  
    }
   
}

function okAction() {
   
    alert("You've accepted")
}

function cancelAction() {
    alert("You've canceled")
}

let okButton = new Button (window["actions"], "OK", "success", "okAction")

let cancelButton = new Button (window["actions"], "CANCEL", "danger", "cancelAction")