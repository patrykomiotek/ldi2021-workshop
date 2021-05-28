import { render, screen } from '@testing-library/react';
import Footer from '../index';

describe('Footer component', () => {
  it('renders footer crashing', () => {
    render(<Footer />);
    expect(screen.getByText(/2021/i)).toBeInTheDocument();
  });
});
