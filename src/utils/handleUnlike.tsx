import AsyncStorage from '@react-native-async-storage/async-storage';

export const handleUnlike = id => {
  let storeData = async () => {
    try {
      const artworkArray = await AsyncStorage.getItem('likesArray');
      const arrayParsed = JSON.parse(artworkArray);
      const newArray = arrayParsed.filter(item => item !== id);
      await AsyncStorage.setItem('likesArray', JSON.stringify(newArray));
    } catch (error) {
      console.log(error);
    }
  };
  storeData();
};
