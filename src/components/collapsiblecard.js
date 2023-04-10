import React, { Component } from 'react';
import { Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
export default class ZCollapsibleCard extends Component {
    constructor() {
        super();
        this.state = { expanded: false }
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    changeLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.btnTextHolder}>
                    <View activeOpacity={0.8}
                        onStartShouldSetResponder={this.changeLayout} style={styles.Btn}>
                        {this.props.mainHeader}
                    </View>
                    <View style={{
                        height: this.state.expanded ? null : 0,
                        overflow: 'hidden',
                        // flex: 1,
                        // display: !this.state.expanded ? 'none' : "flex"
                        // width:"100%"
                    }}>
                        {this.props.content}
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        minHeight:30,
        paddingHorizontal: 10,
        // justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    text: {
        fontSize: 17,
        color: 'black',
        padding: 10
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    btnTextHolder: {
        flex: 1
        // borderWidth: 1,
        // borderColor: 'rgba(0,0,0,0.5)'
    },
    Btn: {
        // padding: 10,
        // backgroundColor: 'rgba(0,0,0,0.5)'
    }
});