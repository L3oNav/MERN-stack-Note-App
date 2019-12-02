//? React imports
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//? Styles imports
import './Styles/index.scss';
//? Redux
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";

//? local imports
import LayoutPrincipal from './layouts/principal.jsx';
import NoteList from './components/NoteList.jsx';
import CreateNotes from './components/CreateNote.jsx';
import CreateUser from './components/CreateUser'


export default class App extends Component {
    render() {
        return (
            <Provider store={ store } >
                <Router>
                    <LayoutPrincipal>
                        <Switch>
                            <Route exact path='/' component={NoteList} />
                            <Route exact path='/createuser' component={CreateUser} />
                            <Route exact path='/createnote' component={CreateNotes}/>
                            <Route  path="/edit/:id" component={CreateNotes} />
                        </Switch>
                    </LayoutPrincipal>
                </Router>
            </Provider>
        )
    }
}   