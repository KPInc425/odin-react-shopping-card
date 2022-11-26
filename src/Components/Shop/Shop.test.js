import { render, screen } from "@testing-library/react"
import Shop from "./Shop"

describe("renders shop page", () => {

    it("renders Shop component", () => {
        render(<Shop />);
        expect(screen).toMatchSnapshot();
    })

    it("renders page header", () => {
        render(<Shop />);
        expect(screen.getByRole('heading', { name: 'Shop Page'})).toBeTruthy();
    })
})


