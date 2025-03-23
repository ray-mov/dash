import { Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInScreen from "./screens/auth/SignInScreen";
import StartScreen from "./screens/startups/StartScreen";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <SignInScreen /> */}
      <StartScreen />
    </SafeAreaView>
  );
}
