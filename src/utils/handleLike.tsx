import AsyncStorage from '@react-native-async-storage/async-storage';

export const handleLike = id => {
  let storeData = async () => {
    try {
      const artworkArray = await AsyncStorage.getItem('likesArray');
      if (artworkArray !== null) {
        // We have data!!
        let parsedArray = JSON.parse(artworkArray);
        parsedArray.push(id);
        await AsyncStorage.setItem('likesArray', JSON.stringify(parsedArray));
      } else {
        await AsyncStorage.setItem('likesArray', JSON.stringify([id]));
      }
    } catch (error) {
      console.log(error);
    }
  };
  storeData();
};
