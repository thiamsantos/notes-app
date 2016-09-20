export const sliceNoteContent = content => `${content.slice(0, 42)}...`

export default note => {
  return {
    title: note.title,
    content: sliceNoteContent(note.content),
    id: note.id
  }
}
