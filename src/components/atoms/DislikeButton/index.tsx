import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../constants';

type DislikeButtonProps = {
  onPress: () => void;
};

export const DislikeButton: FC<DislikeButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>
        <Icon name="favorite" size={30} color={COLORS.LIKE} />;
      </Text>
    </TouchableOpacity>
  );
};
