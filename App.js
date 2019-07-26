/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import constants from 'jest-haste-map/build/constants';

export class App extends Component {
  constructor(){
    super()
    this.state = {
      name:'React',
      cc:20
    }
  }
  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text> Hello React {this.state.name+this.state.cc} </Text>
      </View>
    )
  }
}
 
export default App