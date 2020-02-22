import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {globalStyles} from "../styles/global";

export default class Registration extends Component{
    render() {
        return (
            <View style={globalStyles.container}>
                <Image source={require('../img/polonia.png')}
                       style={globalStyles.logoImg}
                />

                <View style={globalStyles.signInRegisterWrapper}>
                    <Text style={globalStyles.signInWhite} onPress={() => this.props.navigation.navigate('Вхід')}>Вхід</Text>
                    <Text style={globalStyles.registerBorder} onPress={() => this.props.navigation.navigate('Реєстрація')}>Реєстрація</Text>
                </View>

                <View style={globalStyles.nameWrapper}>
                    <TextInput style={globalStyles.nameInput}
                               placeholder="Ім'я"
                               placeholderTextColor={'#EEEEEE'}
                    />
                    <TextInput style={globalStyles.nameInput}
                               placeholder="Прізвище"
                               placeholderTextColor={'#EEEEEE'}
                    />
                </View>

                <TextInput style={globalStyles.numberDateInput}
                           placeholder="Номер телефону"
                           placeholderTextColor={'#EEEEEE'}
                />
                <TextInput style={globalStyles.numberDateInput}
                           placeholder="Дата народження"
                           placeholderTextColor={'#EEEEEE'}
                />

                <TouchableOpacity style={globalStyles.registerBtnWrapper} title='Вхід'>
                    <Text style={globalStyles.registerBtn}>Зареєструватися</Text>
                </TouchableOpacity>

            </View>
        )
    }
}