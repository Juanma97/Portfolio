import { render } from '@testing-library/react';
import About from "./About";

test('renders correctly', () => {
    const component = render(<About />);

    expect(component).toBeTruthy();
})