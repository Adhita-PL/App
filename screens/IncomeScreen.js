import React, {Component} from 'react'
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import {View, Text} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class IncomeScreen extends Component {
    constructor() {
        super()
        this.state = {
            income : '',
            userId : firebase.auth().currentUser.email
        }
    }
    goToBudget = () => {
        db.collection("users")
        .where("email_id", "==", this.state.userId)
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                db.collection("users").doc(doc.id).update({
                    income: this.state.income,
                });
            });
        });
        this.props.navigation.navigate("BudgetPage")
    }
    render() {
        return(
            <View>
                <MyHeader 
                    title = "Your Income"
                />
                <TextInput
                    placeholder = {"Enter your monthly Income"}
                    keyboardType = {'numeric'}
                    onChangeText = {(text) => {
                        this.setState({
                            income : text
                        })
                    }}
                />
                <TouchableOpacity onPress = {()=>{
                    this.goToBudget();
                }}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}