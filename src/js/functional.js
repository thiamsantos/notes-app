// Pure Functions
const getAllNotes = () => JSON.parse(localStorage.notes)

const addNote = (notes, content) => {
  notes.push({
    content,
    date: Date.now()
  })
  localStorage.notes = JSON.stringify(notes)
  return notes
}

const createNotesList = notes =>
  notes
    .map(note =>
      `<li class="note">
        ${note.content}
        <p class="note-date">
          ${new Date(note.date).toString()}
        </p>
      </li>`)
    .join('')

// DOM elements
const $ = document.getElementById.bind(document)

const notesListNode = $('notes')

const noteFormNode = $('new-note-form')

const noteContentNode = $('new-note-content')

// Functions with side effects
const renderNotes = (node, notesList) => {
  node.innerHTML = notesList
}

const initNotesStorage = () => {
  if (!localStorage.notes) {
    localStorage.notes = JSON.stringify([])
  }
}

const clearForm = () => {
  noteContentNode.value = ''
}

const render = notes => {
  initNotesStorage()
  renderNotes(notesListNode, createNotesList(notes))
}

const newNoteFormSubmit = event => {
  event.preventDefault()
  render(addNote(getAllNotes(), noteContentNode.value))
  clearForm()
}

// DOM events
noteFormNode.addEventListener('submit', newNoteFormSubmit)

// init
render(getAllNotes())
