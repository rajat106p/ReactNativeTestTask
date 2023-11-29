import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { COLORS } from '../../constant/colors';

export default Banner = ({color}) => {
    return (
        <View style={[styles.container,{backgroundColor: color}]}>
            <View style={{ width: '40%', justifyContent: 'center', alignItems: 'center' }} >
                <EvilIcons name="image" size={80} color={COLORS.White} style={{ marginTop: -15 }} />
            </View>
            <View style={{ width: '50%', justifyContent: 'center' }}>
                <Text style={styles.text1}>Get</Text>
                <Text style={styles.text2}>50% OFF</Text>
                <Text style={styles.text3}>On first 03 order</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '60%',
        height: 120,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginLeft: 20,
    },
    text1:{
        fontSize: 18,
        fontWeight: '400',
        color: COLORS.White
    },
    text2:{
        fontSize: 24,
        fontWeight: '700',
        color: COLORS.White
    },
    text3:{
        fontSize: 13,
        fontWeight: '300',
        color: COLORS.White
    }
})