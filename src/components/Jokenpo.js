import React, { Component } from 'react'
import {
  View,  
  StyleSheet,
  Text, 
  Image
} from 'react-native'
import {
  widthPercentageToDP as w, 
  heightPercentageToDP as h
} from 'react-native-responsive-screen'

const Pedra = require('../../assets/imgs/pedra.png')
const Papel = require('../../assets/imgs/papel.png')
const Tesoura = require('../../assets/imgs/tesoura.png')

class Jokenpo extends Component {
  render() {
     if (this.props.selection === 'pedra') {
        return (
          <View>
            <Text style={styles.title}>{this.props.player}</Text>
            <Image style={styles.image} source={(Pedra)} />      
          </View>
      )} else if (this.props.selection === 'papel') {
        return (
          <View>
            <Text style={styles.title}>{this.props.player}</Text>
            <Image style={styles.image} source={Papel} />      
          </View>
      )} else if (this.props.selection === 'tesoura') {
        return (
          <View>
            <Text style={styles.title}>{this.props.player}</Text>
            <Image style={styles.image} source={Tesoura} />      
          </View>
      )} 
        return (
          <View />
      )
  }
}

  const styles = StyleSheet.create({
  image: {
    width: w('30%'),
    height: h('30%'),
    resizeMode: 'contain'
  },
  title: {
    fontSize: h('4%'),
    fontFamily: 'FingerPaint',
    textAlign: 'center',
    color: '#FFF'
  }
})

export default Jokenpo
