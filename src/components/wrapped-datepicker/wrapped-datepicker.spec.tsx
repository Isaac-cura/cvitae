import { fireEvent, getByDisplayValue, getByLabelText, render, screen } from "@testing-library/react"
import { useForm } from "react-hook-form"
import { DatePickerWrapped } from "./wrapped-datepicker"
import moment from 'moment'

describe("test suite for datepicker", () => {
    const label = "label to show"
    const inputName = "number"
    let defaultValue = moment("1/1/1991")

    let DatePicker: () => JSX.Element;

    beforeEach(() => {
        DatePicker = function () {
            const { control, watch } = useForm({
                defaultValues: {
                    [inputName]: defaultValue as any
                }
            })
            return <div>
                date is: {watch("number").format("MM/DD/YYYY")}
                <DatePickerWrapped
                    control={control}
                    label={label}
                    inputName={inputName}
                />
            </div>
        }
    })

    it('label are render properly', () => {
        const { getByLabelText } = render(<DatePicker />)
        const input = getByLabelText("label to show")
    })

    it("the datepicker show the default value", () => {
        const { getByLabelText } = render(<DatePicker />)
        const input = getByLabelText(label)
        expect(input).toHaveValue(defaultValue.format("MM/DD/YYYY"))
    })

    it("the datepicker change the control value", async () => {
        const { getByRole, getByLabelText, getByText } = render(<DatePicker></DatePicker>)
        const button = getByRole("button")
        fireEvent.click(button)
        const dayButton = screen.getByRole("gridcell", {
            name: "17"
        })
        await fireEvent.click(dayButton)
        screen.getByText("date is: 01/17/1991")
    })
})

export { }