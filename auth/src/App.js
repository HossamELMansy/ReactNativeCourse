import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from '@firebase/app'
import '@firebase/auth'

import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    // Replace config with your own firebse credentials
    const config = {}

    firebase.initializeApp(config)
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Header title="Authentication" />

        <LoginForm />
      </View>
    )
  }
}

export default App
