import React, { Component } from "react";
import {httpGetMessages} from "../API/TouitApi";
import Touit from "./Touit";
import {StyleSheet, FlatList, View, ScrollView, TouchableHighlight, Text, ActivityIndicator, AppRegistry } from 'react-native';
import { Font, Notifications, Permissions } from 'expo';

class TouitContainer extends Component {

    askPermissions = async () => {
        const { status: existingStatus } = await Permissions.getAsync(
          Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          finalStatus = status;
        }
        if (finalStatus !== "granted") {
          return false;
        }
        return true;
      };
    
      sendNotificationImmediately = async () => {
        let notificationId = await Notifications.presentLocalNotificationAsync({
          title: "Are you there ???",
          body: "Nouveau message"
        });
        console.log(notificationId); // can be saved in AsyncStorage or send to server
      };
    state = {
        fontLoaded: false,
      };
    
      async componentDidMount() {
        await Font.loadAsync({
          'Baloo': require('../assets/fonts/BalooBhai-Regular.ttf'),
        
          'Stylish': require('../assets/fonts/Stylish-Regular.ttf'),
        });
    
        this.setState({ fontLoaded: true });
      }

    constructor(props) {
        super(props);
        this.state = {
        touits : [],
        count : 0,
        ts:0,
        };
    }



    refresh (){
        let { ts, touits } = this.state;
        httpGetMessages(ts, (response) => {
            ts = response.ts;
            touits = response.messages.reverse().concat(touits);

            touits = touits.filter( (touit, index, list) => {
                let next = list[index+1];
                if (next && (touit.message == next.message && touit.name == next.name)){
                    if(touit.nbSpam){
                        next.nbSpam = touit.nbSpam + 1;
                    } else {
                        next.nbSpam = 2
                    }
                    return false;
                }
                return true;
            })
            
            this.setState({
                touits: touits,
                ts: ts,
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

    renderMore = () => {
        if (this.state.count <= (this.state.count+10)){
            return (<TouchableHighlight
                style={styleContainerTouit.button}
                onPress={this.onPressMore}>
                <Text style={styleContainerTouit.buttonText}>Newer</Text>
            </TouchableHighlight>)
        }
      
    }

    loading = () => {
        if (this.state.touits <= 0){
            return (
            <View style={ styleContainerTouit.horizontal}>
                <ActivityIndicator size="large" color="#0000ff" />
           </View>)
        }
    }

    showActivity = () => {
        if (this.state.count > 0){   
    }}

    render() {
        const {touits} = this.state;
        
        return (
             <View style={styleContainerTouit.container}>
                <ScrollView style={styleContainerTouit.scroll}>
                {this.renderMore()}
                {this.loading()}
                
                <FlatList
            data={touits.slice(this.state.count, this.state.count+10)}
            keyExtractor={
              (item, index) => item.id.toString()
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
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      }
   
})

AppRegistry.registerComponent('App', () => App)
export default TouitContainer;