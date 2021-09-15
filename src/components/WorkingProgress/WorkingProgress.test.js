const { render } = require("@testing-library/react")
import WorkingProgress from './WorkingProgress'

test('renders correctly', () => {
    const component = render(<WorkingProgress />);

    expect(component).toBeTruthy();
})


test('renders text correctly', () => {
    const { getByText } = render(<WorkingProgress />);

    const title = getByText('Estamos trabajando en ello, ten paciencia :)')

    expect(title).toBeTruthy();
})