import { Slot } from 'expo-router';
import { StatusBar, StyleSheet, View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      {/* Iconos oscuros para que resalten sobre el fondo claro/azul pastel */}
      <StatusBar barStyle="dark-content" backgroundColor="#C8EBFB" />
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8EBFB', // Fondo patrón azul pastel
  },
});