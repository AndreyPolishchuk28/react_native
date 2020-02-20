import React, {useState} from 'react';
import { View, TouchableOpacity, TextInput, Image, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export const Login = (props) => {
    const [value, setValue] = useState('');
    const [outline, setOutline] = useState(false);

    const pressHandler = () => {
        let number = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/;
        if (number.test(value)){
            props.navigation.navigate('smsConfirmation');
        }
        else{
            alert('Номер введен не правильно')
        }
    };

    const handleFocus = () =>{
        setOutline(true)
    };

    return (
        <View style={globalStyles.container}>
            <Image source={require('../img/polonia.png')}
                   style={globalStyles.logoImg}
            />

            <View style={globalStyles.signInRegisterWrapper}>
                <Text style={globalStyles.signIn} onPress={() => props.navigation.navigate('Login')}>Вхід</Text>
                <Text style={globalStyles.register} onPress={() => props.navigation.navigate('Registration')}>Реєстрація</Text>

            </View>

            <TextInput style={globalStyles.textInput}
                       onChangeText={number => setValue(number)}
                       onFocus={handleFocus}
                       placeholder='Введіть ваш номер телефону'
                       value={value}
                       placeholderTextColor={'#EEEEEE'}

            />

            <TouchableOpacity style={globalStyles.btnSignIn} title='Вхід' onPress={pressHandler}>
                <Text style={globalStyles.textBtn}>Вхід</Text>
            </TouchableOpacity>

        </View>
    );
}