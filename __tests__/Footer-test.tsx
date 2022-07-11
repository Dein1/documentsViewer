import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Footer} from '@app/components/documents/Footer';

describe('Footer', () => {
  it('renders button text', () => {
    const {queryByText} = render(
      <Footer onPress={jest.fn()} buttonText={'Button text'} />,
    );

    expect(queryByText('Button text')).not.toBeNull();
  });

  it('fires button onPress', () => {
    const mock = jest.fn();

    render(<Footer onPress={mock} buttonText={'Button text'} />);

    fireEvent.press(screen.getByText('Button text'));

    expect(mock).toBeCalled();
  });
});
