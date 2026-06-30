// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EchoSignal title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EchoSignal/i);
    expect(titleElement).toBeInTheDocument();
});
