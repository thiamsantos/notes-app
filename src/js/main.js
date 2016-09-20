import {default as render, renderBefore} from './modules/render'
import getAllNotes from './note/get-all-notes'
import {initNotesStorage} from './modules/utils'
import createNote from './note/create-note'
import createNode from './modules/create-node'
import saveNotes from './note/save-notes'
import sliceNote from './note/slice-note'

const $ = document.getElementById.bind(document)

const notesListNode = $('notes')
const noteSubmitNode = $('js-submit-note')
const noteTitleNode = $('js-form-title')
const noteContentNode = $('js-form-content')
const newNoteButtonNode = $('js-new-note')
const formSection = $('js-form-section')

initNotesStorage()

getAllNotes()
  .forEach(note => {
    render(notesListNode, createNode(sliceNote(note)))
  })

newNoteButtonNode.addEventListener('click', () => {
  formSection.classList.add('show')
})

noteSubmitNode
  .addEventListener('click', () => {
    const newNote = createNote(noteTitleNode.value, noteContentNode.value)
    saveNotes([newNote].concat(getAllNotes()))
    renderBefore(notesListNode, createNode(sliceNote(newNote)))
    noteTitleNode.value = ''
    noteContentNode.value = ''
    formSection.classList.remove('show')
  })
