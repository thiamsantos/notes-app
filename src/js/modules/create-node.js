class Node {
  constructor(element) {
    this.element = document.createElement(element)
  }

  addClass(className) {
    this.element.classList.add(className)
    return this
  }

  text(content) {
    this.element.textContent = content
    return this
  }

  on(event, cb) {
    this.element.addEventListener(event, cb)
    return this
  }

  append(node) {
    this.element.appendChild(node)
    return this
  }

  inner(html) {
    this.element.innerHTML = html
    return this
  }

  setId(id) {
    this.element.id = id
    return this
  }

  done() {
    return this.element
  }
}

export default element => new Node(element)
