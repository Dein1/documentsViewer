import {useQueryClient} from 'react-query';

import {IDocument} from '@app/api/types';

export const useAddToCache = () => {
  const queryClient = useQueryClient();

  const addItem = (item: IDocument) => {
    queryClient.setQueryData('documents', old =>
      old ? [...(old as any), item] : [item],
    );
  };

  return {addItem};
};
