import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Header} from '@app/components/common/Header';
import {Footer} from '@app/components/documents/Footer';
import {List} from '@app/components/documents/List';

const Documents: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title={'Documents'} badgeCount={1} />
      <List
        cards={[
          {
            attachments: ['European Amber Lager', 'Wood-aged Beer'],
            contributors: [
              {
                id: '1b41861e-51e2-4bf4-ba13-b20f01ce81ef',
                name: 'Jasen Crona',
              },
              {
                id: '2a1d6ed0-7d2d-4dc6-b3ea-436a38fd409e',
                name: 'Candace Jaskolski',
              },
              {
                id: '9ae28565-4a1c-42e3-9ae8-e39e6f783e14',
                name: 'Rosemarie Schaden',
              },
            ],
            // createdAt: '1912-03-08T06:01:39.382278739Z',
            id: '69517c79-a4b2-4f64-9c83-20e5678e4519',
            title: 'Arrogant Bastard Ale',
            // updatedAt: '1952-02-29T22:21:13.817038244Z',
            version: '5.3.15',
          },
          {
            attachments: [
              'Strong Ale',
              'Stout',
              'Dark Lager',
              'Belgian Strong Ale',
            ],
            contributors: [
              {
                id: '1bbb6823f53-390f-49aa-a002-fb60908f8b0e',
                name: 'Hermann Lowe',
              },
            ],
            title: 'Ten FIDY aefljsadflajsdfljsadf;ljkasdf',
            id: 'scvnmcv234213469517c79-a4b2-4vf64-9c83-20e5678e4519',
            version: '5.1.15',
          },
          {
            attachments: [
              'Bock',
              'English Pale Ale',
              'Wood-aged Beer',
              'Belgian And French Ale',
            ],
            contributors: [
              {
                id: 'de30f704-110cxvxcv2-40f4-8517-a0361378370c',
                name: 'Velda Watsica',
              },
              {
                id: 'f65b8ce0-1276-2344a07-899c-a41387c9360c',
                name: 'Helmer Hauck',
              },
            ],
            title: 'Orval Trappist Ale',
            id: '234213469517c79-a4b2-4vf64-9c83-20e5678e4519',

            version: '1.3.1',
          },
          {
            attachments: [
              'Bock',
              'English Pale Ale',
              'Wood-aged Beer',
              'Belgian And French Ale',
            ],
            contributors: [
              {
                id: 'de30f704-1102-40f4-8517-a0361378370c',
                name: 'Velda Watsica',
              },
              {
                id: 'f65b8ce0-1276-4a07-899c-a41387c9360c',
                name: 'Helmer Hauck',
              },
            ],
            title: 'Orval Trappist Ale',
            id: 'sdfv69517c1212434579-a4b2-4f64-9c83-20e5678e4519',
            version: '1.3.1',
          },
        ]}
      />
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
