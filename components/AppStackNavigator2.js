import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import BudgetScreen from '../screens/BudgetScreen';
import BudgetEditScreen from '../screens/BudgetEditScreen';

export const AppStackNavigator = createStackNavigator({
    BudgetPage : {
    screen : BudgetScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  BudgetEdit : {
    screen : BudgetEditScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'BudgetPage'
  }
);
