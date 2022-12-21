import { Control, Controller } from "react-hook-form"
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { TextField } from "@mui/material"

type DatePickerProps = { control: Control<any>, label: string, inputName: string }
export function DatePickerWrapped<T>({ label, inputName, control }: DatePickerProps) {
    return <div>
        <Controller
        control={control}
        name={inputName}
        render={({ field: { onChange, value } }) =>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                    label={label}
                    value={value}
                    onChange={onChange}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                />
            </LocalizationProvider>}
    /></div>


}