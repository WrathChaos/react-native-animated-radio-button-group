import React, { useState } from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import RadioButtonGroup from "react-native-animated-radio-button-group";

const App = () => {
  const [item, setItem] = useState({
    id: 2,
    text: "Gaming",
    color: "#F6800F",
    size: 25
  });

  const data = [
    { id: 0, text: "Cinema", color: "#FF0004", size: 25 },
    { id: 1, text: "Theatre", color: "#FB4009", size: 25 },
    { id: 2, text: "Gaming", color: "#F6800F", size: 25 },
    { id: 3, text: "Travelling", color: "#F4A012", size: 25 },
    { id: 4, text: "Sport", color: "#F0E017", size: 25 }
  ];
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          marginTop: "30%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <RadioButtonGroup
          initial={2}
          data={data}
          onChange={item => setItem(item)}
        />
        <View style={{ margin: 16, top: "50%" }}>
          <Text>{`ID: ${item.id}`}</Text>
          <Text>{`Text: ${item.text}`}</Text>
          <Text>{`Color: ${item.color}`}</Text>
          <Text>{`Size: ${item.size}`}</Text>
          <View>
            <Text>{`JSON Whole Item: ${JSON.stringify(item)}`}</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
