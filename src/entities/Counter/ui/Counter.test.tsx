import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

const user = userEvent.setup();

describe('Component Counter', () => {
  test('Counter render', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });
  test('increment', async () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    await user.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
  test('decrement', async () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    await user.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
