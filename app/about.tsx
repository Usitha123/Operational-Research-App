import { supabase } from "@/utils/supabase"; // Adjust path if needed
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  View,
} from "react-native";

type User = {
  id: number;
  name: string;
};

export default function About() {
  const router = useRouter();

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("test")
      .select("id, name");

    if (error) {
      console.log("Supabase Error:", error.message);
    } else {
      setUsers(data || []);
      console.log("Data:", data);
    }

    setLoading(false);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Users from Supabase
      </Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 12,
                marginBottom: 10,
                borderWidth: 1,
                borderRadius: 8,
              }}
            >
              <Text>ID: {item.id}</Text>
              <Text>Name: {item.name}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={{ textAlign: "center" }}>
              No data found
            </Text>
          }
        />
      )}

      <Button title="Refresh Data" onPress={fetchUsers} />

      <View style={{ marginTop: 10 }}>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    </View>
  );
}

export const options = {
  headerShown: false,
};