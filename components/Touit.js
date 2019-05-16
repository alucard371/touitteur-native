import React from "react";
import PropTYpes from "prop-types";
import {StyleSheet, Text, View} from 'react-native';


class Touit extends React.Component{

    
    static defaultProps = {

        message: "Pas de messages",
        name: "Pas de nom",
    }

    propTYpes = {
       message: PropTYpes.string,
       name: PropTYpes.string,
    }

    render() {
        const { message, name } = this.props;
        return (
            <View style={[styleTouit.container]}>
                <Text style={styleTouit.defaultText}>{message}</Text>
                <Text style={[styleTouit.touitTextRight]}>{name}</Text>
            </View>
        )
    }
}

const styleTouit = StyleSheet.create({
    container:{
        borderWidth: 8,
        padding:10,
        borderColor: '#3F5866',
        borderRadius: 5,
        backgroundColor: '#F2EDA2',
        width: "100%",
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
    defaultText:{
        alignItems: 'center',
        width: "100%",
        backgroundColor:'#DDD5A4',
    },
    touitTextRight:{
        justifyContent: 'flex-end',
        marginLeft: 150,
    },
    button:{
        fontSize: 30,
    },
    buttonText:{

    }
   
})

export default Touit;