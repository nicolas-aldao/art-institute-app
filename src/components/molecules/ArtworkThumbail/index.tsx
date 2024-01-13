import React, {FC, useState} from 'react';
import {Button, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {handleLike} from '../../../utils/handleLike';
import {handleUnlike} from '../../../utils/handleUnlike';
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
        <Button
          onPress={() => {
            setLiked(false);
            handleUnlike(id);
          }}
          title="Unlike"
          color="#ab1934"
        />
      ) : (
        <Button
          onPress={() => {
            setLiked(true);
            handleLike(id);
          }}
          title="Like"
          color="#e7e3e3"
        />
      )}
    </TouchableOpacity>
  );
};
