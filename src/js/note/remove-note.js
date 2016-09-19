import {getId} from './manage-note'
import saveNotes from './save-notes'
import getAllNotes from './get-all-notes'

export default function removeNote() {
  const parentNode = this.parentNode
  const id = getId(parentNode)
  const notes = getAllNotes().filter(note => note.id !== id)

  saveNotes(notes)
  parentNode.remove()
}
