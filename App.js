import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Title from './components/Title';
import TouitContainer from './components/TouitContainer';
import SendMessageForm from './components/SendMessageForm';
import TrendContainer from './components/TrendContainer';
import Footer from './components/Footer';
import { Font } from 'expo';



export default class App extends React.Component {
 
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Baloo': require('./assets/fonts/BalooBhai-Regular.ttf'),
    
      'Stylish': require('./assets/fonts/Stylish-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <Title/>
        <ScrollView>
          <SendMessageForm/>
          <TouitContainer/>
          <TrendContainer/>
          <Footer/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#260D0A',
  },
});
