import {getId, modifyNote} from './manage-note'
import saveNotes from './save-notes'
import getAllNotes from './get-all-notes'

export default function editNote() {
  const id = getId(this.parentNode)

  const allNotes = getAllNotes()

  const note = allNotes.filter(note => note.id === id)[0]
  const newContent = prompt('', note.content)
  const mapNotes = modifyNote(id, 'content', newContent)

  const modifiedNotes = allNotes.map(mapNotes)

  this.textContent = newContent

  saveNotes(modifiedNotes)
}
