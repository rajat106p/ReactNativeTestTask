import { StyleSheet, Text, View, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import React from 'react'

const Home = () => {
  return (
    <View style={{flex: 1}}>
        <View style={{
            flex: .3,
            backgroundColor:'#2A4BA0'
        }}>
            <Text>Hello</Text>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})