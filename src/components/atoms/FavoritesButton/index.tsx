import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../constants';

export const FavoriteButton = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 20,
        right: 30,
        zIndex: 2,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Favorites');
        }}>
        <Text>
          <Icon name="grade" size={60} color={COLORS.FAVORITES} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
