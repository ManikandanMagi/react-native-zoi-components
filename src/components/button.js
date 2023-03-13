import React, { Component, useState } from "react";
import {
    Text,
    StyleSheet,
    View,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";

export class Button extends Component {
    onClick = () => {
        if (!this.props.isLoading) {
            if(this.props.onPress!=undefined){
                this.props.onPress()
            }
        }
    }
    render() {
        return (
            // <View style={styles.container}>
                <TouchableOpacity onPress={this.onClick}>
                    <View
                        style={{
                            ...styles.button,
                            backgroundColor: this.props.primaryBgColor,
                            opacity:this.props.isLoading?0.5:1
                        }}
                    >
                        {this.props.isLoading && <ActivityIndicator size="large" color={this.props.loaderColor==undefined?"#FFF":this.props.loaderColor} style={{ position: "absolute" }} />}
                        <Text style={{...styles.buttonText,color:this.props.textColor==undefined?"#FFF":this.props.textColor}}>
                            {this.props.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            // </View>
        );
    }


}

// Kindacode.com
// Just some styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 240,
        height: 70,
        borderWidth: 1,
        borderColor: "#666",
        borderRadius: 10,
        position: "relative"
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20
    },
});
