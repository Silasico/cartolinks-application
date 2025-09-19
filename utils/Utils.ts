import * as ImagePicker from "expo-image-picker";

export const pickImage: () => Promise<string | undefined> = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      return result.assets[0].uri;
    }
  } catch (error) {
    console.log("Error picking image:", error);
  }
};
