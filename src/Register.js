import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {globalStyles} from "../styles/global";


export const Registration = (props) => {
    return (
        <View style={globalStyles.container}>
            <Image source={require('../img/polonia.png')}
                   style={globalStyles.logoImg}
            />

            <View style={globalStyles.signInRegisterWrapper}>
                <Text style={globalStyles.signInWhite} onPress={() => props.navigation.navigate('Login')}>Вхід</Text>
                <Text style={globalStyles.registerBorder} onPress={() => props.navigation.navigate('Registration')}>Реєстрація</Text>
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
    );
}