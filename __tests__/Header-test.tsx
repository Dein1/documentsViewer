import React from 'react';
import {render} from '@testing-library/react-native';

import {Header} from '@app/components/common/Header';

describe('Header', () => {
  it('renders title', () => {
    const {queryByText} = render(<Header title={'Documents'} />);

    expect(queryByText('Documents')).not.toBeNull();
  });
});
