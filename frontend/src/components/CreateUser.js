import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers, createUser as createUserAc, deleteUser} from '../Redux/Actions/usersActions'

class CreateUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }
    async componentDidMount() {
        await this.props.getUsers()
    }

    onChangeUsername = e => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmitForm = async (e) => {
        e.preventDefault();
        await this.props.createUserAc(this.state.username)
        await this.props.getUsers()
    }
    deleteUserfunc = async (_id) =>{
        await this.props.deleteUser(_id)
        await this.props.getUsers()
    }
    showUsers = () => {
        const { error, loading, users } = this.props.red_user;
        if(error){
            console.log('Error: ', error[2].message)
            return (
                <div className="list-group-item alert-danger">
                    {error? 'Error with the last action.': '' }
                </div>
            )
        }
        if(loading){
            return (
                <div className="spinner-border m-5 note-loading" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }
        if(users) {
            // console.log(users)
            return users.map(user => (
                <div className="list-group-item" key={user._id}>
                    {user.username}
                    <i className="float-right icon-trash mt-1" onClick={()=>this.deleteUserfunc(user._id)} />
                </div>
            ))
        }
    }
    render() {
        return (
            <div className="row container p-2 create-user">
                <form className="col-4 form-user">
                    <label>Username:</label>
                    <input
                        placeholder="username"
                        className="form-control"
                        onChange={this.onChangeUsername}
                        value={this.state.username}
                        type="text"
                        name="username"
                    />
                    <button type="button" className="btn btn-primary mt-2" onClick={this.onSubmitForm}>Submit</button>
                </form>
                <div className="p-2 col-4 list-user list-group">
                    <div className="h6">List users</div>
                    {this.showUsers()}
                </div>
            </div>  
        )
    }
}


const mapStateToProps = state => { 
    return {
        red_user: state.user
    }
}

const mapDispatchToProps = {
    getUsers,
    createUserAc,
    deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)