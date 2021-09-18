import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import {
  Input,
  Button,
  Text,
  SocialIcon,
  Icon,
  Chip,
} from "react-native-elements";
import firebase from "../configs/firebase/fireBaseConfig";
import { globalStyles } from "../configs/GlobalStyle";
import { View as MotiView, Text as MotiText, motify } from "moti";
import colors from "../configs/colors";
const SignUpForm = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const signUp = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((value) =>
        dbRef.child("Users").child(value.user.uid).child("User Data").set({
          username: userName,
          Email: value.user.email,
          ID: value.user.uid,
        })
      )
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            borderBottomColor: colors.radOrange,
            borderBottomWidth: 3,
            paddingBottom: 17,
            elevation: 10,
          }}
        >
          <Text style={styles.formHeader}>Join us</Text>
        </View>
        <ScrollView scrollEnabled>
          <MotiView
            from={{ translateX: 100, opacity: 0 }}
            transition={{ type: "spring", delay: 600, duration: 1000 }}
            animate={{ translateX: 0, opacity: 1 }}
            style={{ marginTop: 10 }}
          >
            <Input
              placeholder="userName123"
              textContentType="username"
              inputContainerStyle={{
                borderBottomWidth: 0,
              }}
              inputStyle={{ ...globalStyles.input }}
              value={userName}
              onChangeText={setUserName}
              leftIcon={
                <Icon
                  type="material"
                  name="person"
                  size={23}
                  color={colors.radOrange}
                />
              }
            />
          </MotiView>
          <MotiView
            from={{ translateX: 100, opacity: 0 }}
            transition={{ type: "spring", delay: 700, duration: 1000 }}
            animate={{ translateX: 0, opacity: 1 }}
          >
            <Input
              placeholder="  email@domain.com"
              textContentType="emailAddress"
              inputContainerStyle={{ borderBottomWidth: 0 }}
              inputStyle={globalStyles.input}
              labelStyle={globalStyles.label}
              value={email}
              onChangeText={setEmail}
              leftIcon={
                <Icon
                  type="material"
                  name="email"
                  size={23}
                  color={colors.radOrange}
                  // color={isActive === true ? colors.radGreen : "black"}
                />
              }
            />
          </MotiView>
          <MotiView
            from={{ translateX: 100, opacity: 0 }}
            transition={{ type: "spring", delay: 800, duration: 1000 }}
            animate={{ translateX: 0, opacity: 1 }}
          >
            <Input
              placeholder="  ***"
              textContentType="password"
              inputContainerStyle={{ borderBottomWidth: 0 }}
              inputStyle={globalStyles.input}
              labelStyle={globalStyles.label}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              leftIcon={
                <Icon
                  name="lock"
                  type="material"
                  size={23}
                  color={colors.radOrange} // color={isActive === true ? colors.radGreen : "black"}
                />
              }
            />
          </MotiView>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <MotiView
            from={{ translateX: 100, opacity: 0 }}
            transition={{ type: "spring", delay: 900, duration: 1000 }}
            animate={{ translateX: 0, opacity: 1 }}
          >
            <TouchableOpacity
              style={styles.forgotView}
              onPress={() => navigation.navigate("LOGIN")}
            >
              <Text style={styles.forgotText}>forgot Password ?</Text>
            </TouchableOpacity>
            <Chip
              title="submit"
              type="solid"
              titleStyle={globalStyles.buttonTitle}
              buttonStyle={{ backgroundColor: colors.radOrange }}
              containerStyle={styles.button}
              onPress={() => signUp()}
            />
          </MotiView>
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.radBlack,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    width: "98%",
    alignSelf: "center",
  },
  button: {
    width: "50%",
    alignSelf: "center",
    marginBottom: 20,
  },
  formHeader: {
    color: colors.radWhite,
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "AbrilFatface-Regular",
    textShadowColor: "#000",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
  },
  forgotView: {
    alignSelf: "center",
    marginBottom: 10,
  },
  forgotText: {
    color: colors.radWhite,
    fontFamily: "AbrilFatface-Regular",
    textShadowColor: "#000",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  errorText: {
    color: "red",
    alignSelf: "center",
    marginBottom: 2,
    fontFamily: "AbrilFatface-Regular",
  },
  iconConfig: {
    elevation: 10,
  },
});
export default SignUpForm;
