import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Toggler} from '@app/components/documents/List/Options/Toggler';

export type ViewMode = 'list' | 'grid';

interface OptionsProps {
  onChangeViewMode: (newMode: ViewMode) => void;
  onChageSorting: () => void;
  viewMode: ViewMode;
  sortingValue: null;
}

const Options: React.FC<OptionsProps> = ({
  onChangeViewMode,
  viewMode,
}: OptionsProps) => {
  return (
    <View style={styles.container}>
      <Toggler value={viewMode} onChange={onChangeViewMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    marginVertical: 16,
  },
});

export {Options};
