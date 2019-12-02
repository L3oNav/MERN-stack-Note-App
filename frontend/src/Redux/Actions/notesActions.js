import {
    getNotesType,
    loadingNotesType,
    ErrorNotesType,
    loadingNoteType,
    ErrorNoteType,
    getNoteType,
    deleteNoteSuccessType,
    createNoteType,
    loadingEditType,
    ErrorEditType
} from './ActionsType'
import axios from 'axios'

//? Get Notes
export const getNotes = () => async (dispatch) => {
    dispatch({
        type: loadingNotesType
    });
    try {
        const res = await axios.get('http://localhost:4000/api/notes');
        dispatch({
            type: getNotesType,
            payload: res.data
        })
    } catch (error) {
        console.log('Error: ', error.message)
        dispatch({
            type: ErrorNotesType,
            payload: 'information for this user not avaible.'
        })
    } finally {

    }
};

//? Get Note by id
export const getNote = id => async dispatch => {
    dispatch({
        type: loadingNoteType
    });
    try {
        const res = await axios.get(`http://localhost:4000/api/notes/${id}`);
        dispatch({
            type: getNoteType,
            payload: res.data
        })
    } catch (error) {
        console.log('Error: ', error.message)
        dispatch({
            type: ErrorNoteType,
            payload: 'information for this user not avaible.'
        })
    }
}
//? Edits Notes put
export const createNote = data => async dispatch => {
    dispatch({
        type: loadingNoteType
    });
    try {
        const res = await axios.post('http://localhost:4000/api/notes/', data);
        dispatch({
            type: createNoteType,
            payload: res.data
        })
    } catch (error) {
        console.log('Error: ', error.message)
        dispatch({
            type: ErrorNoteType,
            payload: 'Creation for new note failed'
        })
    }
}

export const deleteNote = id => async dispatch => {
    dispatch({
        type: loadingNoteType
    });
    try {
        const res = await axios({
            method: 'delete',
            url: `http://localhost:4000/api/notes/${id}`
        });
        dispatch({
            type: deleteNoteSuccessType,
        })
    } catch (error) {
        console.log('Error: ', error.message)
        dispatch({
            type: ErrorNoteType,
            payload: 'Error with delete this note'
        })
    }
}

export const editNote = (data, id) => async dispatch => {
    dispatch({
        type: loadingEditType
    });
    try {
        const res = await axios(`http://localhost:4000/api/notes/${id}`, data);
        dispatch({
            type: editNote,
            payload: res.data
        })
    } catch (error) {
        console.log('Error: ', error.message)
        dispatch({
            type: ErrorEditType,
            payload: 'Creation for new note failed'
        })
    }
}