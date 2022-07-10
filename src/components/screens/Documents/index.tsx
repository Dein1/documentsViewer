import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Header} from '../../common/Header';
import {Footer} from '../../documents/Footer';
import {Options} from '../../documents/Options';

const DocumentsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title={'Documents'} badgeCount={1} />
      <Options
        viewValue="list"
        onChangeView={() => undefined}
        onChageSorting={() => undefined}
        sortingValue={null}
      />
      <Footer buttonText="+ Add document" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export {DocumentsScreen};
