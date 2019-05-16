import React, { Component } from "react";
import {httpGetMessages} from "../API/TouitApi";
import Touit from "./Touit";
import {StyleSheet, FlatList, View, ScrollView, TouchableHighlight, Text} from 'react-native';

class TouitContainer extends Component {



    constructor(props) {
        super(props);
        this.state = {
        touits : [],
        count : 0, 
        };
        }

    refresh (){
        httpGetMessages(this.state.count,(response) => {
            this.setState({
                touits: response.messages.reverse().slice(this.state.count,this.state.count+10),
            });
        })
    }

    onPressMore = () => {
        this.setState({
          count: this.state.count+10
        })
      }

    onPressLess = () => {
    this.setState({
        count: this.state.count-10
    })
    }

    componentDidMount(){
        setInterval(() => this.refresh(), 5000);
    }

    renderLess = () => {
        if (this.state.count > 0){
            return (<TouchableHighlight
                style={styleContainerTouit.button}
                onPress={this.onPressLess}
            >
                <Text style={styleContainerTouit.buttonText}>Older</Text>
            </TouchableHighlight>)
        }
        else {
            this.state.count = 0;
        }
    }

    render() {
        const {touits, count} = this.state;
        return (
             <View style={styleContainerTouit.container}>
                <ScrollView style={styleContainerTouit.scroll}>
                <TouchableHighlight
                    style={styleContainerTouit.button}
                    onPress={this.onPressMore}>
                    <Text style={styleContainerTouit.buttonText}>Newer</Text>
                </TouchableHighlight>
                <FlatList
            data={touits}
            keyExtractor={
              (item, index) => index.toString()
            }
            renderItem={({item}) => {
              return (<Touit {...item} />)
            }
            }
          />
                {this.renderLess()}
                </ScrollView>
            </View>
        )
    }
}

const styleContainerTouit = StyleSheet.create({
    container:{
        borderWidth: 4,
        alignItems: "center",
        borderColor: '#D93B18',
        width: "100%",
        borderRadius: 10,
        marginVertical: 20,
        backgroundColor: "#fff",
        padding:10,
        alignItems: "center",
        borderColor: '#D93B18',
        width: "100%",
    },
    defaultText:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
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
    },
    scroll:{
        width: "100%",
    }
   
})

export default TouitContainer;