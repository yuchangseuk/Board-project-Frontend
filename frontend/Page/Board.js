import React, { useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  Switch,
} from "react-native";

const Header = (props) => {
  console.log("Header : ", props);
  return <Text>{props.title}</Text>;
};

function BoardList() {
  return (
    <View styles={styles.container}>
      <Header title="헤더정보" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BoardList;
