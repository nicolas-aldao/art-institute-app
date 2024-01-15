import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const DislikeButton = onPress => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>
        <Icon name="favorite" size={30} color="#900" />;
      </Text>
    </TouchableOpacity>
  );
};
