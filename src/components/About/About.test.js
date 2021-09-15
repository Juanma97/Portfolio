import { render } from '@testing-library/react';
import About from "./About";

test('renders correctly', () => {
    const component = render(<About />);

    expect(component).toBeTruthy();
})

test('renders title correctly', () => {
    const { getByText } = render(<About />);

    const title = getByText('¿Quién soy?')

    expect(title).toBeTruthy();
})