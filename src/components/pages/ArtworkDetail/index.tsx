import React from 'react';
import {View} from 'react-native';
import {generateImageUrl} from '../../../constants';
import {useFetchArtwork} from '../../../hooks/useFetchArtwork';
import {useGetLikesFromStorage} from '../../../hooks/useGetLikesFromStorage';
import {FullArtwork} from '../../molecules/FullArtwork/index';

export const ArtworkDetailScreen = ({route}) => {
  const {id} = route.params;
  const {data} = useFetchArtwork(id);
  const {likesString} = useGetLikesFromStorage();

  return (
    <View>
      <FullArtwork
        id={data?.id}
        title={data?.title}
        author={data?.artist_title}
        description={data?.medium_display}
        imageUrl={generateImageUrl(data?.image_id)}
        isLiked={likesString?.includes(id)}
      />
    </View>
  );
};
