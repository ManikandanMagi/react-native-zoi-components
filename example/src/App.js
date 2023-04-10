import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { ZButton, ZCheckbox, ZCollapsibleCard, ZRadioButton, ZTab, ZTextBox, ZToggle } from '../../src';
import ZLoader from '../../src/components/loader';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userNameFocus: true,
      userName: "",
      errorusername: "",
      data: [{ mainHeader: "member list", data: [{ name: "dulcy" }, { name: "navaroj" }] },
      { mainHeader: "User List", data: [{ name: "Niro" }, { name: "VanaSelvi" }] }]
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
        <ZTab
          selectionColor={"rgb(17, 147, 161)"}
          data={[{
            text: "Loader", children: <View>
              <ZLoader size='large' loaderMessage="loading..." color="rgb(17, 147, 161)"></ZLoader></View>
          },
          { text: "CheckBox", children: <ZCheckbox size={35} thickness={3} color={"rgb(17, 147, 161)"} label={"Sample"} labelColor={"#000000"} value={"Sample"} keyValue={1}></ZCheckbox> },
          { text: "RadioButton", children: <ZRadioButton data={[{ label: "Sample1", value: 1 }]} color="rgb(17, 147, 161)"></ZRadioButton> }
            ,
          { text: "Button", children: <ZButton name={"Sample"} primaryBgColor={"rgb(17, 147, 161)"} isLoading={true} loaderColor={"#FFF"}></ZButton> },
          {
            text: "Toggle", children: <ZToggle
              selectionMode={0}
              roundCorner={true}
              data={["first", "second", "third"]}
              onSelectSwitch={this.onSelectSwitch}
              selectionColor={'rgb(17, 147, 161)'}
            >

            </ZToggle>
          },
          {
            text: "TextBox", children: <ZTextBox
              attrName='userName'
              title='Email ID'
              autoFocus={false}
              value={this.state.userName}
              onChange={this.onChange}
              selectionColor={'rgb(17, 147, 161)'}
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
          },
          {
            text: "Collapsible Card", children:
              < View style={{ flex: 1 }}>
                {
                  this.state.data.map((item) => {
                    return <ZCollapsibleCard mainHeader={<Text>{item.mainHeader}</Text>}

                      content={
                        item.data.map((val) => {
                          return <View><Text>{val.name}</Text></View>
                        })
                      }>



                    </ZCollapsibleCard>
                  })
                }
              </View>

          }
          ]
          } selectionMode={0} ></ZTab >

      </View >
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
