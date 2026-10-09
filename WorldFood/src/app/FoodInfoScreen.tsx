import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";

export default function FoodInfoScreen() {
  const { name, image, description } = useLocalSearchParams<{
    name?: string;
    image?: string;
    description?: string;
  }>();

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: name || "Food Details" }} />
      
      {image && (
        <Image 
          source={{ uri: image }} 
          style={styles.image} 
          resizeMode="cover" 
        />
      )}

      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010020",
  },
  image: {
    width: "100%",
    height: 250,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#dddddd",
  },
});
