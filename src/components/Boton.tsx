import * as Haptics from 'expo-haptics'; // <-- Importamos la API de vibración de Expo
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BotonProps {
  label: string;
  isDouble?: boolean;
  onPress: () => void;
}

export default function Boton({ label, isDouble, onPress }: BotonProps) {
  const handlePressWithHaptics = () => {
    // Dispara una vibración háptica ligera cada vez que se toca cualquier botón
    Haptics.selectionAsync();
    // Ejecuta la función de la lógica original
    onPress();
  };

  return (
    <TouchableOpacity 
      style={[styles.button, isDouble && styles.doubleButton]} 
      activeOpacity={0.7}
      onPress={handlePressWithHaptics}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '22%',
    height: 64,
    backgroundColor: '#FF8EB2',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#3D1C1B',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
  },
  doubleButton: {
    width: '48%',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3D1C1B',
  },
});