import { render } from '@testing-library/react';
import App from './App';


// TODO: Resolve problem with library PDFDownloadLink
test.skip('renders learn react link', () => {
  const app = render(<App />);
  expect(app).toBeTruthy();
});
