import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
  render(<App />);
});

test("mockJson", async() => {
  const res = await fetch('http://localhost:5000/route')
  const data = await res.json()

  console.log(data);
});
