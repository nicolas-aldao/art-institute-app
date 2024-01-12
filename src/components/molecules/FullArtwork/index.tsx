import React, {FC} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  StyledImage,
  StyledTitle,
  StyledView,
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
};

export const FullArtwork: FC<FullArtworkProps> = ({
  id,
  title,
  author,
  description,
  imageUrl,
}) => {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    imageBackground: {
      width: '100vw',
      height: 500,
      borderRadius: '10px',
    },
    innerContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0, 0.40)',
      // borderRadius: '10px',
    },
  });

  return (
    // <TouchableOpacity
    //   onPress={() => {
    //     navigation.navigate('ArtworkDetail', {
    //       id: id,
    //     });
    //   }}>
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
    </>
    // </TouchableOpacity>
  );
};
