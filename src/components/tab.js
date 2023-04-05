import React from "react";
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { SwipeContainer } from "./swipe";
export const MContext = React.createContext()
class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.scrollTab = React.createRef(null)
        this.state = {
            selectionColor: '#af762e',
            getSelectionMode: 0,
            data: []
        }
    }
    componentDidMount() {
        this.setState({ getSelectionMode: this.props.selectionMode, data: this.props.data,selectionColor:this.props.selectionColor })
    }
    componentDidUpdate(prev) {
        const { data } = this.props;
        if (prev.data != data) {
            this.setState({ data: data })
        }
    }
    updatedSwitchData = (val) => {

        this.setState({ getSelectionMode: val })
    }
    onSwipeLeft = async () => {
        if (Math.sign(this.state.getSelectionMode) != -1 && this.props.data.length - 1 >= this.state.getSelectionMode + 1) {
            await this.setState({ getSelectionMode: this.state.getSelectionMode + 1 })
            this.scrollTab.scrollTo({
                x: this.state.data[this.state.getSelectionMode]?.scroll,
                y: 0,
                animated: true,
            });
        }
    }
    onSwipeRight = async () => {

        if (Math.sign(this.state.getSelectionMode - 1) != -1 && this.props.data.length - 1 >= this.state.getSelectionMode - 1) {
            await this.setState({ getSelectionMode: this.state.getSelectionMode - 1 })
            this.scrollTab.scrollTo({
                x: this.state.data[this.state.getSelectionMode]?.scroll,
                y: 0,
                animated: true,
            });
        }
    }
    render() {
        let addScroll = this.props.data

        return (

            <SwipeContainer onSwipeLeft={this.onSwipeLeft} onSwipeRight={this.onSwipeRight} containerStyle={this.props.containerStyle}>
                <View style={{ height: 50 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} ref={(ref) => this.scrollTab = ref}>
                        <View
                            style={[{
                                height: 44,
                                width: "100%",
                                backgroundColor: 'white',
                                borderRadius: 0,
                                overflow: "scroll",
                                borderBottomWidth: 1,
                                borderBottomColor: this.state.selectionColor,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                // padding: 2,
                            }, { ...this.state.tabContainerStyle }]}>
                            {this.props.data.map((item, index) => {
                                return <View style={{ flex: 1, flexDirection: "column" }} key={index} onLayout={(event) => {
                                    const layout = event.nativeEvent.layout;
                                    addScroll[index] = {
                                        ...addScroll[index],
                                        scroll: layout.x
                                    }
                                    this.setState({ data: addScroll })

                                }}>
                                    <TouchableOpacity
                                        activeOpacity={index}
                                        onPress={() => this.updatedSwitchData(index)}
                                        style={[{
                                            flex: 1,
                                            borderBottomWidth: 2,
                                            minWidth: 150,
                                            borderBottomColor: this.state.getSelectionMode == index ? this.state.selectionColor : "white",
                                            // backgroundColor: this.state.getSelectionMode == index ? this.state.selectionColor : 'white',
                                            borderRadius: 0,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }, { ...this.props.tabStyle }]}>
                                        <Text
                                            style={{
                                                color: this.state.selectionColor,
                                            }}>
                                            {item.text}
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            })}
                        </View>
                    </ScrollView>
                </View>
                <MContext.Provider value={this.props.data[this.state.getSelectionMode]}>
                    {this.props.data[this.state.getSelectionMode]?.children}
                </MContext.Provider>
            </SwipeContainer>

        )
    }
}
export default Tab