import React from 'react';
import { StyleSheet, View, ImageBackground, Text} from 'react-native';

class Footer extends React.Component {
    render(){
        image_uri="https://media.giphy.com/media/118lTJFyUJYyze/giphy.gif"
        return(
        <View style={styleFooter.container}>
             <ImageBackground style={styleFooter.image} source={{uri: image_uri}}>
                <Text style={styleFooter.title}>Are you serious ?!?</Text>
             </ImageBackground>
        </View> 
        );
    }
}

const styleFooter = StyleSheet.create({
    container:{
        marginTop:20,
        padding:10,
        
        width: "100%",
        
    },
    title:{
        fontSize: 20,
        color: "#fff",
        
    },
    image:{
        width: "100%",
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }  
})

export default Footer;