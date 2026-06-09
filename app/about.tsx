import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function About() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 12 }}>About page</Text>
      <Button title="Go back" onPress={() => router.back()} />
    </View>
  );
}

export const options = {
  headerShown: false,
};
