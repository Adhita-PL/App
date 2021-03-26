import React, {Component} from 'react'
import { TextInput } from 'react-native';
import {View, Text} from 'react-native';
import MyHeader from '../components/MyHeader'

export default class BudgetScreen extends Component {
    render() {
        return(
            <View>
                <MyHeader 
                    title = "Your Budget"
                />
                <Text>Groceries</Text>
                <TextInput
                    placeholder = {"Vegetables, fruits, milk, etc"}
                    keyboardType = {'numeric'}
                />
                <Text>Rent</Text>
                <TextInput
                    placeholder = {"Home Rent, EMI's"} 
                    keyboardType = {'numeric'}
                />
                <Text>Bills</Text>
                <TextInput
                    placeholder = {"Electricity, Internet, DTH"}
                    keyboardType = {'numeric'}
                />
                <Text>Entertainment</Text>
                <TextInput
                    placeholder = {"Shopping, Movies, Tours"} 
                    keyboardType = {'numeric'}
                />
                <Text>Kids</Text>
                <TextInput
                    placeholder = {"Fees, clothes, toys"} 
                    keyboardType = {'numeric'}
                />
                <Text>Fuel</Text>
                <TextInput
                    placeholder = {"2 or 4 wheeler, Public Transport"} 
                    keyboardType = {'numeric'}
                />
                <Text>Others</Text>
                <TextInput
                    placeholder = {"..."} 
                    keyboardType = {'numeric'}
                />
            </View>
        )
    }
}