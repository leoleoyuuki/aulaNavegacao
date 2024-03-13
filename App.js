import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
    <SafeAreaView>
      <Text>Open up App.js to start working on your app!</Text>
    </SafeAreaView>
    <Routes/>
  </>
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
