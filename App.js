import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Title from './components/Title';
import TouitContainer from './components/TouitContainer';
import SendMessageForm from './components/SendMessageForm';
import TrendContainer from './components/TrendContainer';
import Footer from './components/Footer';

export default class App extends React.Component {
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
