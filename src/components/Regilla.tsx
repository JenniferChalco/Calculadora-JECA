import { StyleSheet, View } from 'react-native';
import Boton from './Boton';

interface RegillaProps {
  onPressButton: (value: string) => void;
}

export default function Regilla({ onPressButton }: RegillaProps) {
  return (
    <View>
      <View style={styles.row}>
        <Boton label="C" onPress={() => onPressButton('C')} />
        <Boton label="+/-" onPress={() => onPressButton('+/-')} />
        <Boton label="%" onPress={() => onPressButton('%')} />
        <Boton label="÷" onPress={() => onPressButton('÷')} />
      </View>
      <View style={styles.row}>
        <Boton label="7" onPress={() => onPressButton('7')} />
        <Boton label="8" onPress={() => onPressButton('8')} />
        <Boton label="9" onPress={() => onPressButton('9')} />
        <Boton label="×" onPress={() => onPressButton('×')} />
      </View>
      <View style={styles.row}>
        <Boton label="4" onPress={() => onPressButton('4')} />
        <Boton label="5" onPress={() => onPressButton('5')} />
        <Boton label="6" onPress={() => onPressButton('6')} />
        <Boton label="−" onPress={() => onPressButton('−')} />
      </View>
      <View style={styles.row}>
        <Boton label="1" onPress={() => onPressButton('1')} />
        <Boton label="2" onPress={() => onPressButton('2')} />
        <Boton label="3" onPress={() => onPressButton('3')} />
        <Boton label="+" onPress={() => onPressButton('+')} />
      </View>
      <View style={styles.row}>
        <Boton label="⌫" onPress={() => onPressButton('⌫')} />
        <Boton label="0" onPress={() => onPressButton('0')} />
        <Boton label="." onPress={() => onPressButton('.')} />
        <Boton label="=" isDouble onPress={() => onPressButton('=')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});