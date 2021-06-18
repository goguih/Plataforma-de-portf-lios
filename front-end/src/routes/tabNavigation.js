import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator } from "./stackNavigation";

import CriadorPort from '../pages/CriadorPort';
import TelaHome from '../../TelaInicioV2/src/screens/feed/TelaHome';
import TelaPerfil from '../pages/TelaPerfilV2';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>      
      <Tab.Screen name="Sair" component={MainStackNavigator} options={ {tabBarVisible: false} } />
      <Tab.Screen name="CriadorPort" component={CriadorPort} />        
      <Tab.Screen name="TelaHome" component={TelaHome} />
      <Tab.Screen name="TelaPerfil" component={TelaPerfil} />
    </Tab.Navigator>
  );
};

export { BottomTabNavigator };