import createNote from '../note/create-note'

export const initNotesStorage = () => {
  if (!localStorage.notes) {
    localStorage.notes = JSON.stringify([
      createNote('First note', 'Click to edit the note or create a new one')
    ])
  }
}
