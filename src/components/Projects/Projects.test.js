import { render } from '@testing-library/react';
import Projects from "./Projects";

test('renders correctly', () => {
    const component = render(<Projects />);

    expect(component).toBeTruthy();
})