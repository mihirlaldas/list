import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const headingElement = screen.getByText(/Basic Hook useState/i);
  expect(headingElement).toBeInTheDocument();
});
