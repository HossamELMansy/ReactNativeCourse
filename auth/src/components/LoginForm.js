import React, { Component } from 'react'
import { Text } from 'react-native'

import { Card, CardSection, Button, Input } from './common'

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={x => this.setState({ email: x })}
            label="Email"
            placeholder="test@gmail.com"
            autoCorrect={false}
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={x => this.setState({ password: x })}
            label="Password"
            placeholder="password"
            autoCorrect={false}
            secureTextEntry
          />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
