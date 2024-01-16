import React, {FC, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useArtworksLikes} from '../../../hooks/useArtworksLikes';
import {
  StyledImage,
  StyledTitle,
  StyledLikeButtonContainer,
  StyledContainer,
} from './StylesArtworkThumbail';
import {DislikeButton} from '../../atoms/DislikeButton/index';
import {LikeButton} from '../../atoms/LikeButton/index';

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
            <DislikeButton
              onPress={() => {
                setLiked(false);
                unlikeArtwork(id);
              }}
            />
          ) : (
            <LikeButton
              onPress={() => {
                setLiked(true);
                likeArtwork(id);
              }}
            />
          )}
        </StyledLikeButtonContainer>
      </TouchableOpacity>
    </StyledContainer>
  );
};
