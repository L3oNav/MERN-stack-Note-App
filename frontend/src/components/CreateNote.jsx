import React, { Component } from "react";
import {connect} from "react-redux";
import DatePicker from 'react-datepicker';
import {getUsers} from '../Redux/Actions/usersActions'
import {createNote, editNote, getNote} from '../Redux/Actions/notesActions'

class CreateNotes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			content: "",
			userSelected: "",
			date: new Date(),
			editing: false,
			_id: ""
		};
	}

	async componentDidMount() {
		if (this.props.match.params.id) {
			await this.props.getNote(this.props.match.params.id);
			const { note } = this.props.red_note ;
			this.setState({
				title: note[0].title,
				content: note[0].content,
				userSelected: note[0].author,
				_id: note[0]._id
			})
		}
		await this.props.getUsers();
	}

	onInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	showUsers() {
		const { error, users } = this.props.red_user;
		if (error) {
			alert("Error");
			console.log("Error:", error.message);
		}
		if (users) {
			return users.map(user => (
				<option key={user._id} value={user.username}>
					{user.username}
				</option>
			));
		}
	}

	handlesubmitform = async (id) => {
		if (this.state.editing) {
			const datanote = {
				title: this.state.title,
				content: this.state.content,
				author: this.state.userSelected
			};
			await this.props.editNote(datanote, id);
		} else {
			const datanote = {
				title: this.state.title,
				content: this.state.content,
				author: this.state.userSelected,
				date: this.state.date
			};
			await this.props.createNote(datanote);
		}
	};

	render() {
		return (
			<div className='container p-2 create-note'>
				<form className='col-4 form-user'>
					<div className='form-group'>
						<label className='form-check-label'>Author:</label>
						<select
							className='form-control'
							value={this.state.userSelected}
							onChange={this.onInputChange}
							name='userSelected'
							required>
							{this.showUsers()}
						</select>
					</div>
					<div className='form-group'>
						<label className='form-check-label'>Title:</label>
						<input
							className='form-control'
							type='text'
							name='title'
							value={this.state.title}
							onChange={this.onInputChange}
						/>
					</div>
					<div className='form-group'>
						<label className='form-check-label'>Content:</label>
						<textarea
							className='form-control'
							type='text'
							name='content'
							value={this.state.content}
							onChange={this.onInputChange}
						/>
					</div>
					<div className='form-group' style={{ display: "none" }}>
						<DatePicker
							className='form-control'
							selected={this.state.date}
							onChange={this.onChangeDate}
						/>
					</div>
					<button
						type='button'
						onClick={this.handlesubmitform}
						className='btn btn-primary'>
						Save
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {
		red_user: state.user,
		red_note: state.note
    }
}

const mapDispatchToProps = {
    getUsers,
    createNote,
	editNote,
	getNote
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNotes)