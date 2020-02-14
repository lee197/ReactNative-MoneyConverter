/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import {
  Platform, 
  StyleSheet, 
  Dimensions, 
  Text, 
  View, 
  NativeModules,
  FlatList,
  SafeAreaView,
  TextInput,
  Button,
  Keyboard
} from 'react-native';

import React, { Component } from 'react';

export default class App extends Component<{}> {

  state = {
    eurMount: 1,
    currency:[]
  }

  componentDidMount() {
   this._requestData()

 }
 _resetPress(){
  this._requestData()
}

_requestData(){
  NativeModules.NetworkingManager.getOnlineData(value => {
    this.setState({currency:[value["rates"]]})
    console.log(this.state)
  })
}


_handlePress() {

 val = this.state.eurMount
 cur = this.state.currency[0]

 usd=cur["USD"]*val
 cur["USD"]=usd.toFixed(6)

 jpy=cur["JPY"]*val
 cur["JPY"]=jpy.toFixed(6)

 gbp=cur["GBP"]*val
 cur["GBP"]=gbp.toFixed(6)

 chf=cur["CHF"]*val
 cur["CHF"]=chf.toFixed(6)

 cny=cur["CNY"]*val
 cur["CNY"]=cny.toFixed(6)

 sek=cur["SEK"]*val
 cur["SEK"]=sek.toFixed(6)

 nzd=cur["NZD"]*val
 cur["NZD"]=nzd.toFixed(6)

 aud=cur["AUD"]*val
 cur["AUD"]=aud.toFixed(6)

 this.setState({cur})
 console.log(this.state.currency[0]["AUD"]);
 this.textInput.clear()
 this.setState({eurMount:1})
 Keyboard.dismiss()
}



render() {

 return (
  <SafeAreaView style={styles.container}>

  <View style={styles.container} >
  <Text style={styles.head}>
  Currency Exchange(EUR)
  </Text>

  <View style={styles.input_row}>

  <TextInput ref={input => { this.textInput = input }} style={styles.input}
  placeholder="Enter Euro Mount"
  onChangeText={(text) => this.setState({eurMount:text})}
  keyboardType={'numeric'}
  />

  <Button
  title="Confirm"
  color="#841584"
  onPress={() => this._handlePress()}
  />
  </View>

  <FlatList

  data={this.state.currency}

  renderItem={({ item }) =>
  <View>

  <View style={styles.text_row}>
  <Text style={styles.item}>USD</Text>
  <Text style={styles.item}>{item.USD}</Text>
  </View>

  <View style={styles.text_row}>
  <Text style={styles.item}>JPY</Text>
  <Text style={styles.item}>{item.JPY}</Text>
  </View>

  <View style={styles.text_row}>
  <Text style={styles.item}>GBP</Text>
  <Text style={styles.item}>{item.GBP}</Text>
  </View>


  <View style={styles.text_row}>
  <Text style={styles.item}>AUD</Text>
  <Text style={styles.item}>{item.AUD}</Text>
  </View>

  <View style={styles.text_row}>
  <Text style={styles.item}>CHF</Text>
  <Text style={styles.item}>{item.CHF}</Text>
  </View>

  <View style={styles.text_row}>
  <Text style={styles.item}>CNY</Text>
  <Text style={styles.item}>{item.CNY}</Text>
  </View>

  <View style={styles.text_row}>
  <Text style={styles.item}>SEK</Text>
  <Text style={styles.item}>{item.SEK}</Text>
  </View>

  <View style={styles.text_row}>
  <Text style={styles.item}>NZD</Text>
  <Text style={styles.item}>{item.NZD}</Text>
  </View>

  </View>
}
/>
</View>
<Button
title="Reset"
color="#841584"
onPress={() => this._resetPress()}
/>

</SafeAreaView>

);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  item: {

    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 24,
  },

  text_row:{
    backgroundColor: '#D5CECC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,


  },

  head:{
    fontSize: 32,
    textAlign: 'center' ,
    paddingBottom: 20
  },

  input:{
    height: 40,
    width:300, 
    borderColor: 'gray', 
    borderWidth: 1
  },

  input_row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },


});




