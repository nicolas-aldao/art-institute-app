import React, {FC, useEffect, useState} from 'react';
import {Button, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {handleLike} from '../../../utils/handleLike';
import {useHandleUnlike} from '../../../hooks/useHandleUnlike';
import {StyledImage, StyledTitle} from './StylesArtworkThumbail';

export type ArtworkThumbailProps = {
  id: string;
  title: string;
  imageUrl: string;
  isLiked: boolean;
};

export const ArtworkThumbail: FC<ArtworkThumbailProps> = ({
  id,
  title,
  imageUrl,
  isLiked,
}) => {
  const [liked, setLiked] = useState(isLiked);
  const navigation = useNavigation();
  const {likeArtwork, unlikeArtwork} = useHandleUnlike();

  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);

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
      {liked ? (
        <TouchableOpacity
          onPress={() => {
            setLiked(false);
            unlikeArtwork(id);
          }}>
          <Text>
            <Icon name="favorite" size={30} color="#900" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setLiked(true);
            likeArtwork(id);
          }}>
          <Text>
            <Icon name="favorite-border" size={30} color="#900" />
          </Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};
