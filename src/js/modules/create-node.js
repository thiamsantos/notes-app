import editNote from '../note/edit-note'
import removeNote from '../note/remove-note'

const createNode = document.createElement.bind(document)

const createNoteNode = content => {
  const noteNode = createNode('p')
  noteNode.classList.add('note')
  noteNode.textContent = content
  noteNode.addEventListener('click', editNote)

  return noteNode
}

const createButtonNode = action => {
  const buttonNode = createNode('button')
  buttonNode.classList.add(`note-${action}`)
  buttonNode.textContent = action

  if (action === 'remove') {
    buttonNode.addEventListener('click', removeNote)
    return buttonNode
  }

  return buttonNode
}

export default note => {
  const noteWrapper = createNode('li')
  noteWrapper.classList.add('note-wrapper')
  noteWrapper.id = note.id

  noteWrapper.appendChild(createNoteNode(note.content))
  noteWrapper.appendChild(createButtonNode('remove'))

  return noteWrapper
}
