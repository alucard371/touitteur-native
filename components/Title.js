import React from 'react';
import { StyleSheet, Text, View, ImageBackground}from 'react-native';
import { Font } from 'expo';



class Title extends React.Component {
 
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
    }
   
})

export default Title;