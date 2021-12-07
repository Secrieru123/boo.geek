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
            this.children.forEach((childName) =>{
                if(Object.is(child,childName)) {
                    this.children.push()
                }
            })
        }
        
    }
    removeChild(child) {
        if(child instanceof Element) {
            for(const element of this.children) {
                if(Object.is(element, child)) {
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

  console.log(removeChild())