import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import firebase from "@firebase/app";

import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCoS0uphjA_r0u6cuZi_JbgfHi5n0BqOCU",
            authDomain: "manager-d16af.firebaseapp.com",
            databaseURL: "https://manager-d16af.firebaseio.com",
            projectId: "manager-d16af",
            storageBucket: "manager-d16af.appspot.com",
            messagingSenderId: "310167521327"
          });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;