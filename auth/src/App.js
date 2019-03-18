import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from '@firebase/app'
import '@firebase/auth'

import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDKujh7LX_yv1A4hBC6usaMd2m3SHtpW64',
      authDomain: 'auth-50b78.firebaseapp.com',
      databaseURL: 'https://auth-50b78.firebaseio.com',
      projectId: 'auth-50b78',
      storageBucket: 'auth-50b78.appspot.com',
      messagingSenderId: '1034536955378'
    })
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
