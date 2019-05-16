import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native';

class Color extends React.Component {

    constructor(props){
        super(props);
        this.state={
        ColorHolder : '#00BCD4'
        }
    }

    ChangeColorFunction=()=>
        {
            var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            this.setState({
            ColorHolder : ColorCode
            })
        }


    render() {
    return (
   
      <View style={[styles.MainContainer, { backgroundColor: this.state.ColorHolder }]} >
        <TouchableHighlight  style={styles.Container} title="Change View Background Color" onPress={this.ChangeColorFunction}>
            <Text style={styles.colorText} >Change me</Text>
        </TouchableHighlight>
      </View>

    );
  }
}

const styles = StyleSheet.create(
    {
      MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      Container: {
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
      colorText:{
        backgroundColor:'#DDD5A4',
        marginVertical: 5,
        marginHorizontal: 5,
    },


    
    });

export default Color;