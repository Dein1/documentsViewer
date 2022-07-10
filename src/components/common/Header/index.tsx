import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar, Badge} from 'react-native-paper';

import {COLORS} from '../../../utils/constants/colors';

interface HeaderProps {
  title: string;
  badgeCount?: number;
}

const Header: React.FC<HeaderProps> = ({title, badgeCount}: HeaderProps) => {
  return (
    <>
      <Appbar.Header mode="small" style={styles.container}>
        <Appbar.Content title={title} titleStyle={styles.headerTitle} />
        {badgeCount && (
          <Badge visible size={12} style={styles.rightIconBadge}>
            {badgeCount}
          </Badge>
        )}
        <Appbar.Action icon="bell-outline" size={18} style={styles.rightIcon} />
      </Appbar.Header>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginLeft: -50,
  },
  headerTitle: {
    fontWeight: 'bold',
  },
  rightIcon: {
    borderColor: COLORS.lightGrey,
    borderWidth: 1,
    borderRadius: 7,
  },
  rightIconBadge: {
    position: 'absolute',
    top: 20,
    right: 15,
    backgroundColor: COLORS.blue,
    zIndex: 1,
  },
});

export {Header};
