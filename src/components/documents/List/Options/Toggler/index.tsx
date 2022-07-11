import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ToggleButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ViewMode} from '@app/components/documents/List/Options';
import {COLORS} from '@app/utils/constants/colors';

interface TogglerProps {
  onChange: (newMode: ViewMode) => void;
  value: ViewMode;
}

const Toggler: React.FC<TogglerProps> = ({onChange, value}: TogglerProps) => {
  const getButtonColor = (buttonName: ViewMode) =>
    value === buttonName ? COLORS.grey : COLORS.blue;

  return (
    <View>
      <ToggleButton.Row onValueChange={onChange as any} value={value}>
        <ToggleButton
          icon={() => (
            <Icon
              name="format-list-bulleted-square"
              color={getButtonColor('list')}
              size={15}
              testID={'list-view'}
            />
          )}
          value="list"
          size={15}
          style={[styles.button, value !== 'list' && styles.unchecked]}
        />
        <ToggleButton
          icon={() => (
            <Icon
              name="grid-large"
              color={getButtonColor('grid')}
              size={15}
              testID={'grid-view'}
            />
          )}
          value="grid"
          size={15}
          style={[styles.button, value !== 'grid' && styles.unchecked]}
        />
      </ToggleButton.Row>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 25,
    borderColor: COLORS.lightGrey,
    borderRadius: 4,
  },
  unchecked: {
    backgroundColor: COLORS.white,
  },
});

export {Toggler};
