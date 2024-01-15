import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const LikeButton = onPress => {
  return (
    <TouchableOpacity onPress={() => onPress}>
      <Text>
        <Icon name="favorite-border" size={30} color="#900" />
      </Text>
    </TouchableOpacity>
  );
};
