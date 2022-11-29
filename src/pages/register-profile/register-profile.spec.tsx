import { getByAltText, render } from "@testing-library/react"
import { RegisterProfile } from "./register-profile.page"

describe("test suite for the register profile page", () => {
    it("test if the page is rendered properly", () => {
        const component = render(<RegisterProfile/>)
        component.getByText("Registra tu perfil profesional")
    })
    it("check if the save button is disabled when the data is unfilled", () => {
        const component = render(<RegisterProfile/>)
        const button = component.getByText("guardar")
        expect(button).toHaveAttribute("disabled")
    })
})

export {}