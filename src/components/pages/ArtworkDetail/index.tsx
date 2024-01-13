import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {handleLike} from '../../../utils/handleLike';
import {handleUnlike} from '../../../utils/handleUnlike';
import {useFetchArtwork} from '../../../hooks/useFetchArtwork';
import {FullArtwork} from '../../molecules/FullArtwork/index';

export function ArtworkDetailScreen({route}) {
  const {id} = route.params;
  const {data, isLoading} = useFetchArtwork(id);
  const [likesArrayState, setLikesArrayState] = useState('');

  useEffect(() => {
    let retrieveData = async () => {
      try {
        let stringLikes = await AsyncStorage.getItem('likesArray');
        setLikesArrayState(stringLikes);
      } catch (error) {
        console.log(error);
      }
    };
    retrieveData();
  }, []);

  return (
    <View>
      {/* <Text>{`Artwork Detail Screen ${id}`}</Text> */}
      <FullArtwork
        id={data?.data?.id}
        title={data?.data?.title}
        author={data?.data?.artist_title}
        description={data?.data?.medium_display}
        imageUrl={`https://www.artic.edu/iiif/2/${data?.data?.image_id}/full/843,/0/default.jpg`}
        isLiked={likesArrayState?.includes(id)}
      />
      {/* <Button title="Like" onPress={handleLike(id)} /> */}
    </View>
  );
}
