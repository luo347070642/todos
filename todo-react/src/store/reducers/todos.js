import moment from 'moment'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const id = moment().format('x') + '-' + Math.ceil(Math.random() * 10000)
      const data = {
        ...action,
        id,
        status: 0
      }
      return [...state, data]
    case 'UPDATE_TODO_STATUS':
      const { item } = action
      state.forEach(res => {
        if (res.id === item.id) {
          res.status = 1
        }
      })
      return [...state]
    case 'REMOVE_TODO':
      state.splice(
        state.findIndex(item => item.id === action.item.id),
        1
      )
      return [...state]
    default:
      return state
  }
}
export default todos
