import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ExpenseScreen from '../screens/ExpenseScreen';
import ExpensesEditScreen from '../screens/ExpensesEditScreen';

export const AppStackNavigator = createStackNavigator({
    ExpensesPage : {
    screen : ExpenseScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  ExpenseEdit : {
    screen : ExpensesEditScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'ExpensesPage'
  }
);
