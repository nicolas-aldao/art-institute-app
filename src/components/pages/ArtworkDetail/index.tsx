import React, { useContext } from 'react';
import { View } from 'react-native';
import { generateImageUrl } from '../../../constants';
import { useFetchArtwork } from '../../../hooks/useFetchArtwork';
import { FullArtwork } from '../../molecules/FullArtwork/index';
import { ArtContext } from '../../../../App';

export const ArtworkDetailScreen = ({ route }) => {
  const { id } = route.params;
  const { data } = useFetchArtwork(id);
  const { likesArray } = useContext(ArtContext);

  return (
    <View>
      <FullArtwork
        id={data?.id}
        title={data?.title}
        author={data?.artist_title}
        description={data?.medium_display}
        imageUrl={generateImageUrl(data?.image_id)}
        isLiked={likesArray?.includes(id)}
      />
    </View>
  );
};
