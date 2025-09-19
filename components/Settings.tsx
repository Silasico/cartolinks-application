import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EvilIcons from "@expo/vector-icons/build/EvilIcons";

const settingsOptions = [
  {
    label: "Size",
    options: ["1080 * 1920 px", "720 * 1280 px", "480 * 800 px"],
  },
  {
    label: "Category",
    options: [
      "Foods and Beverage",
      "Technology",
      "Nature",
      "Sports",
      "Animals",
    ],
  },
];

const Settings = () => {
  const [selectedSize, setSelectedSize] = useState<string>(
    settingsOptions[0].options[0]
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    settingsOptions[1].options[0]
  );
  const [activeSettingModal, setActiveSettingModal] = useState<number | null>(
    null
  );

  return (
    <View className="gap-2">
      <Text className="text-gray-500 text-[16px] font-medium">Settings</Text>
      <View className="p-4  bg-[#222222] rounded-[8px]">
        {settingsOptions.map((setting, index) => {
          return (
            <TouchableOpacity
              className={`flex justify-between flex-row items-center ${index < settingsOptions.length - 1 ? "border-white border-b-[0.3px] pb-2 mb-2 " : ""} z-1 `}
              key={index}
              onPress={() => setActiveSettingModal(index)}
            >
              <Text className="text-white">{setting.label}</Text>
              <View className="flex flex-row items-center">
                <Text className="text-gray-400">
                  {setting.label === "Size" ? selectedSize : selectedCategory}
                </Text>
                <EvilIcons name="chevron-right" size={24} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      {activeSettingModal !== null && (
        <View className={`absolute bottom-0 right-0 bg-[#FFFFFF] p-4 z-100 gap-2`}>
          {settingsOptions[activeSettingModal].options.map(
            (option, optionIndex) => (
              <TouchableOpacity
                key={optionIndex}
                onPress={() => {
                  if (activeSettingModal === 0) {
                    setSelectedSize(option);
                  } else {
                    setSelectedCategory(option);
                  }
                  setActiveSettingModal(null);
                }}
              >
                <Text className="text-[16px] text-black font-medium ">
                  {option}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>
      )}
    </View>
  );
};

export default Settings;
