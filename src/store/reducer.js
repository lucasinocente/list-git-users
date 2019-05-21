const initialState = {
  users: [],
  totalUsers: 0
}

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'REMOVE_USER':
      return {
        ...state,
        'users': state.users.filter(
          user => user.id !== action.userId
        )
      }
    case 'LOAD_USER_LIST':
      return {
        ...state,
        'users': action.users
      }
    default:
      return {
        ...state,
        ...action
      }
  }

}

export default reducer