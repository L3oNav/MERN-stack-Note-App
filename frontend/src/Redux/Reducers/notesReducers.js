import {
  getNotesType,
  loadingNotesType,
  ErrorNotesType,
  deleteNoteSuccessType,
  getNoteType
} from '../Actions/ActionsType'

const initialState = {
  notes: [],
  loading: false,
  error: ''
}

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ErrorNotesType:
      return {
        loading: false,
          error: action.payload
      }
      case loadingNotesType:
        return {
          ...state,
          error: '',
            loading: true
        }
        case getNotesType:
          return {
            ...state,
            loading: false,
            error: '',
            notes: action.payload
          };
        case getNoteType:
            return {
              ...state,
              loading: false,
              error: '',
              note: action.payload
            }; 
        case deleteNoteSuccessType:
          return {
            ...state,
            error: '',
              loading: false
          }
          default:
            return state;
  }
};

export default notesReducer