import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingCart from "./ShoppingCart";

describe("ShoppingCart component renders", () => {
    it("renders ShoppingCart component", () => {
        const itemsInCartMock = [{
            title: "New Item",
            amt: 1,
            price: 52.50,
            id: 42
        }];
        render(<ShoppingCart itemsInCart={ itemsInCartMock }/>);

        expect(screen).toMatchSnapshot();
    })

    it("renders minimum shopping cart with default settings", () => {
        const changeCartExpansionMock = jest.fn();
        const itemsInCartMock = [{
            title: "New Item",
            amt: 1,
            price: 52.50,
            id: 42
        }];
        render(<ShoppingCart 
                    expandedCart={ false } 
                    changeCartExpansion={ changeCartExpansionMock } 
                    itemsInCart={ itemsInCartMock }
            />);

        const headingLabel = screen.getByRole('heading', { name: 'Shopping Cart'});
        const totalItems = screen.getByText('Total Items: 1');
        const totalPrice = screen.getByText('Total Price: $52.50');
        const toCartBtn = screen.getByRole('button', { name: 'Go To Cart'});

        expect(headingLabel && totalItems && totalPrice && toCartBtn).toBeTruthy();  
    })

    it("renders expanded shopping cart when GotoCart button clicked", () => {
        const changeCartExpansionMock = jest.fn();
        const itemsInCartMock = [{
            title: "New Item",
            amt: 2,
            price: 52.50,
            id: 42
        }];
        render(<ShoppingCart 
                    expandedCart={ false } 
                    changeCartExpansion={ changeCartExpansionMock } 
                    itemsInCart={ itemsInCartMock }
            />);
        const toCartBtn = screen.getByRole('button', { name: 'Go To Cart'});

        userEvent.click(toCartBtn);

        render(<ShoppingCart
                    expandedCart={ true }
                    changeCartExpansion={ changeCartExpansionMock }
                    itemsInCart={ itemsInCartMock }
            />);

        // check for cart item data and checkout/cancel 
        // buttons that will be added after expansion
        const cartItemTitle = screen.getByText("Title: New Item");
        const cartItemAmt = screen.getByText("Amt: 2");
        const cartItemPrice = screen.getByText("Price: $52.50");
        const cartItemTotalPrice = screen.getByText("Total: $105.00");

        const btnCheckout = screen.getByRole('button', { name: 'Checkout'});
        const btnCancel = screen.getByRole('button', { name: 'Cancel'});

        expect(btnCheckout && 
               cartItemTitle && 
               btnCancel && 
               cartItemAmt &&
               cartItemPrice &&
               cartItemTotalPrice).toBeTruthy();
    })
})