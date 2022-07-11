import React, {useState} from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';

import {Options} from '@app/components/documents/List/Options';
import {Card} from '@app/components/documents/List/Card';
import {IDocument} from '@app/api/types';

interface ListProps {
  cards?: IDocument[];
  onRefresh: () => void;
  isRefreshing: boolean;
}

const List: React.FC<ListProps> = ({
  cards,
  onRefresh,
  isRefreshing,
}: ListProps) => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const renderItem = ({item}: {item: IDocument}) => {
    return (
      <Card
        title={item.Title}
        version={item.Version}
        contributors={item.Contributors}
        attachments={item.Attachments}
        viewMode={viewMode}
        key={`${item.ID} + ${item.Title}`}
      />
    );
  };

  return (
    <FlatList
      renderItem={renderItem}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={isRefreshing} />
      }
      data={cards}
      keyExtractor={item => item.ID}
      key={viewMode}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={viewMode === 'grid' && styles.gridElementContainer}
      numColumns={viewMode === 'list' ? 1 : 2}
      ListHeaderComponent={
        <Options
          viewMode={viewMode}
          onChangeViewMode={newMode => {
            if (newMode) {
              setViewMode(newMode);
            }
          }}
          onChageSorting={() => undefined}
          sortingValue={null}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 80,
    marginHorizontal: 16,
  },
  gridElementContainer: {
    justifyContent: 'space-between',
  },
});

export {List};
