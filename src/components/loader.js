import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View,Text } from 'react-native';

class ZLoader extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <ActivityIndicator size={this.props.size == undefined ? "small" : this.props.size} color={this.props.color == undefined ? "#af772d" : this.props.color} />
                {this.props.loaderMessage != undefined && <Text>{this.props.loaderMessage}</Text>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});

export default ZLoader;