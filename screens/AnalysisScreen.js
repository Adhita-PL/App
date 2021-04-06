import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config.js";
import MyHeader from '../components/MyHeader'

export default class AnalysisScreen extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            userId: firebase.auth().currentUser.email,
        }
    }
    render() {
        return(
            <View>
                <MyHeader 
                    navigation = {this.props.navigation}
                    title = "Analysis"
                /> 
                <View>
                    <Text style = {styles.heading}>Groceries</Text>
                    <View>
                        <Text>Limit : </Text>
                        
                        <Text>Spent : </Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    heading : {
        fontSize : RFValue(20)
    }
})