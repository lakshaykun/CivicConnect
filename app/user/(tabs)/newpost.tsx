// app/create-post.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { handleDetectLocation } from "@/services/location";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState<string | null>(null);
  const [mediaUri, setMediaUri] = useState<string | null>(null);

  const handlePost = () => {
    console.log({ title, description, location, mediaUri });
  };

  const handleAttachMedia = async () => {
    // Ask for camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Camera access is required to take a photo.");
      return;
    }

    // Open camera
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (!result.canceled) {
      setMediaUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Title Input */}
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />

        {/* Description Input */}
        <TextInput
          placeholder="Describe the issue..."
          value={description}
          onChangeText={setDescription}
          style={[styles.input, styles.textArea]}
          multiline
        />

        {/* Location Selector */}
        <TouchableOpacity style={styles.optionButton} onPress={handleDetectLocation.bind(null, setLocation)}>
          <Ionicons name="location-outline" size={20} color="#5f4c9a" />
          <Text style={styles.optionText}>{location || "Detect Location"}</Text>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>

        {/* Attach Media */}
        <TouchableOpacity
          style={styles.optionButton}
          onPress={handleAttachMedia}
        >
          <Ionicons name="camera-outline" size={20} color="#5f4c9a" />
          <Text style={styles.optionText}>
            {mediaUri ? "Media Attached" : "Attach Media"}
          </Text>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>

        {/* Show attached media */}
        {mediaUri && (
          <Image
            source={{ uri: mediaUri }}
            style={{ width: "100%", height: 200, borderRadius: 8, marginBottom: 16 }}
          />
        )}

        {/* Spacer so FAB doesn't cover content */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab} onPress={handlePost}>
        <Ionicons name="paper-plane" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: "#000",
  },
  textArea: { height: 120, textAlignVertical: "top" },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#fafafa",
  },
  optionText: { flex: 1, marginLeft: 8, color: "#5f4c9a", fontSize: 16 },
  fab: {
    backgroundColor: "#2563EB",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 100,
    right: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
