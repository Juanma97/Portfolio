import { render } from '@testing-library/react';
import Principal from './Principal';

test('renders correctly', () => {
    const component = render(<Principal />);

    expect(component).toBeTruthy();
})

test('renders download button correctly', () => {
    const component = render(<Principal />);
    const downloadButton = component.container.querySelector('.download')

    expect(downloadButton).toBeTruthy();
    expect(downloadButton).toHaveTextContent('Descarga mi CV')
})