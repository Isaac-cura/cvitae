import { render } from "@testing-library/react"
import { TrayectoryDataForm } from "./trayectory-data-form"

describe("test suite for trayectory data form component", () => {
    it("The component show proper title", () => {
        const title = "Trayectoria laboral"
        const { getByText } = render(<TrayectoryDataForm/>)
        getByText(title)
    })

    it("Input fields are properly renderer", () => {
        const inputLabels = [
            "fecha de contratación (*)",
            "posición (*)",
            "compañía (*)",
            "descripción del puesto (*)",
            "fecha de cese laboral",
        ]
        const { getByLabelText, getByText } = render(<TrayectoryDataForm/>)
        inputLabels.forEach((label) => getByLabelText(label))
        getByText("agregar")
    })

    it("Button agregar is disabled when the fields are unfilled", () => {
        const {getByRole} = render(<TrayectoryDataForm/>)
        const addButton = getByRole("button", {name: "agregar"})
        expect(addButton).toBeDisabled()
    })
})