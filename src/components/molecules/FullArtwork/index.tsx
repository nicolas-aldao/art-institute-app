import React, {FC, useState, useEffect} from 'react';
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
  StyledImageBackground,
  StyledBlackMaskView,
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

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

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
          <StyledImageBackground source={{uri: imageUrl}}>
            <StyledBlackMaskView />
          </StyledImageBackground>
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
