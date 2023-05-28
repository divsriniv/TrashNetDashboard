import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPage}>
      <View style={styles.background} />
      <View style={styles.loginOutline} />
      <Image
        style={styles.asset64x1}
        resizeMode="cover"
        source={require("../assets/asset-64x-1.png")}
      />
      <View style={styles.loginPageChild} />
      <Pressable
        style={styles.login}
        onPress={() => navigation.navigate("BrandDashboard")}
      >
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
      </Pressable>
      <Text style={[styles.forgotPassword, styles.login1Typo]}>
        Forgot Password?
      </Text>
      <Image
        style={styles.loginPageItem}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.outlineUser2}
        resizeMode="cover"
        source={require("../assets/outline--user2.png")}
      />
      <View style={[styles.loginPageInner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.username, styles.usernameFlexBox]}>Username</Text>
      <Text style={[styles.password, styles.usernameFlexBox]}>Password</Text>
      <Text style={[styles.username1, styles.usernameFlexBox]}>Username</Text>
      <Text style={[styles.password1, styles.usernameFlexBox]}>Password</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  login1Typo: {
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  rectangleViewLayout: {
    height: 42,
    width: 285,
    borderWidth: 2,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_3xs,
    left: 504,
    borderColor: "#15bb66",
    borderStyle: "solid",
    position: "absolute",
  },
  usernameFlexBox: {
    textAlign: "left",
    color: Color.black,
    height: 28,
    width: 135,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  background: {
    top: 0,
    left: 0,
    borderColor: "#000",
    borderWidth: 4,
    width: 1366,
    borderStyle: "solid",
    position: "absolute",
    height: 769,
    backgroundColor: Color.white,
  },
  loginOutline: {
    top: 40,
    left: 422,
    borderRadius: Border.br_11xl,
    borderWidth: 5,
    width: 489,
    height: 690,
    borderColor: "#15bb66",
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  asset64x1: {
    top: 66,
    left: 483,
    width: 365,
    height: 120,
    position: "absolute",
  },
  loginPageChild: {
    top: 531,
    left: 501,
    borderRadius: Border.br_16xl_5,
    backgroundColor: Color.mediumseagreen_100,
    width: 101,
    height: 36,
    position: "absolute",
  },
  login1: {
    color: Color.white,
    width: 135,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  login: {
    left: 485,
    top: 535,
    position: "absolute",
  },
  forgotPassword: {
    left: 646,
    color: Color.mediumseagreen_100,
    width: 147,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: 535,
    position: "absolute",
  },
  loginPageItem: {
    top: 186,
    left: 595,
    width: 138,
    height: 138,
    position: "absolute",
  },
  outlineUser2: {
    top: 176,
    left: 585,
    width: 158,
    height: 158,
    position: "absolute",
  },
  loginPageInner: {
    top: 391,
  },
  rectangleView: {
    top: 473,
  },
  username: {
    top: 398,
    fontFamily: FontFamily.interThinItalic,
    fontWeight: "100",
    fontStyle: "italic",
    fontSize: FontSize.size_sm,
    left: 511,
    textAlign: "left",
    color: Color.black,
  },
  password: {
    top: 480,
    fontFamily: FontFamily.interThinItalic,
    fontWeight: "100",
    fontStyle: "italic",
    fontSize: FontSize.size_sm,
    left: 511,
    textAlign: "left",
    color: Color.black,
  },
  username1: {
    top: 363,
    textAlign: "left",
    color: Color.black,
    left: 504,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  password1: {
    top: 445,
    textAlign: "left",
    color: Color.black,
    left: 504,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  loginPage: {
    flex: 1,
    width: "100%",
    height: 769,
    backgroundColor: Color.white,
  },
});

export default LoginPage;
