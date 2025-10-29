// context/AuthContext.tsx
import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { User } from "@/schema";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  userLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) setUser(JSON.parse(storedUser));
      setUserLoading(false);
    };
    checkUser();
  }, []);

  const login = async (email: string, password: string) => {
    setUserLoading(true);
    try {
      // Replace this mock logic with your API or Firebase call
      if (email && password) {
        const userData = { name: "Test User", email };
        await AsyncStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        router.replace("/user/dashboard");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error: any) {
      console.log("Login Error:", error);
    } finally {
      setUserLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setUserLoading(true);
    try {
      const newUser = { name, email };
      await AsyncStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      router.replace("/user/dashboard");
    } catch (error: any) {
      console.log("Signup Error:", error);
    } finally {
      setUserLoading(false);
    }
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user");
    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, userLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
