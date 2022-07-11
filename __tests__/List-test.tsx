import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';

import {List} from '@app/components/documents/List';

const sampleDocument = {
  Attachments: ['European Amber Lager', 'Wood-aged Beer'],
  Contributors: [
    {
      ID: '1b41861e-51e2-4bf4-ba13-b20f01ce81ef',
      Name: 'Jasen Crona',
    },
    {
      ID: '2a1d6ed0-7d2d-4dc6-b3ea-436a38fd409e',
      Name: 'Candace Jaskolski',
    },
    {
      ID: '9ae28565-4a1c-42e3-9ae8-e39e6f783e14',
      Name: 'Rosemarie Schaden',
    },
  ],
  CreatedAt: '1912-03-08T06:01:39.382278739Z',
  ID: '69517c79-a4b2-4f64-9c83-20e5678e4519',
  Title: 'Arrogant Bastard Ale',
  UpdatedAt: '1952-02-29T22:21:13.817038244Z',
  Version: '5.3.15',
};

describe('List', () => {
  it('renders list', () => {
    const {queryByText} = render(
      <List
        onRefresh={jest.fn()}
        isRefreshing={false}
        cards={[sampleDocument]}
      />,
    );

    expect(queryByText(sampleDocument.Title)).not.toBeNull();
    expect(queryByText(sampleDocument.Attachments[0])).not.toBeNull();
  });

  it('switches view', () => {
    const {queryByText} = render(
      <List
        onRefresh={jest.fn()}
        isRefreshing={false}
        cards={[sampleDocument]}
      />,
    );

    fireEvent.press(screen.getByTestId('grid-view'));
    expect(queryByText(sampleDocument.Attachments[0])).toBeNull();
  });
});
