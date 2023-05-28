import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Landing = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.landing, styles.landingLayout1]}>
      <View style={[styles.desktop1, styles.landingLayout1]} />
      <Text style={styles.makingNetZero}>Making Net Zero a Reality</Text>
      <ImageBackground
        style={styles.asset64x1}
        resizeMode="cover"
        source={require("../assets/asset64x1.png")}
      />
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/68482771.png")}
      />
      <Pressable
        style={[styles.landingChild, styles.landingLayout]}
        onPress={() => navigation.navigate("LoginPage")}
      />
      <Pressable
        style={[styles.landingItem, styles.landingLayout]}
        onPress={() => navigation.navigate("Ledger")}
      />
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <Text style={[styles.viewLedger, styles.loginTypo]}>View Ledger</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  landingLayout1: {
    height: 769,
    backgroundColor: Color.white,
  },
  landingLayout: {
    height: 60,
    backgroundColor: Color.mediumseagreen_100,
    borderRadius: Border.br_16xl_5,
    top: 486,
    position: "absolute",
  },
  loginTypo: {
    height: 28,
    justifyContent: "center",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    top: 502,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  desktop1: {
    top: 0,
    left: 0,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 4,
    width: 1366,
    position: "absolute",
  },
  makingNetZero: {
    top: 316,
    fontSize: 54,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
    textAlign: "left",
    width: 453,
    height: 137,
    alignItems: "center",
    display: "flex",
    left: 60,
    position: "absolute",
  },
  asset64x1: {
    top: 34,
    left: 33,
    width: 222,
    height: 63,
    position: "absolute",
  },
  icon: {
    top: 171,
    left: 667,
    width: 639,
    height: 427,
    position: "absolute",
  },
  landingChild: {
    width: 152,
    left: 60,
    backgroundColor: Color.mediumseagreen_100,
    borderRadius: Border.br_16xl_5,
    top: 486,
  },
  landingItem: {
    left: 245,
    width: 203,
  },
  login: {
    left: 68,
    width: 135,
  },
  viewLedger: {
    left: 269,
    width: 160,
  },
  landing: {
    flex: 1,
    width: "100%",
  },
});

export default Landing;
