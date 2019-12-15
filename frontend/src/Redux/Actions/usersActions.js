import {
    errorUserType,
    loadingUsersType,
    getUsersType,
    createUserType,
    deleteUserSuccessType,
    getUserType
} from "./ActionsType"
import axios from 'axios'


export const getUsers = () => async (dispatch) => {
    dispatch({
        type: loadingUsersType,
    })
    try { 
        const res = await axios.get('http://167.71.115.255:4000/api/users/');
        dispatch({
            type: getUsersType,
            payload: res.data
        })
    }
    catch(err){
        dispatch({
           type: errorUserType,
           payload: ['Error with get all users',err.message]
        })
    }
}

//? Create Users
export const createUser = username => async (dispatch) => {
    dispatch({
        type: loadingUsersType
    })
    try {
        console.log(username);
        await axios({
            method:'POST',
            url:'http://167.71.115.255:4000/api/users/',
            data: {
                username:username
            }
        })
        dispatch({
            type: createUserType,
            payload: false
        })
    }
    catch(error) {
        dispatch({
            type: errorUserType,
            payload: [true, 'Error with creating new user.',error]
        })
    }
}

//? deleteUser
export const deleteUser = id => async dispatch => {
    dispatch({
        type: loadingUsersType
    });
    try {
        await axios.delete('http://167.71.115.255:4000/api/users/'+id);
        dispatch({
            type: deleteUserSuccessType,
        })
    } catch (error) {
        console.log('Error: ', error.message)
        dispatch({
            type: errorUserType,
            payload: 'Error with delete this user'
        })
    }
}
//? Get user by id
export const getUser = id => async dispatch => {
    dispatch({
        type: loadingUsersType
    });
    try {
        await axios.get('http://167.71.115.255:4000/api/users/'+id);

        dispatch({
            type: getUserType,
        })
    } catch (error) {

        console.log('Error: ', error.message)

        dispatch({
            type: errorUserType,
            payload: 'Error with delete this user'
        })

    }
}