
import React, { Component } from 'react';
import { View, Animated, Dimensions, TextInput, TouchableOpacity, Text } from 'react-native';
import { string, func, object, number } from 'prop-types';
import Iconss from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';
let entireScreenWidth = Dimensions.get('window').width;

EStyleSheet.build({ $rem: entireScreenWidth / 380 });
export class TextBoxComponent extends Component {
    static propTypes = {
        onclicknext: func,
        attrName: string.isRequired,
        title: string.isRequired,
        value: string.isRequired,
        onChange: func.isRequired,
        keyboardType: string,
        titleActiveSize: number, // to control size of title when field is active
        titleInActiveSize: number, // to control size of title when field is inactive
        titleActiveColor: string, // to control color of title when field is active
        titleInactiveColor: string, // to control color of title when field is active
        textInputStyles: object,
        otherTextInputProps: object,
        placeholder: string,
        onPressicon: func,
        Message: string,
        onEndEditing: func
    }


    static defaultProps = {
        keyboardType: 'default',
        titleActiveSize: 16,
        titleInActiveSize: 16,
        titleActiveColor: 'black',
        titleInactiveColor: 'dimgrey',
        textInputStyles: {},
        otherTextInputAttributes: {},
    }

    constructor(props) {
        super(props);
        const { value } = this.props;
        this.position = new Animated.Value(value ? 1 : 0);
        this.state = {
            isFieldActive: false,
            isvisible: false,
            borderColor: "#e1e1e1",
            iserrorshow: false,
            passwordVisable: true,
        }
    }

    _handleFocus = () => {
        this.setState({ borderColor: this.props.selectionColor })
        if (!this.state.isFieldActive) {
            this.setState({ isFieldActive: true });
            Animated.timing(this.position, {
                toValue: 1,
                duration: 150,
            }).start();
        }
        if (this.props.value != "") {
            this.setState({ isvisible: false })
        } else {
            this.setState({ isvisible: true })
        }
    }

    _handleBlur = () => {
        this.setState({ borderColor: this.props.selectionColor, isvisible: false })

        if (this.state.isFieldActive && !this.props.value) {
            this.setState({ isFieldActive: false });
            Animated.timing(this.position, {
                toValue: 0,
                duration: 150,
            }).start();
        }

    }
    _handleEndEdit = () => {
        this.props.onEndEditing != undefined &&
            this.props.onEndEditing();
    }
    _handleiconpress = () => {
        this.props.onPressicon();
        this.setState({ isFieldActive: false })
    }
    _passwordVisable = () => {
        this.props.passwordVisable(!this.state.passwordVisable);
        this.setState({
            passwordVisable: !this.state.passwordVisable
        })
    }
    _onChangeText = (updatedValue) => {
        this.setState({ isvisible: false })

        const { attrName, onChange } = this.props;

        onChange(attrName, updatedValue);
    }

    _returnAnimatedTitleStyles = () => {
        const { isFieldActive } = this.state;
        const {
            titleActiveColor, titleInactiveColor, titleActiveSize, titleInActiveSize
        } = this.props;

        return {
            top: isFieldActive ? "18%" : "45%",
            //marginTop:10,
            bottom: 0,
            fontSize: isFieldActive ? titleActiveSize : titleInActiveSize,
            //   color: commoncolor.Tableheader
        }
    }
    render() {
        console.log(this.state.borderColor)
        return (<>
            <View style={[Styles.container, { borderColor: this.props.Message != "" ? "#e12d2d" : this.state.borderColor }]}>
                <Animated.Text
                    style={[Styles.titleStyles, this._returnAnimatedTitleStyles()]}
                >
                    {this.props.title}
                </Animated.Text>
                {this.state.isvisible && <Animated.Text
                    style={[Styles.titleStylesL]}
                >
                    {this.props.placeholder}
                </Animated.Text>}

                <TextInput
                    value={this.props.value}
                    style={[Styles.textInput, this.props.textInputStyles]}
                    underlineColorAndroid='transparent'
                    autoFocus={this.props.autoFocus}
                    onFocus={this._handleFocus}
                    onBlur={this._handleBlur}
                    onEndEditing={this._handleEndEdit}
                    onChangeText={this._onChangeText}
                    keyboardType={this.props.keyboardType}
                    selectionColor={this.props.selectionColor}
                    {...this.props.otherTextInputProps}
                    onSubmitEditing={() => { this.setState({ isvisible: false, }) }}

                />
                {this.props.value != "" && <>

                    {this.props.usingPassword ?

                        this.state.passwordVisable ?

                            <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 10 }} style={[Styles.titleStylesPassword]} onPress={this._passwordVisable}>
                                <Ionicons name='ios-eye' size={25} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 10 }} style={[Styles.titleStylesPassword]} onPress={this._passwordVisable}>
                                <Ionicons name='ios-eye-off' size={25} />
                            </TouchableOpacity>
                        : <></>
                    }
                    <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 10, right: 30 }} style={[Styles.titleStylesI]} onPress={this._handleiconpress}>
                        <Iconss name='closecircle' size={20} />
                    </TouchableOpacity></>}

            </View>
            {this.props.Message != "" && <Text style={Styles.message}>{this.props.Message}</Text>}
        </>
        )
    }
}

const Styles = EStyleSheet.create({
    container: {
        width: '80%',
        borderRadius: "3rem",
        borderStyle: 'solid',
        borderBottomWidth: "1rem",
        height: "70rem",
        marginVertical: "4rem",
        marginLeft: "10%"
    },
    message: {
        fontSize: "14rem",
        textAlign: "left",
        // fontFamily: fonts.globalrobotofonts.Rregular,
        color: '#e12d2d',
        marginLeft: "10%",
        marginRight: '8%'
    },
    textInput: {
        fontSize: "15rem",
        marginTop: "25rem",
        //fontFamily: fonts.globalrobotofonts.Rmedium,
        color: 'black',
    },
    titleStyles: {
        position: 'absolute',
        // fontFamily: fonts.globalrobotofonts.Rregular,
        left: "3rem",
        left: "4rem",
        // top:10,
        fontSize: "18rem",
        color: "#909090",
        lineHeight: "20rem",
        textAlign: "left"
    },
    titleStylesL: {
        position: 'absolute',
        // fontFamily: fonts.globalrobotofonts.Rbold,
        left: "3rem",
        left: "4rem",
        top: "39rem",
        color: "#e1e1e1",
        fontSize: "16rem"
    },
    titleStylesI: {
        position: 'absolute',
        // fontFamily: 'Avenir-Medium',
        right: 0,
        top: "42rem"
    },
    titleStylesPassword: {
        position: 'absolute',
        //fontFamily: 'Avenir-Medium',
        right: '38rem',
        top: "38rem",
    }
})