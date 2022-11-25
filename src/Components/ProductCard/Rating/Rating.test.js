import { render, screen } from "@testing-library/react";
import Rating from "./Rating";

describe("Rating Component Renders", () => {
    it("renders ratings component", () => {
        render(<Rating />);
        expect(screen).toMatchSnapshot();
    });

    it("renders rating Rate: 4.2", () => {
        render(<Rating rate={ 4.2 } />);
        const rate = screen.getByText(/Rate: 4.2/i);
        expect(rate).toBeTruthy();
    })

    it("renders rating Count: 1254", () => {
        render(<Rating count={ 1254 } />);
        const count = screen.getByText(/Count: 1254/i);
        expect(count).toBeTruthy();
    })
})