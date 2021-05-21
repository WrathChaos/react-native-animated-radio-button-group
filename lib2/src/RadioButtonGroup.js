import PropTypes from "prop-types";
import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import RadioButton from "react-native-animated-radio-button";

import styles, {
  _container,
  _eachContainer,
} from "./RadioButtonGroup.style.js";

export default class RadioButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptionId: this.props.initial,
    };
  }

  render() {
    const { data, horizontal } = this.props;
    return (
      <View style={_container(horizontal)}>
        {data &&
          data.map((item) => {
            const _isActive = item.id === this.state.selectedOptionId;
            return (
              <View style={_eachContainer(horizontal)} key={item.id}>
                <RadioButton
                  key={item.id}
                  {...item}
                  animation="bounceIn"
                  active={_isActive}
                  innerColor={item.color}
                  outerColor={item.color}
                  disableBuiltinStateManagement
                  onPress={() => {
                    this.setState({ selectedOptionId: item.id });
                    this.props.onPress && this.props.onPress(item);
                    this.props.onChange && this.props.onChange(item);
                  }}
                />
              </View>
            );
          })}
      </View>
    );
  }
}

RadioButtonGroup.propTypes = {
  initial: PropTypes.number,
};

RadioButtonGroup.defaultProps = {
  initial: 0,
};
