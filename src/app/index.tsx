import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Display from '../components/Display';
import Regilla from '../components/Regilla';
import { useCalculator } from '../hooks/useCalculator';

export default function CalculatorScreen() {
  const { displayValue, subExpression, history, handlePress } = useCalculator();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Panel de Historial de Caja (Característica única) */}
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>📜 Historial de Caja</Text>
          {history.length === 0 ? (
            <Text style={styles.historyEmpty}>Sin operaciones recientes</Text>
          ) : (
            history.map((item, index) => (
              <Text key={index} style={styles.historyItem}>• {item}</Text>
            ))
          )}
        </View>

        {/* Pantalla / Display modular */}
        <Display subExpression={subExpression} displayValue={displayValue} />

        {/* Botonera / Regilla modular */}
        <Regilla onPressButton={handlePress} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#C8EBFB',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#C8EBFB',
  },
  historyContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#3D1C1B',
  },
  historyTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3D1C1B',
    marginBottom: 4,
  },
  historyEmpty: {
    fontSize: 12,
    color: '#8E8E93',
    fontStyle: 'italic',
  },
  historyItem: {
    fontSize: 13,
    color: '#5C433C',
    marginVertical: 2,
  },
});