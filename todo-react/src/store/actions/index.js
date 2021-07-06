import { useHistory } from 'react-router-dom'

const getContent = status => {
  return dispatch => {
    return Promise.resolve(status).then(status => {
      const history = useHistory()
      dispatch({
        type: 'CHANGE_STATUS',
        data: status
      })
      history.push('/')
    })
  }
}

export { getContent }
