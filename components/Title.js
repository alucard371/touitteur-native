import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import Color from './Color';


class Title extends React.Component {
    render(){
        image_uri="https://sadanduseless.b-cdn.net/wp-content/uploads/2017/11/acid1.jpg"
        return(
        <View style={styleTitle.container}>
            
            <ImageBackground style={styleTitle.image} source={{uri: image_uri}}>
            <Text style={[styleTitle.defaultText, styleTitle.title]}>Still on Touitter</Text>
            
            <Text style={[styleTitle.defaultText, styleTitle.title]}>What you gonna do with your life ???</Text>
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
        textAlign: 'center',
    },
    title:{
        fontSize: 20,
        color: "#fff",
    },
    image:{
        width: "100%",
        height: 150,
        paddingVertical: 40,
    }
   
})

export default Title;