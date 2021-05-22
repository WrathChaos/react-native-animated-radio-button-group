import React, { useState } from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import RadioButtonGroup, {
  IRadioButton,
} from "react-native-animated-radio-button-group";

const App = () => {
  const [item, setItem] = useState<IRadioButton>({
    id: 2,
    outerStyle: {
      width: 50,
      height: 50,
      borderColor: "#F6800F",
      borderRadius: 25,
    },
    innerStyle: {
      borderRadius: 25,
    },
    color: "#F6800F",
  });

  const data: Array<IRadioButton> = [
    {
      id: 0,
      outerStyle: {
        width: 50,
        height: 50,
        borderColor: "#FF0004",
        borderRadius: 25,
      },
      innerStyle: {
        borderRadius: 25,
      },
      color: "#FF0004",
    },
    {
      id: 1,
      outerStyle: {
        width: 50,
        height: 50,
        borderColor: "#FB4009",
        borderRadius: 25,
      },
      innerStyle: {
        borderRadius: 25,
      },
      color: "#FB4009",
    },
    {
      id: 2,
      outerStyle: {
        width: 50,
        height: 50,
        borderColor: "#F6800F",
        borderRadius: 25,
      },
      innerStyle: {
        borderRadius: 25,
      },
      color: "#F6800F",
    },
    {
      id: 4,
      outerStyle: {
        width: 50,
        height: 50,
        borderColor: "#F4A012",
        borderRadius: 25,
      },
      innerStyle: {
        borderRadius: 25,
      },
      color: "#F4A012",
    },
    {
      id: 5,
      outerStyle: {
        width: 50,
        height: 50,
        borderColor: "#F0E017",
        borderRadius: 25,
      },
      innerStyle: {
        borderRadius: 25,
      },
      color: "#F0E017",
    },
  ];

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          marginTop: "30%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RadioButtonGroup
          initial={2}
          data={data}
          horizontal
          onChange={(item) => setItem(item)}
          onPress={() => {}}
        />
        <View style={{ margin: 16, top: "50%" }}>
          <Text style={{ fontWeight: "bold" }}>{`ID: ${item.id}`}</Text>
          <View>
            <Text style={{ fontWeight: "bold" }}>JSON Whole Item:</Text>
            <Text>{JSON.stringify(item)}</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
