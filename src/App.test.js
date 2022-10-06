import { render, screen } from '@testing-library/react';
import GuGuDan from './GuGuDan';

test('renders learn react link', () => {
  render(<GuGuDan />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
