import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: 12 }}>
        Operational Research
      </Text>
      <Link href={"/about" as any}>Open About page</Link>
    </View>
  );
}
