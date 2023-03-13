import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { ZButton, ZCheckbox, ZRadioButton, ZTextBox } from '../../src';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userNameFocus: true,
      userName: "",
      errorusername: ""
    }
  }
  onChange = (param1, param2) => {
    // console.log(param1, param2)
    this.setState({[param1]:param2})
  }
  crosscircle=()=>{
    this.setState({userName:""})
  }
  render() {
    return (
      <View style={styles.container}>
        <ZTextBox
          attrName='userName'
          title='Email ID'
          autoFocus={false}
          value={this.state.userName}
          onChange={this.onChange}
          textInputStyles={{ // here you can add additional TextInput styles
            color: "#000000",
            fontSize: 16,
          }}
          Message={this.state.errorusername}
          onPressicon={this.crosscircle}
          usingPassword={false}
          placeholder="Enter your Email ID"
          otherTextInputProps={{   // here you can add other TextInput props of your choice
            maxLength: 100,
            keyboardType: "email-address",
          }}>

        </ZTextBox>
        <ZButton name={"Sample"} primaryBgColor={"#af762e"} isLoading={true} loaderColor={"#FFF"}></ZButton>
        <ZRadioButton data={[{label:"Sample1",value:1}]}></ZRadioButton>
        <ZCheckbox  size={35} thickness={3} color={"#E81E63"} label={"Sample"} labelColor={"#000000"} value={"Sample"} keyValue={1}></ZCheckbox>
        {/* <ZoiComponentsView color="#32a852" style={styles.box} /> */}
        {/* <ZTextBox
          attrName='userName'
          title='Email ID'
          autoFocus={this.state.userNameFocus}
          value={this.state.userName}
          onChange={this.onChange}
          textInputStyles={{ // here you can add additional TextInput styles
            color: "#000000",
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
        ></ZTextBox> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
