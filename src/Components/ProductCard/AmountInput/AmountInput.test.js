import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AmountInput from "./AmountInput";

describe("AmountInput component renders", () => {
    it("render AmountInput component", () => {
        render(<AmountInput />);
        expect(screen).toMatchSnapshot();
    })

    it("renders decrement button", () => {
        render(<AmountInput />);
        const decrementButton = screen.getByRole('button', { name: '-'});
        expect(decrementButton).toBeTruthy();
    })

    it("renders increment button", () => {
        render(<AmountInput />);
        const incrementButton = screen.getByRole('button', { name: '+'});
        expect(incrementButton).toBeTruthy();
    })

    it("renders add to cart button", () => {
        render(<AmountInput />);
        const addToCartButton = screen.getByRole('button', { name: 'Add to Cart'});
        expect(addToCartButton).toBeTruthy();
    })

    it("renders textbox input", () => {
        render(<AmountInput />);
        const input = screen.getByRole('textbox');
        expect(input).toBeTruthy();
    })

    it("renders Amt label w/ 0", () => {
        render(<AmountInput />);
        const amtLabel = screen.getByText(/Amt: 0/i);
        expect(amtLabel).toBeTruthy();
    })

    it("increases Amt label by 1 when increment button clicked", () => {
        render(<AmountInput />);
        const incrementButton = screen.getByRole('button', { name: '+'});
        userEvent.click(incrementButton);
        const amtLabel = screen.getByText(/Amt: 1/i);
        expect(amtLabel).toBeTruthy();
    })

    it("decreases Amt label by 1 when decrement button clicked", () => {
        render(<AmountInput />);
        const incrementButton = screen.getByRole('button', { name: '+'});
        const decrementButton = screen.getByRole('button', { name: '-'});
        userEvent.click(incrementButton);
        userEvent.click(incrementButton);
        userEvent.click(incrementButton);
        userEvent.click(decrementButton);
        const amtLabel = screen.getByText(/Amt: 2/i);
        expect(amtLabel).toBeTruthy();
    })

    it("reset Amt label when add to cart button clicked", () => {
        const addToCartMock = jest.fn();
        render(<AmountInput addItemToCart={ addToCartMock } />);
        const addToCartButton = screen.getByRole('button', { name: 'Add to Cart'});
        const incrementButton = screen.getByRole('button', { name: '+'});
        userEvent.click(incrementButton);
        userEvent.click(addToCartButton);
        const amtLabel = screen.getByText(/Amt: 0/i);
        expect(amtLabel).toBeTruthy();
    })
})