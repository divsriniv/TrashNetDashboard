const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Landing from "./screens/Landing";
import LoginPage from "./screens/LoginPage";
import BrandDashboard from "./screens/BrandDashboard";
import FundLedger from "./screens/FundLedger";
import Ledger from "./screens/Ledger";
import KYC from "./screens/KYC";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BrandDashboard"
              component={BrandDashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FundLedger"
              component={FundLedger}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ledger"
              component={Ledger}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KYC"
              component={KYC}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
