import React from 'react';
import {View, StyleSheet} from 'react-native';
import axios from 'axios';
import {useQuery} from 'react-query';

import {Header} from '@app/components/common/Header';
import {Footer} from '@app/components/documents/Footer';
import {List} from '@app/components/documents/List';
import {IDocument} from '@app/api/types';
import {useRealtimeConnection} from '@app/api/useRealtimeConnection';

const Documents: React.FC = () => {
  useRealtimeConnection();

  const {isLoading, data, refetch} = useQuery(['documents'], async () => {
    const docs = await axios.get<IDocument[]>(
      'http://localhost:8080/documents',
    );

    return docs.data;
  });

  return (
    <View style={styles.container}>
      <Header title={'Documents'} badgeCount={1} />
      <List cards={data} isRefreshing={isLoading} onRefresh={refetch} />
      <Footer buttonText="+ Add document" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export {Documents as DocumentsScreen};
