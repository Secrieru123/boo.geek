class Element {
    constructor(tagName) {
      this.tagName = tagName
      // reference to other elements
      this.parent = null
      this.children = []
      this.prev = null
      this.next = null
      
    }

    appendChild(child){
        if (child instanceof Element && !this.children.includes(child)) {
                    this.children.push(child)
                }        
    }
    removeChild(child) {
        if(child instanceof Element) {
            for(let index=0; index<=this.children.length; index++) {
                if(Object.is(this.children.indexOf(child), index)) {
                    this.children = this.children.filter(elem => elem != child)
                }
            }
        }
        return child
    }

    render() {
        let childFragment = ``
        this.children.forEach(child => childFragment += child.render())
        
        return `<${this.tagName}>${childFragment}</${this.tagName}>`
    }
  }

  let root = new Element("html")
  root.children.push(new Element("head"))
  root.children.push(new Element("body"))

  console.log(root.render())

  let parent = new Element("div")
  let h1 = new Element("h1")
  parent.appendChild(h1)
  parent.appendChild(new Element("p"))
  parent.removeChild(h1)
  parent.removeChild(new Element("p"))
  
  console.log(parent.render())