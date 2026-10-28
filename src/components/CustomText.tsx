import { StyleSheet, Text, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  variant?: 'big' | 'small';
  style?: any;
}

export default function CustomText({ variant = 'big', style, children, ...rest }: CustomTextProps) {
  return (
    <Text style={[variant === 'big' ? styles.bigText : styles.smallText, style]} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  bigText: {
    fontSize: 48,
    fontWeight: '300',
    color: '#3D1C1B',
  },
  smallText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#5C433C',
  },
});