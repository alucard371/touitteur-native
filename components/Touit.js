import React from "react";
import PropTYpes from "prop-types";
import {StyleSheet, Text, View, TouchableOpacity }from 'react-native';
import { Speech } from 'expo';
import {httpAddLike} from "../API/TouitApi";


class Touit extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nbLikes : props.likes
        }
    }
    
    static defaultProps = {

        message: "Pas de messages",
        name: "Pas de nom",
    }

    propTYpes = {
       message: PropTYpes.string,
       name: PropTYpes.string,
    }


    
    
    render() {
        const { message, name, ts, ip, comments_count, id, nbSpam } = this.props;
        const { nbLikes } = this.state;

    
       
        

        return (
            <TouchableOpacity

            onPress={
                () =>{
                    let { nbLikes } = this.state;
                    httpAddLike(id, () => null);
                    this.setState({
                        nbLikes: nbLikes + 1
                    })
                    Speech.stop()
                    Speech.speak(
                    `${name} à dis : ${message}`,
                    {
                    language: 'fr-FR',
                    pitch: 2
                    }
                    )
                }

            }
        
        style={[styleTouit.container]}>
            <Text style={styleTouit.defaultText} >{message}</Text>
            <Text style={[styleTouit.touitTextRight]}>{name}</Text>
            <Text>timestamp : {ts}</Text>
            <Text>ip : {ip}</Text>
            <Text>likes : {nbLikes}</Text>
            <Text>comments : {comments_count}</Text>
            <Text>id : {id}</Text>
            <Text>nbSpam : {nbSpam}</Text>

        </TouchableOpacity>
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