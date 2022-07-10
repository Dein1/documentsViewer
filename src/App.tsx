import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

import {DocumentsScreen} from '@app/components/screens/Documents';
import {COLORS} from '@app/utils/constants/colors';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.statusBar} />
      <SafeAreaView style={styles.container}>
        <DocumentsScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default App;
