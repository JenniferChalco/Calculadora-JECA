import { StyleSheet, View } from 'react-native';
import CustomText from './CustomText';

interface DisplayProps {
  subExpression: string;
  displayValue: string;
}

export default function Display({ subExpression, displayValue }: DisplayProps) {
  return (
    <View style={styles.displayContainer}>
      <CustomText variant="small" numberOfLines={1}>{subExpression}</CustomText>
      <CustomText variant="big" numberOfLines={1} adjustsFontSizeToFit>{displayValue}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 10,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
});