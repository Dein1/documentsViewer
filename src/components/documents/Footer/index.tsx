import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Divider} from 'react-native-paper';
import {COLORS} from '../../../utils/constants/colors';

interface FooterProps {
  buttonText: string;
}

const Footer: React.FC<FooterProps> = ({buttonText}: FooterProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Divider />
        <Button style={styles.button} textColor={'white'}>
          {buttonText}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: COLORS.blue,
    borderRadius: 7,
    marginHorizontal: 10,
    marginTop: 8,
    paddingVertical: 4,
  },
});

export {Footer};
