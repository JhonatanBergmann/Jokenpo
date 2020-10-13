import React, { Component } from 'react'
import { 
    TouchableOpacity,
    Text,
    StyleSheet,
    ImageBackground,
    Image
} from 'react-native'

export default class Home extends Component{
    render() {
        return (
            <ImageBackground style={styles.container}
                source={require('../../assets/imgs/background.jpg')}>
                <Text style={styles.title}>Jokenpo</Text>
                <Image style={styles.logo}
                    source={require('../../assets/imgs/logo.png')} />
                <TouchableOpacity style={styles.button}
                    onPress={ () => this.props.navigation.navigate('Game')}>
                    <Text style={styles.textButton}>PLAY</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 50,
        color: '#FFF',
        fontFamily: 'FingerPaint'
    },
    logo: {
        width: '50%',
        height: '50%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00
    },
    button: {
        width: '25%',
        height: '20%',
        borderWidth: 5,
        borderRadius: 30,
        borderColor: '#FFF',
        backgroundColor: '#000',
        justifyContent: 'center',
    },
    textButton: {
        fontFamily: 'FingerPaint',
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF'
    }
})