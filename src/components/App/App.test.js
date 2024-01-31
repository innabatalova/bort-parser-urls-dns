import { render, screen } from '@testing-library/react'
import App from './App'

test('renders App component', () => {
  render(<App />)
  screen.debug()
})

test('renders Download Json File link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Download Json File/i)
  expect(linkElement).toBeInTheDocument()
})
