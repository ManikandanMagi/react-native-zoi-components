import { Button } from "./components/button"
import CheckboxComponent from "./components/checkbox"
import { RadioButton } from "./components/radiobutton"
import { TextBoxComponent } from "./components/textbox"
import ToggleSwitch from "./components/toggleswitch"
import Tab from './components/tab';
import CollapsibleCard from "./components/collapsiblecard"
// const LINKING_ERROR =
//   `The package 'react-native-zoi-components' doesn't seem to be linked. Make sure: \n\n` +
//   Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
//   '- You rebuilt the app after installing the package\n' +
//   '- You are not using Expo Go\n';

// type ZoiComponentsProps = {
//   color: string;
//   style: ViewStyle;
// };

// const ComponentName = 'ZoiComponentsView';
// const TextComponentName = 'Textbox';

// export const ZoiComponentsView =
//   UIManager.getViewManagerConfig(ComponentName) != null
//     ? requireNativeComponent<ZoiComponentsProps>(ComponentName)
//     : () => {
//       throw new Error(LINKING_ERROR);
//     };

export const ZTextBox = (props) => {
  return <TextBoxComponent {...props}></TextBoxComponent>
}
export const ZCheckbox = (props) => {
  // console.log(props)
  return <CheckboxComponent {...props}></CheckboxComponent>
}
export const ZToggle = (props) => {
  return <ToggleSwitch {...props}></ToggleSwitch>
}
export const ZButton = (props) => {
  return <Button {...props}></Button>
}
export const ZRadioButton = (props) => {
  return <RadioButton {...props}></RadioButton>
}
export const ZLoader = (props) => {
  return <ZLoader {...props}></ZLoader>
}
export const ZTab = (props) => {
  return <Tab {...props}></Tab>
}
export const ZCollapsibleCard = (props) => {
  return <CollapsibleCard {...props}></CollapsibleCard>
}