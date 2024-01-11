import React from 'react';
import {Text, View} from 'react-native';

export function ArtworkDetailScreen({route}) {
  const {id} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{`Artwork Detail Screen ${id}`}</Text>
    </View>
  );
}
