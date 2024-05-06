import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CheckList from './src/screens/Checklist';

export default function App() {
  return (
    <View style={styles.container}>
      <CheckList/>
      <StatusBar style="light" translucent={false} backgroundColor='#02407C'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
});
