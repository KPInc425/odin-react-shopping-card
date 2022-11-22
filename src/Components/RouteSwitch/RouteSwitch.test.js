import { render, screen } from '@testing-library/react';
import RouteSwitch from './RouteSwitch';

describe("RouteSwitch Component", () => {
    it("renders route browser", () => {
        const { container } = render(<RouteSwitch />);
        expect(container).toMatchSnapshot();
    });
})