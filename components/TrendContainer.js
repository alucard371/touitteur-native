import React, { Component } from "react";
import { httpGetTrends } from "../API/TouitApi";
import Trend from "./Trend";
import {StyleSheet, FlatList, View, ScrollView, Text} from 'react-native';


class TrendContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listTrends: []
        };
    }

    refresh() {
        httpGetTrends((response) => {
            let trends = [];
            for (let trend in response){
                trends.push([response[trend], trend]);
            }
            this.setState({
                listTrends: trends,
            });
        })
    }

    componentDidMount() {
        setInterval(() => this.refresh(), 5000);
    }

    

    render() {
        
        const { listTrends } = this.state;
        return(
          <View>
            <ScrollView contentContainerStyle={styleContainerTrend.container}>
                {listTrends.sort((a,b) => b[0] - a[0]).map((item, index) =>
                <Trend
                    key={index}
                    trend={item[1]}
                    />
                )}
            </ScrollView>
          </View>
        );
      }
        
    }

    const styleContainerTrend = StyleSheet.create({
        container:{
            borderWidth: 4,
            borderRadius: 6,
            alignItems: "center",
            borderColor: '#D93B18',
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#fff",
            padding:10,
            flex: 1,
            marginBottom: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
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
            fontSize: 30,
        },
        scroll:{
            width: "100%",
        },
        
        
       
    })

    



    export default TrendContainer;