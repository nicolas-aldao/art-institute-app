import React, {FC, useEffect, useState} from 'react';
import {Button, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../constants';
import {handleLike} from '../../../utils/handleLike';
import {useArtworksLikes} from '../../../hooks/useArtworksLikes';
import {
  StyledImage,
  StyledTitle,
  StyledLikeButtonContainer,
  StyledContainer,
} from './StylesArtworkThumbail';

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
  const {likeArtwork, unlikeArtwork} = useArtworksLikes();

  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);

  return (
    <StyledContainer>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ArtworkDetail', {
            id: id,
          });
        }}>
        <StyledTitle numberOfLines={1} ellipsizeMode="tail">
          {title}
        </StyledTitle>

        <StyledImage
          source={{
            uri: imageUrl,
          }}
        />
        <StyledLikeButtonContainer>
          {liked ? (
            <TouchableOpacity
              onPress={() => {
                setLiked(false);
                unlikeArtwork(id);
              }}>
              <Text>
                <Icon name="favorite" size={30} color={COLORS.LIKE} />
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setLiked(true);
                likeArtwork(id);
              }}>
              <Text>
                <Icon name="favorite-border" size={30} color={COLORS.LIKE} />
              </Text>
            </TouchableOpacity>
          )}
        </StyledLikeButtonContainer>
      </TouchableOpacity>
    </StyledContainer>
  );
};
