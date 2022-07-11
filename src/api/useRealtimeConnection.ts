import {useEffect} from 'react';
import {useQueryClient} from 'react-query';
import Toast from 'react-native-simple-toast';

export const useRealtimeConnection = () => {
  const queryClient = useQueryClient();
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
      };

      Toast.show(`New document added: ${data.DocumentTitle}`, Toast.SHORT);

      queryClient.setQueryData('documents', old =>
        old ? [...(old as any), newItem] : [newItem],
      );
    };

    return () => {
      websocket.close();
    };
  }, [queryClient]);
};
