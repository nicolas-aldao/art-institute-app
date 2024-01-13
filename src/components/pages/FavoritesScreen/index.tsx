import React, {useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFetchArtworksByIdsArray} from '../../../hooks/useFetchArtworksByIdsArray';
import {ArtworkThumbail} from '../../molecules/ArtworkThumbail/index';
import {ArtworkThumbnailList} from '../../molecules/ArtworkThumbnailList/index';

export function FavoritesScreen() {
  const {data, isLoading} = useFetchArtworksByIdsArray();

  return (
    <View>
      <Text>Favorites Screen</Text>
      {data && <ArtworkThumbnailList list={data} />}
    </View>
  );
}
