import {useEffect} from 'react';
import Toast from 'react-native-simple-toast';

import {useAddToCache} from '@app/api/useAddToCache';

export const useRealtimeConnection = () => {
  const {addItem} = useAddToCache();

  useEffect(() => {
    const websocket = new WebSocket('ws://localhost:8080/notifications');

    websocket.onmessage = event => {
      const data = JSON.parse(event.data);

      const newItem = {
        ID: data.DocumentID,
        CreatedAt: data.Timestamp,
        Contributors: [
          {
            ID: data.UserID,
            Name: data.UserName,
          },
        ],
        Title: data.DocumentTitle,
        Version: '1',
      };

      Toast.show(`New document added: ${data.DocumentTitle}`, Toast.SHORT);

      addItem(newItem);
    };

    return () => {
      websocket.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
