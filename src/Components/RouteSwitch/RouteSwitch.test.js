import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RouteSwitch from './RouteSwitch';

describe("RouteSwitch Component", () => {
    it("renders route browser", () => {
        const { container } = render(<RouteSwitch />);
        expect(container).toMatchSnapshot();
    });

    it("renders nav initialy", () => {
        render(<RouteSwitch />);
        expect(screen.getByRole('navigation')).toBeTruthy();
    })

    it("renders Home Page initialy", () => {
        render(<RouteSwitch />);
        expect(screen.getByRole('heading').textContent).toMatch(/Home Page/i);
    })

    // THIS SHOULD TEST NAV
    // it("render shop page after link clicked", () => {
    //     render(<RouteSwitch />);
    //     const link = screen.getByRole("link", { name: "Shop" });
    //     // console.log(link);
    //     userEvent.click(link);

    //     expect(screen.getByRole("heading").textContent).toMatch(/Shop Page/i);
    // })
})