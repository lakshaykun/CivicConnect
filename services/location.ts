import * as Location from "expo-location";
import { Alert } from "react-native";

const getCurrentLocation = async (): Promise<{ latitude: number; longitude: number } | null> => {
  try {
    // Request permission
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission denied", "Enable location to use this feature.");
      return null;
    }

    // Get location
    const location = await Location.getCurrentPositionAsync({});
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  } catch (error) {
    console.error("Error getting location:", error);
    return null;
  }
};


const getAddressFromCoords = async (latitude: number, longitude: number) => {
  try {
    const [address] = await Location.reverseGeocodeAsync({ latitude, longitude });
    return `${address.name || ""} ${address.street || ""}, ${address.city || ""}`;
  } catch (error) {
    console.error("Error reverse geocoding:", error);
    return "Unknown Location";
  }
};


export const handleDetectLocation = async (setLocation: (location: string) => void) => {
  const coords = await getCurrentLocation();
  if (coords) {
    const address = await getAddressFromCoords(coords.latitude, coords.longitude);
    setLocation(address);
  }
};
