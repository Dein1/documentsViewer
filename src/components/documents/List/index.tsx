import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {Options} from '@app/components/documents/List/Options';
import {Card} from '@app/components/documents/List/Card';

export interface ICard {
  title: string;
  version: string;
  attachments: string[];
  contributors: {id: string; name: string}[];
  id: string;
}

interface ListProps {
  cards: ICard[];
}

const List: React.FC<ListProps> = ({cards}: ListProps) => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const renderItem = ({item}: {item: ICard}) => {
    return <Card {...item} viewMode={viewMode} />;
  };

  return (
    <FlatList
      renderItem={renderItem}
      data={cards}
      keyExtractor={item => item.id}
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
    paddingBottom: 50,
    marginHorizontal: 16,
  },
  gridElementContainer: {
    justifyContent: 'space-between',
  },
});

export {List};
