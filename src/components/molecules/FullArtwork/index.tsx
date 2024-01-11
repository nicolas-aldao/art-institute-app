import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StyledImage, StyledTitle} from './StylesFullArtwork';

export type FullArtworkProps = {
  id: string;
  title: string;
  imageUrl: string;
};

export const FullArtwork: FC<FullArtworkProps> = ({id, title, imageUrl}) => {
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
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};
