import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View style={footerStyles.container}>
            <Text style={footerStyles.text}>All rights reserved by Little Lemon, 2022{''}</Text>
        </View>
    );
}

const footerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14',
        alignItems: 'center',
        marginBottom: 5,
    },
    text: {
        fontSize: 13,
        color: 'black',
        fontStyle: 'italic',
    },
});