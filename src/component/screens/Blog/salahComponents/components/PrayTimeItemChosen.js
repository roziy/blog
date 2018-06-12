import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../constants/colors';


export default class PrayTimeItem extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.prayName}>{this.props.name}</Text>
                    <Text style={styles.prayTime}>{this.props.time}</Text>
                    <Text style={styles.prayJamat}>Jamat at {this.props.jamatTime}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Image style={styles.icon} resizeMode="contain" source={this.props.icon} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#4185f6',
        marginBottom: 2
    },
    prayName: {
        fontSize: 16,
        color: "#fff"
    },
   prayJamat: {
        fontSize: 12,
        color: "#fff"
    },
    prayTime: {
        fontSize: 20,
        color: "#fff"
    },
    icon: {
        width: 35,
        height: 30
    }
})