import clearForm from '../modules/clear-form'
import {renderBefore} from '../modules/render'
import createNoteNode from '../modules/create-note-node'
import {$, noteContentNode, noteTitleNode, notesListNode, formSectionNode}
  from '../modules/nodes'
import createNote from './create-note'
import getAllNotes from './get-all-notes'
import saveNotes from './save-notes'

export default () => {
  const newContent = noteContentNode.value
  const newTitle = noteTitleNode.value
  let allNotes = getAllNotes()

  if (formSectionNode.hasAttribute('data-edit')) {
    const id = Number(formSectionNode.getAttribute('data-edit'))
    const presentNote = allNotes.filter(note => note.id === id)[0]
    const isContentEqual = newContent === presentNote.content
    const isTitleEqual = newTitle === presentNote.title

    if (isContentEqual && isTitleEqual) {
      clearForm(noteTitleNode, noteContentNode)
      formSectionNode.classList.remove('show')
      return false
    }

    $(id).remove()
    allNotes = allNotes.filter(note => note.id !== id)
    formSectionNode.removeAttribute('data-edit')
  } else {
    noteTitleNode.focus()
  }

  const newNote = createNote(newTitle, newContent)
  saveNotes([newNote].concat(allNotes))
  renderBefore(notesListNode, createNoteNode(newNote))
  clearForm(noteTitleNode, noteContentNode)
  formSectionNode.classList.remove('show')
}
