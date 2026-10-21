import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CalculatorScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.calculatorContainer}>
        {/* Pantalla de Visualización / Display (Vacía) */}
        <View style={styles.displayContainer}>
          <Text style={styles.subResultText}>250+10+18</Text>
          <Text style={styles.mainResultText}>278</Text>
        </View>

        {/* Fila 1 */}
        <View style={styles.row}>
          <Button label="C" />
          <Button label="+/-" />
          <Button label="%" />
          <Button label="÷" />
        </View>

        {/* Fila 2 */}
        <View style={styles.row}>
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="×" />
        </View>

        {/* Fila 3 */}
        <View style={styles.row}>
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="−" />
        </View>

        {/* Fila 4 */}
        <View style={styles.row}>
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="+" />
        </View>

        {/* Fila 5 (El botón '=' es doble, ocupando dos espacios) */}
        <View style={styles.row}>
          <Button label="0" />
          <Button label="." />
          <Button label="=" isDouble />
        </View>
      </View>
    </SafeAreaView>
  );
}

// Componente secundario para simplificar las teclas
function Button({ label, isDouble }: { label: string; isDouble?: boolean }) {
  return (
    <TouchableOpacity style={[styles.button, isDouble && styles.doubleButton]} activeOpacity={0.7}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#C8EBFB', // Fondo general celeste de la app
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Empuja la botonera hacia la parte inferior
    padding: 20,
    backgroundColor: '#C8EBFB',
  },
  displayContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 10,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  subResultText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#5C433C',
  },
  mainResultText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3D1C1B',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    width: '22%', // Ancho normal para 4 columnas
    height: 64,
    backgroundColor: '#FF8EB2', // Botones en tono rosado
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#3D1C1B',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4, // Relieve 3D original
  },
  doubleButton: {
    width: '48%', // Ancho doble para el botón '='
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3D1C1B',
  },
});