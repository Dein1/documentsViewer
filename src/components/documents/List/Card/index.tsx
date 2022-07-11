import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Card as Container, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS} from '@app/utils/constants/colors';
import {ViewMode} from '@app/components/documents/List/Options';
import {IContributor} from '@app/api/types';

type CardProps = {
  title: string;
  version: string;
  contributors?: IContributor[];
  attachments?: string[];
  viewMode: ViewMode;
};

const Card: React.FC<CardProps> = ({
  title,
  version,
  contributors,
  attachments,
  viewMode,
}: CardProps) => {
  const isFullCard = viewMode === 'list';

  const width = Dimensions.get('window').width - 50;

  return (
    <Container style={[styles.container, !isFullCard && {width: width / 2}]}>
      <View style={isFullCard && styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>
          {title}
        </Text>
        {version && <Text style={styles.version}>{`Version ${version}`}</Text>}
      </View>
      {isFullCard && (
        <View style={styles.additionalsContainer}>
          <View style={styles.additionalGroup}>
            <View style={styles.additionalsHeaderContainer}>
              <Icon
                name="account-group-outline"
                size={17}
                style={styles.additionalsHeaderIcon}
              />
              <Text style={styles.additionalsHeader}>{'Contibutors'}</Text>
            </View>
            {contributors?.map(contributor => (
              <Text style={styles.additionalElement} key={contributor.ID}>
                {contributor.Name}
              </Text>
            ))}
          </View>
          <View style={styles.additionalGroup}>
            <View style={styles.additionalsHeaderContainer}>
              <Icon
                name="link-variant"
                size={17}
                style={styles.additionalsHeaderIcon}
              />
              <Text style={styles.additionalsHeader}>{'Attachments'}</Text>
            </View>
            {attachments?.map((attachment, index) => (
              <Text style={styles.additionalElement} key={index}>
                {attachment}
              </Text>
            ))}
          </View>
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    flexShrink: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  version: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.grey,
  },
  additionalsContainer: {
    flexDirection: 'row',
  },
  additionalsHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  additionalsHeader: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  additionalsHeaderIcon: {
    marginRight: 4,
  },
  additionalGroup: {
    marginRight: 16,
  },
  additionalElement: {
    fontWeight: '500',
    fontSize: 13,
    color: COLORS.grey,
    marginVertical: 3,
  },
});

export {Card};
