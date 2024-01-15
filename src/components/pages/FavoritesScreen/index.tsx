import React from 'react';
import {Text, View} from 'react-native';
import {useFetchArtworksByIdsArray} from '../../../hooks/useFetchArtworksByIdsArray';
import {ArtworkThumbnailList} from '../../molecules/ArtworkThumbnailList/index';

export function FavoritesScreen() {
  const {data} = useFetchArtworksByIdsArray();

  return (
    <View>
      <Text>Favorites Screen</Text>
      {data && <ArtworkThumbnailList list={data} />}
    </View>
  );
}
