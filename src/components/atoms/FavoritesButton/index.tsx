import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../constants';
import {StyledView} from './StylesFavoriteButton';

export const FavoriteButton = () => {
  const navigation = useNavigation();

  return (
    <StyledView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Favorites');
        }}>
        <Text>
          <Icon name="grade" size={60} color={COLORS.FAVORITES} />
        </Text>
      </TouchableOpacity>
    </StyledView>
  );
};
