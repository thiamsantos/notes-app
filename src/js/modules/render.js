export const renderBefore = (referenceNode, newNode) => {
  referenceNode.insertBefore(newNode, referenceNode.firstChild)
}

export default (node, note) => {
  node.appendChild(note)
}
