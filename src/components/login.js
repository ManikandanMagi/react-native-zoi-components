import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
// import label from '../../utils/constants/labels/label';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TextBox } from './TextBox';


let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (

            <View style={{ flex: 1, flexDirection: 'row' }}>

                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {/* {this.state.isLoading &&
                            <Refreshapi isLoading={this.state.isLoading} EntityTypeID={this.state.EntityTypeID} LoginClick={this.state.LoginClick} navigation={this.props.navigation} />
                        } */}
                    <View style={{ flex: 1.6, backgroundColor: this.props.primaryColor }} >
                        <Image source={this.props.logo}
                            style={styles.logoStyle} />
                        <View style={{ marginTop: "4%" }}><Text></Text></View>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <View style={styles.card_container}>
                            <ScrollView>
                                <TextBox
                                    attrName='userName'
                                    title='Email ID'
                                    autoFocus={this.state.userNameFocus}
                                    value={this.state.userName}
                                    updateMasterState={this._updateMasterState}
                                    textInputStyles={{ // here you can add additional TextInput styles
                                        color: commoncolor.black,
                                        fontSize: 16,
                                    }}
                                    Message={this.state.errorusername}
                                    onPressicon={this.crosscircle}
                                    usingPassword={false}
                                    placeholder="Enter your Email ID"
                                    otherTextInputProps={{   // here you can add other TextInput props of your choice
                                        maxLength: 100,
                                        keyboardType: "email-address",
                                    }}
                                />
                                <TextBox
                                    attrName='Password'
                                    title='Password'
                                    autoFocus={this.state.passwordFocus}
                                    Message={this.state.errorpassword}
                                    value={this.state.Password}
                                    updateMasterState={this._updateMasterState}
                                    textInputStyles={{ // here you can add additional TextInput styles
                                        color: commoncolor.black,
                                        fontSize: 16,
                                    }}
                                    onPressicon={this.crosscirclePassword}
                                    placeholder="Enter Password"
                                    usingPassword={true}
                                    passwordVisable={(i) => this.setState({ passwordVisable: i })}
                                    otherTextInputProps={{   // here you can add other TextInput props of your choice
                                        maxLength: 30,
                                        secureTextEntry: this.state.passwordVisable
                                    }}
                                />
                                <View style={{ flex: 0.5, marginTop: "2%" }}>
                                    <TouchableOpacity
                                        onPress={this.forgetPassword}
                                    >
                                       
                                            <Text style={styles.typeText}>{label.ForgotPassword}</Text>
                                       
                                    </TouchableOpacity>

                                </View>
                                <View style={{ flex: 0.3, flexDirection: 'row', paddingTop: 10, paddingLeft: 40, paddingRight: 40, marginTop: "10%" }}>
                                   
                                        <TouchableOpacity
                                            onPress={this.login}
                                            style={[styles.login_button, { opacity: this.state.indicator ? 0.4 : 1 }]}
                                        >
                                            <View>
                                                <Text style={styles.login_text}>{label.Login}</Text>
                                            </View>
                                        </TouchableOpacity>
                                       
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={{ flex: 0.6 }}>
                            <View style={{ flex: 0.5, flexDirection: 'row', marginTop: 80 }}>
                                <View style={{ flex: 1, flexDirection: 'column', }}>
                                    <Text style={styles.text_investor}>{label.NewInvestor}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'column', }}>
                                    <TouchableOpacity
                                        onPress={this.signUpBtn}
                                        style={styles.sign_button}>
                                        <Text style={styles.signup_text}>{label.Signup}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    </View>
                </ScrollView>


            </View >
        )
    }
}
const styles = EStyleSheet.create({
    card_container: {
        flex: 1.5,
        //   backgroundColor: commoncolor.White,
        margin: "5rem",
        marginTop: '-55rem',
        borderRadius: "10rem",
        justifyContent: 'center',
        elevation: "5rem",
        paddingBottom: '15rem'
    },
    typeText: {
        // color: commoncolor.PrimaryBlue,
        fontSize: "16rem",
        paddingLeft: "40rem"
    },
    login_text: {
        fontSize: "20rem",
        //color: commoncolor.White,
        // fontFamily: fonts.globalrobotofonts.Rbold,
    },
    login_button: {
        height: '55rem',
        borderRadius: "5rem",
        alignItems: 'center',
        width: "300rem",
        justifyContent: 'center',
        //backgroundColor: commoncolor.Green,
    },
    logoStyle: {
        marginTop: '70rem',
        marginBottom: '100rem',
        width: "280rem",
        height: "65rem",
        alignSelf: 'center',
    },
    text_investor: {
        color: 'grey',
        fontSize: "16rem",
        marginLeft: "50rem",
        paddingLeft: "42rem",
        // fontFamily: fonts.globalrobotofonts.Rregular
    },
    signup_text: {
        //   color: commoncolor.PrimaryBlue,
        fontSize: "16rem",
        // fontFamily: fonts.globalrobotofonts.Rmedium
    },
    errorText: {
        // color: commoncolor.ErrorColor,
        //marginTop: 10,
    },
    underlineStyleHighLighted: {
        borderColor: "grey",
    },
    underlineStyleBase: {
        width: "40rem",
        height: "37rem",
        borderWidth: "1rem",
        //color: commoncolor.PureBlack,
        //borderColor: commoncolor.brown,
        fontSize: "14rem",
        // fontFamily: fonts.globalrobotofonts.Rbold
    },
    textEmail: {
        fontSize: "18rem",
        // fontFamily: fonts.globalrobotofonts.Rbold,
        alignSelf: 'center'
    },
    textOtp: {
        fontSize: "18rem",
        // fontFamily: fonts.globalrobotofonts.Rbold,
        lineHeight: '21rem',
        marginTop: '50rem'
    },
    buttonLayout: {
        height: "50rem",
        width: "120rem",
        borderRadius: "5rem",
        justifyContent: 'center',
        //     backgroundColor: commoncolor.Green,
    },
    submitText: {
        alignSelf: 'center',
        fontSize: '15rem',
        //   color: commoncolor.White,
        // fontFamily: fonts.globalrobotofonts.Rbold
    },
    pinErrorMessage: {
        marginTop: "-120rem",
        // color: commoncolor.ErrorColor,
    },
})


