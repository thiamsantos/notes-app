export default (...args) => {
  args.forEach(formField => {
    formField.value = ''
  })
}
