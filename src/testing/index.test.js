import {render, screen} from "@testing-library/react"
import Launches from '../components/Launches'


it("Launches components get text", ()=> {
    render(<Launches />)

    const MissionName = screen.getByText("Mission name:");

    expect(MissionName).toBeInTheDocument();
})