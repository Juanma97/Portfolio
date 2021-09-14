import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Toolbar from './Toolbar';

test('renders toolbar', () => {
  const toolbar = render(
  <BrowserRouter>
    <Toolbar />
  </BrowserRouter>);
  expect(toolbar).toBeTruthy();
});

test('renders tabs correctly', () => {
    const { getByText } = render(
    <BrowserRouter>
      <Toolbar />
    </BrowserRouter>);
    const tabStart = getByText('INICIO');
    const tabProjects = getByText('PROYECTOS');
    const tabAboutMe = getByText('SOBRE MI');
    const tabBlog = getByText('BLOG');

    expect(tabStart).toBeTruthy();
    expect(tabProjects).toBeTruthy();
    expect(tabAboutMe).toBeTruthy();
    expect(tabBlog).toBeTruthy();
})