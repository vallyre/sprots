import { render, screen } from '@testing-library/react'
import App from './App'

test('renders an app', () => {
  render(<App />)
  const linkElement = screen.getByText(/sprots/i)
  expect(linkElement).toBeInTheDocument()
})
