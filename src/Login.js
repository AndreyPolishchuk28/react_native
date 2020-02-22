import React, {Component} from 'react';
import { View, TouchableOpacity, TextInput, Image, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {value: '+380'};
        this.changeHandler = this.changeHandler.bind(this);
        this.pressHandler = this.pressHandler.bind(this)
    }

    pressHandler () {
        let number = /^((\+3|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{11}$/;
        if (number.test(this.state.value)){
            this.props.navigation.navigate('Підтвердження');
        }
        else{
            alert('Номер введен не правильно')
        }
    };
    changeHandler(number){
        this.setState({
            value: number
        });
    }

    render() {
        return (
            <View style={globalStyles.container}>
                <Image source={require('../img/polonia.png')}
                       style={globalStyles.logoImg}
                />

                <View style={globalStyles.signInRegisterWrapper}>
                    <Text style={globalStyles.signIn} onPress={() => this.props.navigation.navigate('Вхід')}>Вхід</Text>
                    <Text style={globalStyles.register} onPress={() => this.props.navigation.navigate('Реєстрація')}>Реєстрація</Text>

                </View>

                <TextInput style={globalStyles.textInput}
                           onChangeText={this.changeHandler}
                           placeholder={this.state.value}
                           value={this.state.value}
                           placeholderTextColor={'#EEEEEE'}

                />

                <TouchableOpacity style={globalStyles.btnSignIn} title='Вхід' onPress={this.pressHandler}>
                    <Text style={globalStyles.textBtn}>Вхід</Text>
                </TouchableOpacity>
            </View>
        )
    }


}