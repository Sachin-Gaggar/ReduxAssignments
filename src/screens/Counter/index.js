import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  increaseCount,
  decreaseCount,
  increaseByValue,
} from "../../modules/counter";

class Counter extends Component {
  render() {
    const { increaseCount, decreaseCount, incrementByValue } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title={"Increment"} onPress={increaseCount} />
        <Text>{this.props.count}</Text>
        <Button title={"Decrement"} onPress={decreaseCount} />
        <Button title={"Increment By 5"} onPress={() => incrementByValue(5)} />
      </View>
    );
  }
}

// To Get State from the Global Store
// state = Global State
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { increaseCount, decreaseCount, incrementByValue: increaseByValue },
    dispatch
  );
};
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
