// components/ProtectedRoute.tsx
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { router } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, userLoading } = useAuth();

  useEffect(() => {
    if (!userLoading && !user) {
      router.replace("/login");
    }
  }, [user, userLoading]);

  if (userLoading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );

  return <>{children}</>;
}
