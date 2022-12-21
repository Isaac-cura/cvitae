import { render } from "@testing-library/react"
import { PersonalDataForm } from "./personal-data-form"

describe("test suite for personal data form component", () => {
    it("check if the title of section are properly rendered", () => {
        const {getByText} = render(<PersonalDataForm/>)
        getByText("Información personal")
    })
    it("Check that values are properly rendered", () => {
        const { getByLabelText } = render(<PersonalDataForm/>)
        const inputLabels = [
            "nombre (*)",
            "apellido (*)",
            "descripción (*)",
            "avatar",
            "fecha de nacimiento (*)",
        ]
        inputLabels.forEach((label) => getByLabelText(label))
    })
})