import {formSection, noteTitleNode, noteContentNode} from '../modules/nodes'
import {getId} from './manage-note'
import getAllNotes from './get-all-notes'

export default function editNote() {
  const id = getId(this.parentNode)
  formSection.setAttribute('data-edit', id)
  const allNotes = getAllNotes()
  const note = allNotes.filter(note => note.id === id)[0]

  noteTitleNode.value = note.title
  noteContentNode.value = note.content

  formSection.classList.add('show')
}
