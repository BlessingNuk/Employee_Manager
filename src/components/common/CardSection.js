import React, {Component} from 'react';
import {View, Text} from 'react-native';

const CardSection = (props) => {
    <View style={[Styles.containerStyle, props.style]}>
        {props.children}
    </View>
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        postion: 'relative'
    }
}

export default {CardSection};