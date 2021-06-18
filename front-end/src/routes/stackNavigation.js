import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from '../pages/ViolettInicialScreen'
import CadastroCriador from '../pages/TelaCadastroCriador'
import CadastroRecrutador from '../pages/TelaCadastroRecrutador';
import LoginRecrutador from '../pages/TelaLoginRecrutador'
import LoginCriador from '../pages/TelaLoginCriador'

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="TelaInicial"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Pagina inicial" component={TelaInicial} />
            <Stack.Screen name="CadastroCriador" component={CadastroCriador}  /> 
            <Stack.Screen name="CadastroRecrutador" component={CadastroRecrutador}  />
            <Stack.Screen name="LoginRecrutador" component={LoginRecrutador}   />     
            <Stack.Screen name="LoginCriador" component={LoginCriador}  />
      </Stack.Navigator>
    );
}

export  { MainStackNavigator  }