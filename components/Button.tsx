import React, { FC } from "react";
import { Image, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
  btnStylesClassName?: React.ComponentProps<typeof TouchableOpacity>['className'];
};

const Button: FC<Props> = ({ title, onPress, btnStylesClassName }) => {
  return (
    <TouchableOpacity
      className={`flex flex-row items-center justify-center bg-white px-4 py-4 rounded-lg ${btnStylesClassName}`}
      onPress={onPress}
    >
      <Image
        source={require("../assets/icons/ai-icon.png")}
        className="w-5 h-5 mr-2"
      />
      <Text className="text-black text-[16px] text-center font-medium">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
