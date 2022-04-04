import {render, screen} from "@testing-library/react"
import Header from './index'


describe("Header component", ()=> {
    test("if is render", ()=> {
        render(<Header />);
    });

    test("veirfy if Initial text to be in this file", ()=> {
        render(<Header />);
        const text = screen.getByText("Initial");
    
        expect(text).toBeInTheDocument();
    });

});

