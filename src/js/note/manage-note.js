export function modifyNote(id, attribute, newValue) {
  return function (note) {
    if (note.id === id) {
      note[attribute] = newValue
    }
    return note
  }
}

export const getId = node => Number(node.id)
