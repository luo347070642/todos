const addTodo = item => {
  return {
    type: 'ADD_TODO',
    data: item
  }
}

export { addTodo }
