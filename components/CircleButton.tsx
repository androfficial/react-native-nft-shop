import { FC } from 'react';
import {
  TouchableOpacity,
  Image,
  GestureResponderEvent,
  ImageSourcePropType,
} from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../themes/theme';

interface ICircleButton {
  imgUrl: ImageSourcePropType;
  handlePress: (event: GestureResponderEvent) => void;
}

export const CircleButton: FC<ICircleButton> = ({
  imgUrl,
  handlePress,
  ...props
}): JSX.Element => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode='contain'
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};
