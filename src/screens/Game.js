import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native'
import {
  widthPercentageToDP as w, 
  heightPercentageToDP as h
} from 'react-native-responsive-screen'

import Jokenpo from '../components/Jokenpo'

class Game extends Component {
  constructor(props) {
    super(props)
      this.state = {
        human: 'pedra',
        computer: 'tesoura',
        result: '', 
        humanResult: 0, 
        computerResult: 0 
        }
  }

resetar() {
  this.setState({
      human: 'pedra', 
      computer: 'tesoura',
      result: '', 
      humanResult: 0,
      computerResult: 0
      })
  }

jokenpo(human) {
  let computerResult = this.state.computerResult
  let humanResult = this.state.humanResult
  let number = Math.random()
  let result = ''
  let computer = ''
  number = Math.floor(number * 3)

  switch (number) {
  case 0:
      computer = 'pedra'
      break
  case 1:
      computer = 'papel'
      break
  case 2:
      computer = 'tesoura'
      break
  default:
      computer = ''
  }

 if (computer === human) {
    result = 'Empate'
  } else if (computer === 'pedra' && human === 'tesoura') { 
    result = 'Você Perdeu'
    computerResult += 1
  } else if (computer === 'tesoura' && human === 'papel') {
    result = 'Você Perdeu'
    computerResult += 1
  } else if (computer === 'papel' && human === 'pedra') {
    result = 'Você Perdeu'
    computerResult += 1
  } else if (computer === 'tesoura' && human === 'pedra') {
    result = 'Você Ganhou'
    humanResult += 1
 } else if (computer === 'papel' && human === 'tesoura') {
    result = 'Você Ganhou'
    humanResult += 1
 } else if (computer === 'pedra' && human === 'papel') {
    result = 'Você Ganhou'
    humanResult += 1
 } 
    this.setState({
      human, 
      computer,
      result, 
      humanResult,
      computerResult
    })
  }
  
  render() {
    return (
      <ImageBackground style={styles.container}
        source={require('../../assets/imgs/background.jpg')}>
        <View style={styles.header}>
          <View style={styles.headerUser}>
            <Text style={styles.text}>Você</Text>
            <Text style={styles.text}>Máquina</Text>
          </View>
          <View style={styles.counter}>
            <Text style={[ styles.text, {fontSize: h('10%')} ]}>{this.state.humanResult}</Text>
            <Text style={[ styles.text, {fontSize: h('10%')} ]}>{this.state.computerResult}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.resultText}>{this.state.result}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Jokenpo selection={this.state.human} player='Você' />
            <TouchableOpacity style={[ styles.button, 
              { backgroundColor: '#FF8C00', width: w('11%'), height: h('20%'), marginTop: h('10%') } ]} 
              onPress={() => { this.resetar() }}>
              <Text style={styles.text}>Reset</Text>
            </TouchableOpacity>
            <Jokenpo selection={this.state.computer} player='Máquina' />
          </View>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={[ styles.button, 
            { backgroundColor: '#bf0811', marginHorizontal: '1.5%' } ]}
            onPress={() => { this.jokenpo('pedra') }}>
            <Text style={styles.txtButton}>Pedra</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.button, 
            { backgroundColor: '#898013'} ]} 
            onPress={() => { this.jokenpo('papel') }}>
            <Text style={styles.txtButton}>Papel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.button, 
            { backgroundColor: '#0000ff', marginHorizontal: '1.5%'} ]}
            onPress={() => { this.jokenpo('tesoura') }}>
            <Text style={styles.txtButton}>Tesoura</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  header: {
    borderWidth: h('0.5%'),
    borderColor: '#FFF',
    borderRadius: h('0.5%'),
    marginTop: '1.5%',
    marginHorizontal: '1.5%'
  },
  headerUser: {
    flexDirection: 'row',
    paddingHorizontal: w('5%'),
    justifyContent: 'space-between'
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0.5%',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: h('4%'),
    fontFamily: 'FingerPaint',
    color: '#FFF'
  },
  resultText: {
    fontSize: h('5%'),
    fontFamily: 'FingerPaint',
    color: '#FFF',
    textAlign: 'center',
    marginTop: h('0.5%')
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    flexDirection: 'column',
    height: ('70%'),
    width: ('15%'),
    borderWidth: h('1%'),
    borderColor: '#FFF',
    borderRadius: h('15'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtButton: {
    textAlign: 'center',
    fontSize: h('3.5%'),
    color: '#FFF',
    fontFamily: 'FingerPaint'
  }
})

export default Game