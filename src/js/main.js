import render from './modules/render'
import getAllNotes from './note/get-all-notes'
import {initNotesStorage} from './modules/utils'
import createNote from './note/create-note'
import createNode from './modules/create-node'
import saveNotes from './note/save-notes'

const $ = document.getElementById.bind(document)

const notesListNode = $('notes')
const noteFormNode = $('new-note-form')
const noteContentNode = $('new-note-content')

initNotesStorage()

getAllNotes()
  .forEach(note => {
    render(notesListNode, createNode(note))
  })

noteFormNode
  .addEventListener('submit', e => {
    e.preventDefault()
    const newNote = createNote(noteContentNode.value)
    saveNotes(getAllNotes().concat(newNote))
    render(notesListNode, createNode(newNote))
  })
