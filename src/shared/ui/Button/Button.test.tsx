import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Component Button', () => {
  test('Button without params only children', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('with theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});