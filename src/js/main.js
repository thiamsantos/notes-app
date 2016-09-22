import render from './modules/render'
import getAllNotes from './note/get-all-notes'
import {initNotesStorage} from './modules/utils'
import createNoteNode from './modules/create-note-node'
import submitNote from './note/submit-note'
import clearForm from './modules/clear-form'
import {
  formSectionNode,
  notesListNode,
  newNoteButtonNode,
  noteCancelNode,
  noteTitleNode,
  noteContentNode,
  noteSubmitNode,
  titleFormNode
} from './modules/nodes'

initNotesStorage()

getAllNotes()
  .forEach(note => {
    render(notesListNode, createNoteNode(note))
  })

newNoteButtonNode.addEventListener('click', () => {
  formSectionNode.classList.add('show')
  noteTitleNode.focus()
})

noteCancelNode.addEventListener('click', () => {
  formSectionNode.classList.remove('show')
  clearForm(noteTitleNode, noteContentNode)
})

// noteTitleNode.addEventListener('keydown', e => {
//   if (e.keyCode === 'Tab') {
//     console.log(e)
//     noteContentNode.focus()
//   }
// })

titleFormNode.addEventListener('submit', e => {
  e.preventDefault()
})

noteSubmitNode.addEventListener('click', submitNote)

const serviceWorkerAvailable = 'serviceWorker' in navigator
const useHTTPS = window.location.protocol === 'https:'
const isLocalhost = window.location.hostname === 'localhost'

if (serviceWorkerAvailable && (useHTTPS || isLocalhost)) {
  navigator.serviceWorker.register('sw.js', {
    scope: '/notes-app/'
  }).then(reg => {
    console.info(reg);
  }).catch(err => {
    console.info(err);
  })
}
