import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import axios from 'axios';
import {useQuery} from 'react-query';
import BottomSheet from '@gorhom/bottom-sheet';

import {Header} from '@app/components/common/Header';
import {Footer} from '@app/components/documents/Footer';
import {List} from '@app/components/documents/List';
import {IDocument} from '@app/api/types';
import {NewDocumentPanel} from '@app/components/documents/NewDocumentPanel';
import {useForm} from 'react-hook-form';
import {useAddToCache} from '@app/api/useAddToCache';
import {useRealtimeConnection} from '@app/api/useRealtimeConnection';

const Documents: React.FC = () => {
  const ref = useRef<BottomSheet>(null);

  const {control, handleSubmit} = useForm<IDocument>({
    defaultValues: {
      Title: '',
      Version: '',
    },
  });

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);

  const {isLoading, data, refetch} = useQuery(['documents'], async () => {
    const docs = await axios.get<IDocument[]>(
      'http://localhost:8080/documents',
    );

    return docs.data;
  });

  useRealtimeConnection();

  const {addItem} = useAddToCache();

  return (
    <View style={styles.container}>
      <Header title={'Documents'} badgeCount={1} />
      <List cards={data} isRefreshing={isLoading} onRefresh={refetch} />
      <NewDocumentPanel
        panelRef={ref}
        onClose={() => {
          setIsBottomSheetOpen(false);
        }}
        control={control}
      />
      <Footer
        buttonText={isBottomSheetOpen ? 'Submit' : '+ Add document'}
        onPress={() => {
          if (isBottomSheetOpen) {
            handleSubmit(addItem)();
          }
          ref.current?.snapToIndex(isBottomSheetOpen ? 0 : 1);
          setIsBottomSheetOpen(!isBottomSheetOpen);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
});

export {Documents};
