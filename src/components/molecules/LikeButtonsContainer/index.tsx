import React, {FC, useState} from 'react';
import {LikeButton} from '../../atoms/LikeButton/index';
import {DislikeButton} from '../../atoms/DislikeButton/index';
import {useArtworksLikes} from '../../../hooks/useArtworksLikes';

export type LikeButtonContainerProps = {
  id: string;
  isLiked: boolean;
};

export const LikeButtonContainer: FC<LikeButtonContainerProps> = ({
  id,
  isLiked,
}) => {
  const [liked, setLiked] = useState(isLiked);
  const {likeArtwork, unlikeArtwork} = useArtworksLikes();

  return (
    <>
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
    </>
  );
};
