const status = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      return action.status
    default:
      return state
  }
}
export default status
