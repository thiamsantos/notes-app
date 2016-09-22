import editNote from '../note/edit-note'
import removeNote from '../note/remove-note'
import sliceNote from '../note/slice-note'
import createNode from './create-node'

const createContentNode = content =>
  createNode('p')
    .addClass('note__content')
    .text(content)
    .done()

const removeIcon = () =>
  `<svg class="icon icon--primary">
    <use xlink:href="dist/img/icons.svg#remove"></use>
  </svg>`

const createTitleNode = title =>
  createNode('h2')
    .addClass('note__title')
    .text(title)
    .done()

const createRemoveButtonNode = () =>
  createNode('button')
    .addClass('note__remove')
    .inner(removeIcon())
    .on('click', removeNote)
    .done()

const createNoteNode = (title, content) =>
  createNode('header')
    .addClass('note__text')
    .append(createTitleNode(title))
    .append(createContentNode(sliceNote(content)))
    .on('click', editNote)
    .done()

export default note =>
  createNode('li')
    .addClass('note')
    .setId(note.id)
    .append(createNoteNode(note.title, note.content))
    .append(createRemoveButtonNode())
    .done()
