import { render, screen } from "@testing-library/react";
import CartItem from "./CartItems";

describe("CartItem component renders", () => {
    it("Renders CartItem Component", () => {
        render(<CartItem title={ "New Title" } amt={ 5 } price={ 5 }/>);
        expect(screen).toMatchSnapshot();
    })

    it("renders title", () => {
        render(<CartItem title={ "New Title" } amt={ 5 } price={ 5 }/>);
        const title = screen.getByText(/New Title/i);
        expect(title).toBeTruthy();
    })

    it("renders Amount", () => {
        render(<CartItem title={ "New Title" } amt={ 5 } price={ 5 }/>);
        const amount = screen.getByText(/Amt: 5/i);
        expect(amount).toBeTruthy();
    })

    it("renders price", () => {
        render(<CartItem title={ "New Title" } amt={ 5 } price={ 5 }/>);
        const price = screen.getByText(/New Title/i);
        expect(price).toBeTruthy();
    })

    it("renders total price", () => {
        const amount = 5;
        const price = 5.00;
        render(<CartItem title={ "New Title" } amt={ amount } price={ price }/>);
        const calcPrice = (amount * price).toFixed(2);
        const totalPrice = screen.getByText(`Total: $${calcPrice}`);
        expect(totalPrice).toBeTruthy();
    })
})