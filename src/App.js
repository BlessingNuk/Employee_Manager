import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleWare} from 'redux';
import firebase from './firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component{
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA87qKNWINcT5qrXwOzHfsT1oSD0ikKTNc',
            authDomain: 'authentication-262ce.firebaseapp.com',
            databaseURL: 'https://authentication-262ce.firebaseio.com',
            projectId: 'authentication-262ce',
            storageBucket: 'authentication-262ce.appspot.com',
            messagingSenderId: '751542696546'
          });
        }

    render(){
        const store = createStore(reducers,{},applyMiddleWare(ReduxThunk))
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;