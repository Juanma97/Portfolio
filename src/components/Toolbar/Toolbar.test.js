import { render } from '@testing-library/react';
import Toolbar from './Toolbar';

test('renders toolbar', () => {
  const toolbar = render(<Toolbar />);
  expect(toolbar).toBeTruthy();
});

test('renders tabs correctly', () => {
    const { getByText } = render(<Toolbar />);
    const tabStart = getByText('INICIO');
    const tabProjects = getByText('PROYECTOS');
    const tabAboutMe = getByText('SOBRE MÍ');
    const tabBlog = getByText('BLOG');

    expect(tabStart).toBeTruthy();
    expect(tabProjects).toBeTruthy();
    expect(tabAboutMe).toBeTruthy();
    expect(tabBlog).toBeTruthy();
})