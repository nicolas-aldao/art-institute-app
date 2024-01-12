import React from 'react';
import {Text, View} from 'react-native';
import {useFetchArtwork} from '../../../hooks/useFetchArtwork';
import {FullArtwork} from '../../molecules/FullArtwork/index';

export function ArtworkDetailScreen({route}) {
  const {id} = route.params;
  const {data, isLoading} = useFetchArtwork(id);

  return (
    <View>
      {/* <Text>{`Artwork Detail Screen ${id}`}</Text> */}
      <FullArtwork
        id={data?.data?.id}
        title={data?.data?.title}
        author={data?.data?.artist_title}
        description={data?.data?.medium_display}
        imageUrl={`https://www.artic.edu/iiif/2/${data?.data?.image_id}/full/843,/0/default.jpg`}
      />
    </View>
  );
}
