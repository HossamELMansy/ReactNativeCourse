import React, { Component } from "react";
import { connect } from "react-redux";

import { Card, CardSection, Input, Button } from "./common";
import { emailChanged } from "../actions";

class LoginForm extends Component {
    onEmailChange(email) {
        this.props.emailChanged(email);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="test@test.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="Password"
                        secureTextEntry
                    />
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({ auth: { email } }) => ({
        email: email
});

export default connect(
    mapStateToProps, 
    { 
        emailChanged: emailChanged 
    }
)(LoginForm);