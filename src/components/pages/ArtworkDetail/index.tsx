import React from 'react';
import {Text, View} from 'react-native';
import {useFetchArtwork} from '../../../hooks/useFetchArtwork';

export function ArtworkDetailScreen({route}) {
  const {id} = route.params;
  const {data, isLoading} = useFetchArtwork(id);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{`Artwork Detail Screen ${id}`}</Text>
      <Text>{`${JSON.stringify(data.data)}`}</Text>
    </View>
  );
}
