export default (title, content) => {
  return {
    title,
    content,
    id: Date.now()
  }
}
