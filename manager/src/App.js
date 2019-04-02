import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;