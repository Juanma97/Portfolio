import { render } from '@testing-library/react';
import Projects from "./Projects";

test('renders correctly', () => {
    const component = render(<Projects />);

    expect(component).toBeTruthy();
})

test('renders project correctly', () => {
    const component = render(<Projects />);
    const project = component.container.querySelector('.project');
    const projectHeader = component.container.querySelector('.project-header');
    const projectTitle = component.container.querySelector('.project-title');
    const projectDescription = component.container.querySelector('.project-description');
    const projectUrl = component.container.querySelector('.project-url');

    expect(project).toBeTruthy();
    expect(projectHeader).toBeTruthy();
    expect(projectTitle).toBeTruthy();
    expect(projectDescription).toBeTruthy();
    expect(projectUrl).toBeTruthy();
})

test.skip('renders download button correctly', () => {
    const component = render(<Principal />);
    const downloadButton = component.container.querySelector('.download')

    expect(downloadButton).toBeTruthy();
    expect(downloadButton).toHaveTextContent('Descarga mi CV')
})