import { fireEvent, getByRole as _getByRole, getByText, render, screen, within } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { TrayectoryDataForm } from "./trayectory-data-form"

describe("test suite for trayectory data form component", () => {
    it("The component show proper title", () => {
        const title = "Trayectoria laboral"
        const { getByText } = render(<TrayectoryDataForm />)
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
        const { getByLabelText, getByText } = render(<TrayectoryDataForm />)
        inputLabels.forEach((label) => getByLabelText(label))
        getByText("agregar")
    })

    it("Button agregar is disabled when the fields are unfilled", () => {
        const { getByRole } = render(<TrayectoryDataForm />)
        const addButton = getByRole("button", { name: "agregar" })
        expect(addButton).toBeDisabled()
    })

    it("Button 'agregar' is enabled when the mandatory fields are filled", async () => {
        const { getByRole, getByLabelText, getByText } = render(<TrayectoryDataForm />)
        await act(() => {
            const position = getByLabelText("posición (*)")
            fireEvent.input(position, {target: {value: "Software developer"}})
            const company = getByLabelText("compañía (*)")
            fireEvent.input(company, {target: {value: "Microsoft"}})
            const description = getByLabelText("descripción del puesto (*)")
            fireEvent.input(description,{target: {value: "Develop websites"}} )
        })
        const addButton = getByText("agregar")  

        expect(addButton).toBeEnabled()

        

    })
})