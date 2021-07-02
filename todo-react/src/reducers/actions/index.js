const changeStatus = status => {
  return {
    type: 'ADD_TODO',
    status
  }
}

export {
  changeStatus
}
