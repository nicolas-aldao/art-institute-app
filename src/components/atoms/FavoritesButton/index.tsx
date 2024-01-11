import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StyledFavoriteButton} from './StylesFavoriteButton';

export const FavoriteButton = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 20,
        right: 30,
        zIndex: 2,
      }}>
      <StyledFavoriteButton
        title="Your favorites"
        onPress={() => {
          navigation.navigate('Favorites');
        }}
      />
    </View>
  );
};
