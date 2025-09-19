import EvilIcons from "@expo/vector-icons/build/EvilIcons";
import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { pickImage } from "../utils/Utils";
import Fontisto from "@expo/vector-icons/build/Fontisto";

type Props = {};

type PosterType = {
  id: number;
  image: any;
  label: string;
};

const posterImages: PosterType[] = [
  {
    id: 1,
    image: require("../assets/images/poster-1.png"),
    label: "Poster 1",
  },
  {
    id: 2,
    image: require("../assets/images/poster-2.png"),
    label: "Poster 2",
  },
  {
    id: 3,
    image: require("../assets/images/poster-3.png"),
    label: "Poster 3",
  },
  {
    id: 4,
    image: require("../assets/images/poster-4.png"),
    label: "Poster 4",
  },
  {
    id: 5,
    image: require("../assets/images/poster-1.png"),
    label: "Poster 5",
  },
  {
    id: 6,
    image: require("../assets/images/poster-2.png"),
    label: "Poster 6",
  },
  {
    id: 7,
    image: require("../assets/images/poster-3.png"),
    label: "Poster 7",
  },
  {
    id: 8,
    image: require("../assets/images/poster-4.png"),
    label: "Poster 8",
  },
];

const PosterSection = (props: Props) => {
  const [activePoster, setActivePoster] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handlepickImage = async () => {
    const imageUri = await pickImage();
    setSelectedImage(imageUri || null);
  };

  return (
    <View className="gap-10">
      <Text className="text-[24px] text-white font-bold">
        What type of posters do you want to create?
      </Text>

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="gap-2"
        >
          {posterImages.map((poster: PosterType, index) => (
            <TouchableOpacity
              key={index}
              className={`item-center overflow-hidden rounded-lg`}
              onPress={() => setActivePoster(poster.id)}
            >
              <Image
                source={poster.image}
                className={`w-[70px] h-[90px] rounded-lg ${activePoster === poster.id ? "border-white border-[3px]" : ""} `}
                resizeMode="stretch"
              />
              <Text
                className={`text-white absolute bottom-0 left-0 text-center w-full p-1 text-[12px] ${activePoster === poster.id ? "bg-red-700" : "bg-slate-700"}`}
              >
                {poster.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View className="bg-[#222222] p-4 rounded-lg h-[200px] flex flex-row">
        <TextInput
          placeholder="Type your prompt here..."
          placeholderTextColor={"#6B7280"}
          className=" h-full align-top text-white text-[16px] flex-1"
          multiline
        />
        <View className="self-end items-end gap-4">
          {selectedImage && (
            <TouchableOpacity onPress={() => setSelectedImage(null)}>
              <Image
                source={{ uri: selectedImage }}
                className="w-10 h-10"
                resizeMode="cover"
              />
              <View className="absolute top-[-5px] right-[-5px] bg-[#222222] p-1 rounded-full">
                <Fontisto name="close" size={12} color="red" />
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={handlepickImage}>
            <EvilIcons name="image" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PosterSection;
