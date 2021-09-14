import { render } from '@testing-library/react';
import Blog from "./Blog";

test('renders correctly', () => {
    const component = render(<Blog />);

    expect(component).toBeTruthy();
})