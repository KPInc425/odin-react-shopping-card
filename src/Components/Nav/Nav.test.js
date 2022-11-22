import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

describe("Nav Component", () => {
    it("render nav component", () => {
        const { container } = render(<BrowserRouter>
                                        <Nav />
                                    </BrowserRouter>);
        expect(container).toMatchSnapshot();
    });

    it("has links to homepage and shoppage", () => {
        render(<BrowserRouter>
            <Nav />
        </BrowserRouter>);
        const homeLink = screen.getByRole("link", { name: "Home" });
        const shopLink = screen.getByRole("link", { name: "Shop" });

        const homeLinkRoute = homeLink.href.split("localhost");
        const shopLinkRoute = shopLink.href.split("localhost");

        expect(homeLinkRoute[1]).toMatch('/');
        expect(shopLinkRoute[1]).toMatch('/shop');
    })

})
