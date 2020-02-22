import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {globalStyles} from "../styles/global";

export default class SmsConfirmation extends Component{
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
                           placeholder='Введіть код підтвердження з SMS'
                           placeholderTextColor={'#EEEEEE'}

                />

                <TouchableOpacity style={globalStyles.btnSignIn} title='Вхід' >
                    <Text style={globalStyles.textBtn}>Підтвердити</Text>
                </TouchableOpacity>

            </View>
        )
    }
};