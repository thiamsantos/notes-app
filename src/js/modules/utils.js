export const initNotesStorage = () => {
  if (!localStorage.notes) {
    localStorage.notes = JSON.stringify([])
  }
}
