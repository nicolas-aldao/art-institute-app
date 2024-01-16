import React, {FC, useState, useEffect, useContext} from 'react';
import {
  Button,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ArtContext} from '../../../../App';
import {COLORS} from '../../../constants';
import {useArtworksLikes} from '../../../hooks/useArtworksLikes';
import {FullArtworkSkeleton} from '../../skeletons/FullArtworkSkeleton/index';
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
  const {likesArray} = useContext(ArtContext);

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
          </StyledButtonContainer>
        </>
      )}
    </>
  );
};
