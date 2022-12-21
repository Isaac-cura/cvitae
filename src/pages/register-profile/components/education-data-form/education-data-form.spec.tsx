import { render } from "@testing-library/react"
import { EducationDataForm } from "./education-data-form"

describe("Test suite for education form component", () => {
    it("The component title its rendered", () => {
        const { getByText } = render(<EducationDataForm />)
        getByText("Educación")
    })
})
export { }

