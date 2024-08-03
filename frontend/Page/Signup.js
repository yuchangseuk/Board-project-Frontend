import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

function Signup() {
  // 상태 관리 (State Management)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");

  // 서버로 데이터를 전송하는 함수
  const handleSubmit = async () => {
    console.log("ㅗㅗ");
    // /PI 엔드포인트와 데이터를 정의
    const url = "http://192.168.219.106:8000/auth/user";
    const data = {
      username: email,
      name: name,
      password: password,
      userType: userType,
    };
    console.log(JSON.stringify(data));
    try {
      console.log("ㅋㅋ");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        console.log("하하");
      } else {
        console.log("회원실");
        console.error("회원가입 실패:", response.statusText);
      }
    } catch (error) {
      console.log("서버 오류:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="이메일"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="이름"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="역할"
        value={userType}
        onChangeText={setUserType}
      />
      <Button title="회원가입" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default Signup;
