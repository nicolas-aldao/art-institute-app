import React, {FC, useState, useEffect} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {useArtworksLikes} from '../../../hooks/useArtworksLikes';
import {FullArtworkSkeleton} from '../../skeletons/FullArtworkSkeleton/index';
import {LikeButton} from '../../atoms/LikeButton/index';
import {DislikeButton} from '../../atoms/DislikeButton/index';
import {
  StyledTitle,
  StyledAuthor,
  StyledDescription,
  StyledTextContainer,
  StyledButtonContainer,
} from './StylesFullArtwork';

export type FullArtworkProps = {
  id: string;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  isLiked: boolean;
};

export const FullArtwork: FC<FullArtworkProps> = ({
  id,
  title,
  author,
  description,
  imageUrl,
  isLiked,
}) => {
  const [liked, setLiked] = useState(isLiked);
  const [isLoading, setIsLoading] = useState(true);
  const {likeArtwork, unlikeArtwork} = useArtworksLikes();

  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);

  const styles = StyleSheet.create({
    imageBackground: {
      width: '100vw',
      height: 500,
      borderRadius: '10px',
    },
    innerContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0, 0.40)',
    },
  });

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
      {isLoading && <FullArtworkSkeleton />}
      {!isLoading && (
        <>
          <StyledTextContainer>
            <StyledAuthor numberOfLines={1} ellipsizeMode="tail">
              {author}
            </StyledAuthor>
            <StyledTitle numberOfLines={1} ellipsizeMode="tail">
              {title}
            </StyledTitle>
            <StyledDescription numberOfLines={3} ellipsizeMode="tail">
              {description}
            </StyledDescription>
          </StyledTextContainer>
          <ImageBackground
            source={{uri: imageUrl}}
            style={styles.imageBackground}>
            <View style={styles.innerContainer}></View>
          </ImageBackground>
          <StyledButtonContainer>
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
          </StyledButtonContainer>
        </>
      )}
    </>
  );
};
