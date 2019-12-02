import React, { Component } from "react";
import { connect } from "react-redux";
//? Actions
import { format } from 'timeago.js'
import { getNotes, deleteNote } from "../Redux/Actions/notesActions";
import { Link } from 'react-router-dom'

class Initialpage extends Component {

  constructor(props){
    super(props)
    this.deleteNoteFunc = this.deleteNoteFunc.bind(this)
    this.showContent = this.showContent.bind(this)
  }

  deleteNoteFunc = async (id) => {
    await this.props.deleteNote(id);
    this.props.getNotes();
  }

  async componentDidMount() {
    await this.props.getNotes();
    console.log(this.props.obj_note.notes)
  }

  showContent = () => {
    const { notes, loading, error } = this.props.obj_note;

    if(loading){
      return (
        <div className="spinner-border m-5 note-loading" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
    if (error) {
      return (
          <div className="alert-danger">
            <div className="display-4">{error.message}</div>
          </div>
      );
    }
    if(notes){
      return notes.map(note =>(
        <div className="col-md-4 p-5 m-6">
            <div className="card" key={notes._id}>
                <div className="card-header d-flex justify-content-between">
                  <div className="h5 note-itxt">
                    {note.title}
                  </div>
                  <Link to={"/edit/"+note._id} className="icon-edit btn btn-secondary"></Link>
                </div>
              <div className="card-body">
                <div className="card-text">{note.content}</div>
              </div>
              <div className="card-footer">
                <div className="display-flex">
                  <div className="mr-5">By: {note.author}</div>
                  <button className="btn btn-danger" onClick={()=>this.deleteNoteFunc(note._id)}>Delete</button>
                  <div className="ml-5">{format(note.updatedAt)}</div>
                </div>
              </div>
          </div>
        </div>
      ))
    }
  };
  render() {
    return (
      <div className="notes-container bg-white">
        <div className="row w-100">
          {this.showContent()}
    
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        obj_note: state.note
    }
}
const mapDispatchToProps = {
  getNotes,
  deleteNote
};

export default connect(mapStateToProps, mapDispatchToProps)(Initialpage)