import React, {FC, useState, useEffect} from 'react';
import {Button, StyleSheet, View, ImageBackground} from 'react-native';
import {useHandleUnlike} from '../../../hooks/useHandleUnlike';
import {
  StyledTitle,
  StyledAuthor,
  StyledDescription,
  StyledTextContainer,
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
  const {likeArtwork, unlikeArtwork} = useHandleUnlike();

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

  return (
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
      <ImageBackground source={{uri: imageUrl}} style={styles.imageBackground}>
        <View style={styles.innerContainer}></View>
      </ImageBackground>
      {liked ? (
        <Button
          onPress={() => {
            setLiked(false);
            unlikeArtwork(id);
          }}
          title="Unlike"
          color="#ab1934"
        />
      ) : (
        <Button
          onPress={() => {
            setLiked(true);
            likeArtwork(id);
          }}
          title="Likee"
          color="#e7e3e3"
        />
      )}
    </>
  );
};
