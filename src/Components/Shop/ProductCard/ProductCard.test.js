import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';


describe("ProductCard Component renders", () => {
    const mockProduct = {
        id: 1,
        title: "Title",
        price: 109.92,
        description: "Descrtiption of Product Here",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9, 
            count: 120
        }
    }

    it("render ProductCard component", () => {
      render(<ProductCard { ...mockProduct } />);
        expect(screen).toMatchSnapshot();
    });



    it("renders title", () => {
        render(<ProductCard { ...mockProduct } />)
        const title = screen.getByRole('heading');
        expect(title).toBeTruthy();
    })
    it("renders image", () => {
        render(<ProductCard { ...mockProduct } />)
        const image = screen.getByRole('img');
        expect(image).toBeTruthy();
    })
    it("renders price", () => {
        render(<ProductCard { ...mockProduct } />)
        const price = screen.getByText('109.92');
        expect(price).toBeTruthy();
    })
    it("renders description", () => {
        render(<ProductCard { ...mockProduct } />)
        const description = screen.getByText('Descrtiption of Product Here');
        expect(description).toBeTruthy();
    })
    it("renders category", () => {
        render(<ProductCard { ...mockProduct } />)
        const category = screen.getByText("men's clothing");
        expect(category).toBeTruthy();
    })
    it("renders rating rate", () => {
        render(<ProductCard { ...mockProduct } />)
        const category = screen.getByText("Rate: 3.9");
        expect(category).toBeTruthy();
    })
    it("renders rating count", () => {
        render(<ProductCard { ...mockProduct } />)
        const category = screen.getByText("Count: 120");
        expect(category).toBeTruthy();
    })
    
})
