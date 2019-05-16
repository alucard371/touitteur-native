import React, { Component } from "react";
import { AppRegistry, Text, TextInput, View, TouchableHighlight, StyleSheet, Alert } from 'react-native';
import {httpSendMessage} from "../API/TouitApi";

class SendMessageForm extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '',
                        message: '' };
      }

    // submit = (event) => {
    //     event.preventDefault();
    //     const{author, message} = this.state;
    //     httpSendMessage(author, message, () => {});
    //     this.setState({
    //         message: ""
    //     });
    // };

    submitForm = () => {
        const{name,message} = this.state;

        httpSendMessage(name, message, function(event){
            if(event.success)
                Alert.alert('success', 'message send');
            else if(event.error)
                Alert.alert('error', 'message not send');
        });
    };

    // authorChange = (event) => {
    //     this.setState({
    //         author: event.target.value
    //     });
    // };

    // messageChange = (event) => {
    //     this.setState({
    //         message: event.target.value
    //     });
    // };

    render() {
        const {author, message} = this.state;
        return (
            <View style={stylesSend.container}>
                <TextInput style={stylesSend.defaultText}
                type="text"
                name="author"
                maxLength={16}
                value = {author}
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
                />
                <TextInput style={stylesSend.defaultText} type="text" name="message" 
                maxLength={256}
                value = {message}
                onChangeText={(message) => this.setState({message})}
                value={this.state.message}
                />
                <TouchableHighlight style={stylesSend.button} onPress={this.submitForm}>
                    <Text style={stylesSend.buttonText}>Press me</Text>
                </TouchableHighlight>
          </View>
        )
    }
}

const stylesSend = StyleSheet.create({
    container:{
        borderWidth: 4,
        alignItems: "center",
        borderColor: '#D93B18',
        width: "100%",
        borderRadius: 10,
        marginVertical: 20,
        backgroundColor: "#fff",
        padding:10,
    },
    defaultText:{
        borderWidth: 1,
        borderColor: '#D93B18',
        width: "100%",
        backgroundColor:'#DDD5A4',
        borderRadius: 10,
        marginVertical: 5,
        padding: 10,
    },
    button:{
        backgroundColor:'#DDD5A4',
        padding:10,
        marginVertical: 5,
        marginHorizontal: 40,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D93B18',
        
    },
    buttonText:{
        fontSize: 20,
        fontWeight: "bold",
    }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);

export default SendMessageForm;