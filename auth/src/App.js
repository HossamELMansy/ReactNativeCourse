import React from 'react'
import { View } from 'react-native'

import { Header } from './components/common'
import LoginForm from './components/LoginForm'

const App = () => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Header title="Authentication" />

      <LoginForm />
    </View>
  )
}

export default App
