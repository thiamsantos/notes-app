import editNote from '../note/edit-note'
import removeNote from '../note/remove-note'

const createNode = document.createElement.bind(document)

const createContentNode = content => {
  const contentNode = createNode('p')
  contentNode.classList.add('note-content')
  contentNode.textContent = content

  return contentNode
}

const removeIcon = () => {
  return `<svg class="icon">
    <use xlink:href="src/img/icons.svg#remove"></use>
  </svg>`
}

const createTitleNode = title => {
  const titleNode = createNode('h2')
  titleNode.classList.add('note-title')
  titleNode.textContent = title
  return titleNode
}

const createButtonNode = action => {
  const buttonNode = createNode('button')
  buttonNode.classList.add(`note-${action}`)

  if (action === 'remove') {
    buttonNode.innerHTML = removeIcon()
    buttonNode.addEventListener('click', removeNote)
    return buttonNode
  }

  return buttonNode
}

const createNoteNode = (title, content) => {
  const noteNode = createNode('header')
  noteNode.classList.add('note')
  noteNode.appendChild(createTitleNode(title))
  noteNode.appendChild(createContentNode(content))
  // noteNode.addEventListener('click', editNote)

  return noteNode
}

export default note => {
  const noteWrapper = createNode('li')
  noteWrapper.classList.add('note-wrapper')
  noteWrapper.id = note.id

  noteWrapper.appendChild(createNoteNode(note.title, note.content))
  noteWrapper.appendChild(createButtonNode('remove'))

  return noteWrapper
}
