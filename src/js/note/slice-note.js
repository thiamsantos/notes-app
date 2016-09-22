export default content => {
  if (content.length >= 43) {
    return `${content.slice(0, 42)}...`
  }
  return content
}
