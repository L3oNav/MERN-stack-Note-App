import {
  getUsersType,
  loadingUsersType,
  errorUserType,
  createUserType,
  getUserType
} from "../Actions/ActionsType";


const initialState = {
  users: [],
  loading: false,
  error: ''
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case getUsersType:
      return {
        ...state,
        users: action.payload,
          loading: false,
          error: ''
      }
      case loadingUsersType:
        return {
          ...state,
          loading: true,
            error: ''
        }
        case errorUserType:
          console.log(action.payload)
          return {
            ...state,
            error: action.payload,
              loading: false,
          }
          case createUserType:
            return {
              ...state,
              error: action.payload[0],
                loading: false,
            }
            case getUserType:
              return {
                ...state,
                user: action.payload
              }
              default:
                return state;
  }
};

export default usersReducer