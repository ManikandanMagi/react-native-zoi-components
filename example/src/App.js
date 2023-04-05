import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { ZButton, ZCheckbox, ZRadioButton, ZTab, ZTextBox, ZToggle } from '../../src';
import ZLoader from '../../src/components/loader';
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
    this.setState({ [param1]: param2 })
  }
  crosscircle = () => {
    this.setState({ userName: "" })
  }
  onSelectSwitch = () => {

  }
  render() {
    return (
      <View style={styles.container}>


        {/* <ZToggle
            // selectionMode={1}
            // roundCorner={true}
            type="normal"
            data={["first", "second"]}
            onSelectSwitch={this.onSelectSwitch}
            selectionColor={'blue'}
          ></ZToggle> */}

        {/* <ZRadioButton data={[{ label: "Sample1", value: 1 }]}></ZRadioButton> */}

        <ZTab
          selectionColor={"rgb(17, 147, 161)"}
          data={[{
            text: "loader sdkjhksjfg amsdj", children: <View>
              <Text>sdfsdf asjdhsakjdh kjsadbbakjsdhasdjk ajsdasjkdhaskj z nxbcaksjdhkjsdm bujkhdkjkjdajshdsajdhsajkdhasjd asjdasjdhjsadhasjdhasjdjd</Text>
              <Text>sdfsdf asjdhsakjdh kjsadbbakjsdhasdjk ajsdasjkdhaskj z nxbcaksjdhkjsdm bujkhdkjkjdajshdsajdhsajkdhasjd asjdasjdhjsadhasjdhasjdjd</Text>
              <Text>sdfsdf</Text>
              <Text>sdfsdf asjdhsakjdh kjsadbbakjsdhasdjk ajsdasjkdhaskj z nxbcaksjdhkjsdm bujkhdkjkjdajshdsajdhsajkdhasjd asjdasjdhjsadhasjdhasjdjd</Text>
              <Text>sdfsdf</Text>
              <Text>sdfsdf asjdhsakjdh kjsadbbakjsdhasdjk ajsdasjkdhaskj z nxbcaksjdhkjsdm bujkhdkjkjdajshdsajdhsajkdhasjd asjdasjdhjsadhasjdhasjdjd</Text>
              <Text>sdfsdf</Text>
              <Text>sdfsdf</Text>
              <ZLoader size='large' loaderMessage="loading..." color="rgb(17, 147, 161)"></ZLoader></View>
          },
          { text: "first", children: <ZCheckbox size={35} thickness={3} color={"rgb(17, 147, 161)"} label={"Sample"} labelColor={"#000000"} value={"Sample"} keyValue={1}></ZCheckbox> },
          { text: "second", children: <ZRadioButton data={[{ label: "Sample1", value: 1 }]} color="rgb(17, 147, 161)"></ZRadioButton> }
            ,
          { text: "third", children: <ZButton name={"Sample"} primaryBgColor={"rgb(17, 147, 161)"} isLoading={true} loaderColor={"#FFF"}></ZButton> },
          {
            text: "fourth", children: <ZToggle
              selectionMode={0}
              roundCorner={true}
              data={["first", "second", "third"]}
              onSelectSwitch={this.onSelectSwitch}
              selectionColor={'rgb(17, 147, 161)'}
            >

            </ZToggle>
          },
          {
            text: "fifth", children: <ZTextBox
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
          }]} selectionMode={0}></ZTab>
        {/* <ZCheckbox size={35} thickness={3} color={"#E81E63"} label={"Sample"} labelColor={"#000000"} value={"Sample"} keyValue={1}></ZCheckbox> */}
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
