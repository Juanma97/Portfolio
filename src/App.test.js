import { render } from '@testing-library/react';
import App from './App';
import Toolbar from './Toolbar';

test('renders learn react link', () => {
  const app = render(<App />);
  expect(app).toBeTruthy();
});
