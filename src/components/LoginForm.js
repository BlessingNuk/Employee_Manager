import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged,loginUser} from '../actions';
import {Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.PasswordChanged(text);
    }
    onButtonPress(){
        const {email, password} = this.props;

        this.props.loginUser({email,password});
    }
    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={StyleSheet.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }
    renderButton(){
        if(this.props.loading){
            return <Spinner size='large' />
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>  
        )
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"  
                        onChangeText = {this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        secureTextEntry 
                        placeholder="password"
                        onChangeText = {this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                    {this.renderError()}
                <CardSection>
                    {this.renderButton()}  
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = state => {
    return{
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelef: 'center',
        color: 'red'
    }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);