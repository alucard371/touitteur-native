import React, { Component } from "react";
import PropTYpes from "prop-types";
import { StyleSheet, View, Text } from 'react-native';


class Trend extends Component {

    

    static defaultProps = {

        trend: "NoWord",
    }

    propTYpes = {
        trend: PropTYpes.string,
    }



    render() {
        const { trend } = this.props;
        
        return (
        <View style={styleTrend.container} >
            <Text style={styleTrend.trendText}>
                #{trend}
            </Text>
        </View>
            )
        }
    }

    const styleTrend = StyleSheet.create({
        container:{
            borderWidth: 8,
            borderColor: '#3F5866',
            backgroundColor: '#F2EDA2',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#D93B18',
            backgroundColor:'#DDD5A4',
            borderRadius: 10,
            marginVertical: 5,
        },
        trendText:{
            backgroundColor:'#DDD5A4',
            marginVertical: 5,
            marginHorizontal: 5,
        },
    })
    
export default Trend;