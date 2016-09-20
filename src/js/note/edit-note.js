import {getId, modifyNote} from './manage-note'
import saveNotes from './save-notes'
import getAllNotes from './get-all-notes'
import {sliceNoteContent} from './slice-note'

export default function editNote() {
  const id = getId(this.parentNode)

  const allNotes = getAllNotes()

  const note = allNotes.filter(note => note.id === id)[0]
  const newContent = prompt('', note.content)
  const mapNotes = modifyNote(id, 'content', newContent)

  const modifiedNotes = allNotes.map(mapNotes)

  if (this.textContent !== newContent) {
    this.textContent = sliceNoteContent(newContent)
  }

  saveNotes(modifiedNotes)
}
