import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Login from "./src/Login";
import Registration  from "./src/Register";
import SmsConfirmation from "./src/SmsConfirmation";

const Navigator = createStackNavigator({
    Вхід: Login,
    Реєстрація: Registration,
    Підтвердження: SmsConfirmation,
});

const App = createAppContainer(Navigator);

export default App;