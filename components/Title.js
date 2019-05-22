import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight, ImageBackground}from 'react-native';
import { Font, Notifications, Permissions } from 'expo';



class Title extends React.Component {
 
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
          title: "Wake up",
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
    
    
    render(){
        
        image_uri="https://sadanduseless.b-cdn.net/wp-content/uploads/2017/11/acid1.jpg"
        return(
        <View style={styleTitle.container}>
            <View style={styleTitle.horizontal}>
        <TouchableHighlight
         style={styleTitle.button}
          title="Accepter"
          onPress={() => this.askPermissions()}
        >
        <Text style={styleTitle.buttonText}>Ask</Text>
</TouchableHighlight>
        <TouchableHighlight
         style={styleTitle.button}
          title="Envoi"
          onPress={() => this.sendNotificationImmediately()}
        >
        <Text style={styleTitle.buttonText}>Send</Text>
</TouchableHighlight>
        <TouchableHighlight
         style={styleTitle.button}
          title="Supprimer"
          onPress={() => Notifications.dismissAllNotificationsAsync()}
        >
        <Text style={styleTitle.buttonText}>Dismiss</Text>
</TouchableHighlight>
    </View>
            <ImageBackground style={styleTitle.image} source={{uri: image_uri}}>
            {
    this.state.fontLoaded ? (
            <Text style={[styleTitle.defaultText, styleTitle.title]}>Still on Touitter</Text>
            ) : null
  }
  {
    this.state.fontLoaded ? (
            <Text style={[styleTitle.defaultText, styleTitle.title]}>What you gonna do with your life ???</Text>
    ) : null
  }
            
  
            </ImageBackground>
        </View>
        
        );
    }
}

const styleTitle = StyleSheet.create({
    container:{
        marginTop:20,
        padding:10,
        alignItems: "center",
        width: "100%",
    },
    defaultText:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
    },
    title:{
        fontSize: 20,
        color: "#fff",
        fontFamily: 'Stylish',
        
    },
    image:{
        width: "100%",
        height: 150,
        paddingVertical: 40,
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    button:{
        backgroundColor:'#DDD5A4',
        // padding:10,
        // marginVertical: 5,
        width: "30%",
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
   
})

export default Title;