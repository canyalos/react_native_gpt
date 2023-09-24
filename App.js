const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Tstcar from "./screens/Tstcar";
import Tstcarek from "./screens/Tstcarek";
import Telefon from "./screens/Telefon";
import Media from "./screens/Media";
import Kamera from "./screens/Kamera";
import Ayarlar from "./screens/Ayarlar";
import Tstgpt from "./screens/Tstgpt";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Tstcar"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Tstcar"
              component={Tstcar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Tstcarek"
              component={Tstcarek}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Telefon"
              component={Telefon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Media"
              component={Media}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Kamera"
              component={Kamera}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ayarlar"
              component={Ayarlar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Tstgpt"
              component={Tstgpt}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
