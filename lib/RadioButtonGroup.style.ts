import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
}
export const _eachContainer = (horizontal: boolean): ViewStyle => ({
  marginTop: horizontal ? 0 : 8,
  marginLeft: horizontal ? 12 : 0,
});

export const _container = (horizontal: boolean): ViewStyle => ({
  flexDirection: horizontal ? "row" : "column",
});

export default StyleSheet.create<Style>({
  container: {},
});
