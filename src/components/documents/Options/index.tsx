import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Toggler} from './Toggler';

interface OptionsProps {
  onChangeView: () => void;
  onChageSorting: () => void;
  viewValue: 'list' | 'grid';
  sortingValue: null;
}

const Options: React.FC<OptionsProps> = ({
  onChangeView,
  viewValue = 'list',
}: OptionsProps) => {
  return (
    <View style={styles.container}>
      <Toggler value={viewValue} onChange={onChangeView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export {Options};
