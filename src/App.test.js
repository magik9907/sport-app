import { render,screen } from '@testing-library/react'
import App from './App'

test('is any page loaded', () => {
	render(<App />);
	const content = screen.getByText(/home page/i)
	expect(content).toBeInTheDocument();
})
