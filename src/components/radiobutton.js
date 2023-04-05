import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export class RadioButton extends React.Component {
    // const[userOption, setUserOption] = useState(null);
    constructor(props) {
        super(props);
        this.state = {
            userOption: null
        }
    }
    componentDidMount = () => {
        if (this.props.value != "" && this.props.value != undefined) {
            this.setState({ userOption: this.props.value })
        }
    }
    selectHandler = (value) => {
        if (this.props.onSelect != undefined) {
            this.props.onSelect(value);
        }

        this.setState({ userOption: value })
    };
    render() {

        return (
            <View style={{padding:20}}>
                {this.props.data.map((item) => {
                    return (
                        <Pressable
                          
                            onPress={() => this.selectHandler(item.value)}>
                            <View style={{
                                flexDirection: 'row',
                                gap:10,
                                //justifyContent: "flex-start",
                                alignItems:'center'
                            }}>
                                <View style={{
                                    padding: this.props.thickness == undefined ? 4 : this.props.thickness,
                                    width: this.props.size==undefined?40:this.props.size,
                                    height: this.props.size==undefined?40:this.props.size,
                                    borderWidth: 2,
                                    borderColor: this.props.color==undefined?"#1359a0":this.props.color,
                                    borderRadius: 20,
                                    // alignContent:"center",
                                     alignItems:"center",
                                     justifyContent:"center"
                                }}>
                                    {
                                        (item.value == this.state.userOption)
                                            ?
                                            (<View style={{
                                                width: this.props.size==undefined?30:this.props.size-10,
                                                height: this.props.size==undefined?30:this.props.size-10,
                                                backgroundColor: this.props.color==undefined?"#1359a0":this.props.color,
                                                borderRadius: 20

                                            }}>

                                            </View>)
                                            :
                                            (<View style={{backgroundColor:"#FFF"}} />)
                                    }
                                </View>
                                <Text  style={{...styles.option,color:this.props.labelColor==undefined?"#000":this.props.labelColor}}>
                                    {item.label}
                                </Text>
                            </View>
                            {/* <Text style={styles.option}> {item.label}</Text> */}
                        </Pressable>
                    );
                })}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    option: {
        fontSize: 20,
       // color: 'white',
        textAlign: 'center',
    },
    unselected: {
        backgroundColor: 'red',
        margin: 5,
    },
    selected: {
        backgroundColor: 'blue',
        margin: 6,
        padding: 10,
        borderRadius: 10,
    },
});