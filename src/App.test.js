import { render, screen } from '@testing-library/react';
import AppLayout from './App';

test('renders learn react link', () => {
  render(<AppLayout />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});





