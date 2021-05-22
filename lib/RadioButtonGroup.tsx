import * as React from "react";
import { View, ViewStyle } from "react-native";
import RadioButton, {
  IRadioButtonProps,
} from "react-native-animated-radio-button";
/**
 * ? Local Imports
 */
import { _container, _eachContainer } from "./RadioButtonGroup.style";

export type IRadioButton = {
  id: number;
  color: string;
  outerStyle?: ViewStyle;
  innerStyle?: ViewStyle;
};

export interface IRadioButtonGroupProps extends IRadioButtonProps {
  initial: number;
  horizontal?: boolean;
  data: Array<IRadioButton>;
  onChange: (selectedItem: IRadioButton) => void;
}

interface IState {
  selectedOptionId: number;
}

export default class RadioButtonGroup extends React.Component<
  IRadioButtonGroupProps,
  IState
> {
  constructor(props: IRadioButtonGroupProps) {
    super(props);
    this.state = {
      selectedOptionId: props.initial,
    };
  }

  render() {
    const { data, horizontal = false } = this.props;
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
                  isActive={_isActive}
                  innerBackgroundColor={item.color}
                  innerContainerStyle={item.innerStyle}
                  style={item.outerStyle}
                  onPress={() => {
                    this.setState({ selectedOptionId: item.id }, () => {
                      this.props.onChange && this.props.onChange(item);
                    });
                  }}
                />
              </View>
            );
          })}
      </View>
    );
  }
}
