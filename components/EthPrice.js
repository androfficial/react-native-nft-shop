import { View, Image, Text } from 'react-native';
import { assets } from '../constants/assets';
import { COLORS, FONTS, SIZES } from '../themes/theme';

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={assets.eth}
        resizeMode='contain'
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
};
