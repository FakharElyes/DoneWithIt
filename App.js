import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  TouchableWithoutFeedback, 
  TouchableOpacity,
  TouchableHighlight,
  Button
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title = "Click Me"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
