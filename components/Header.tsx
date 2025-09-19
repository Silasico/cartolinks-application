import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type Props = {};

type HeaderType = {
  id: number;
  title: string;
};

const header: HeaderType[] = [
  {
    id: 1,
    title: "Smart script",
  },
  {
    id: 2,
    title: "Advanced script",
  },
];

const Header: React.FC<Props> = (props) => {
  const [activeHeader, setActiveHeader] = useState<number>(1);
  return (
    <View className="pt-5">
      <AntDesign name="close" size={24} color="#FFFFFF" />
      <View className="flex flex-row justify-between">
        {header.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="flex flex-1 item-center pt-5 gap-2"
            onPress={() => setActiveHeader(item.id)}
          >
            <Text
              className={`${item.id == activeHeader ? "text-white" : "text-gray-500"} text-center ${activeHeader == item.id ? "font-bold" : "font-normal"} text-[18px]`}
            >
              {item.title}
            </Text>
            {activeHeader == item.id && (
              <LinearGradient
                className="w-full h-1 "
                colors={["#179CD4", "#7459FB"]}
                start={{ x: 0, y: 0 }} // left
                end={{ x: 1, y: 0 }}
              ></LinearGradient>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Header;
