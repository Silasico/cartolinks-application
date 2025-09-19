import { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import "./global.css";
import { StatusBar } from "expo-status-bar";
import Button from "./components/Button";
import Settings from "./components/Settings";
import PosterSection from "./components/PosterSection";
import { Platform, ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native";

const App: FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-black px-5 gap-10 mb-0 pb-0">
      <Header />
      <KeyboardAvoidingView behavior="padding" className="flex-1 pb-0">
        <ScrollView contentContainerClassName="gap-10 pb-4">
          <PosterSection />
          <Settings />
          <Button title="Generate" />
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default App;
