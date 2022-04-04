import {render, screen} from "@testing-library/react"
import Launches from './index'



describe("Launches component", ()=> {
    test("if is render", ()=> {
        render(<Launches />);
    });
});

