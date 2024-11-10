import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Test Weather Forecase App', () => {

  test('renders app heading', () => {
    render(<App />);
    const linkElement = screen.getByText(/Weather For You/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('displays error when search is clicked with empty field', async () => {
    render(<App />);
    
    const searchButton = screen.getByRole('button', { name: /search/i });
    
    userEvent.click(searchButton);
    
    const errorMessage = await screen.findByText(/please enter a location/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
