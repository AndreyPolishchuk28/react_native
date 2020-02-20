import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import { Login } from "./src/Login";
import { Registration } from "./src/Register";

const Navigator = createStackNavigator({
    Login: Login,
    Registration: Registration,
});

const App = createAppContainer(Navigator);

export default App;