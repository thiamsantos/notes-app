import editNote from '../note/edit-note'
import removeNote from '../note/remove-note'
import sliceNote from '../note/slice-note'
import createNode from './create-node'

const createContentNode = content =>
  createNode('p')
    .addClass('note-content')
    .text(content)
    .done()

const removeIcon = () =>
  `<svg class="icon">
    <use xlink:href="dist/img/icons.svg#remove"></use>
  </svg>`

const createTitleNode = title =>
  createNode('h2')
    .addClass('note-title')
    .text(title)
    .done()

const createRemoveButtonNode = () =>
  createNode('button')
    .addClass(`note-remove`)
    .inner(removeIcon())
    .on('click', removeNote)
    .done()

const createNoteNode = (title, content) =>
  createNode('header')
    .addClass('note')
    .append(createTitleNode(title))
    .append(createContentNode(sliceNote(content)))
    .on('click', editNote)
    .done()

export default note =>
  createNode('li')
    .addClass('note-wrapper')
    .setId(note.id)
    .append(createNoteNode(note.title, note.content))
    .append(createRemoveButtonNode())
    .done()
