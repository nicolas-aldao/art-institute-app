import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../constants';

type LikeButtonProps = {
  onPress: () => void;
};

export const LikeButton: FC<LikeButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>
        <Icon name="favorite-border" size={30} color={COLORS.LIKE} />
      </Text>
    </TouchableOpacity>
  );
};
