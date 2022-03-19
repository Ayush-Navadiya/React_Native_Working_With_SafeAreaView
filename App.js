import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Stuff inside SafeAreaView</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}