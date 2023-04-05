import React, { useState } from 'react';

import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Switch } from 'react-native';

const ToggleSwitch = ({
  type,
  navigation,
  selectionMode,
  roundCorner,
  option1,
  option2,
  onSelectSwitch,
  selectionColor, data
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);

  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };
  if (type == "normal") {
    return (
      <NormalSwitch></NormalSwitch>
    )
  } else {
    return (
      <View>
        <View
          style={{
            height: 44,
            width: 215,
            backgroundColor: 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            borderWidth: 1,
            borderColor: selectionColor,
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 2,
          }}>
          {data.map((item, index) => {
            return <TouchableOpacity
              activeOpacity={index}
              onPress={() => updatedSwitchData(index)}
              style={{
                flex: 1,

                backgroundColor: getSelectionMode == index ? selectionColor : 'white',
                borderRadius: getRoundCorner ? 25 : 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: getSelectionMode == index ? 'white' : selectionColor,
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          })}
          {/* <TouchableOpacity
            TouchableOpacity
            activeOpacity={1}
            onPress={() => updatedSwitchData(2)}
            style={{
              flex: 1,

              backgroundColor: getSelectionMode == 2 ? selectionColor : 'white',
              borderRadius: getRoundCorner ? 25 : 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: getSelectionMode == 2 ? 'white' : selectionColor,
              }}>
              {option2}
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }

};
export default ToggleSwitch;
//React Native Switch
//https://aboutreact.com/react-native-switch/



const NormalSwitch = (props) => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    //To handle switch toggle
    setSwitchValue(value);
    props.onSelectSwitch(value)
    //State changes according to switch
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/*To show Switch state*/}
        <Text>
          {switchValue ? props.data[0] : props.data[1]}
        </Text>
        {/*Setting the default value of state*/}
        {/*On change of switch onValueChange will be triggered*/}
        <Switch
          style={{ marginTop: 30 }}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

