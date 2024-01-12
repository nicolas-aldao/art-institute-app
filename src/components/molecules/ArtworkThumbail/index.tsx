import React, {FC} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StyledImage, StyledTitle} from './StylesArtworkThumbail';

export type ArtworkThumbailProps = {
  id: string;
  title: string;
  imageUrl: string;
};

export const ArtworkThumbail: FC<ArtworkThumbailProps> = ({
  id,
  title,
  imageUrl,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ArtworkDetail', {
          id: id,
        });
      }}>
      <StyledTitle numberOfLines={2} ellipsizeMode="tail">
        {title}
      </StyledTitle>

      <StyledImage
        source={{
          uri: imageUrl,
        }}
      />
    </TouchableOpacity>
  );
};
