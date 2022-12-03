import { useMemo } from "react"
import moment, { Moment } from 'moment'
import { useForm } from "react-hook-form";
import { DatePickerWrapped } from "../../../../components/wrapped-datepicker/wrapped-datepicker";
export function TrayectoryDataForm() {
    const currentDate = useMemo(() => moment(), [])
    const { control } = useForm({
        defaultValues: {
            startDate: currentDate,
            position: '',
            company: '',
            description: '',
            endDate: null as Moment | null
        }
    })

    return <div className="row">
        <div className="col-12">
            <h2>Trayectoria laboral</h2>
        </div>
        <div className="col">
            <div className="row">
                <div className="col">
                    <DatePickerWrapped
                        control={control}
                        label="fecha de contratación (*)"
                        inputName="startDate"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="jobPosition">posición (*)</label>
                    <input className="form-control" type="text" name="jobPosition" id="jobPosition" />
                </div>
                <div className="col">
                    <label htmlFor="jobCompany">compañía (*)</label>
                    <input className="form-control" type="text" name="jobCompany" id="jobCompany" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="jobDescription">descripción del puesto (*)</label>
                    <textarea className="form-control" name="jobDescription" id="jobDescription"></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <DatePickerWrapped
                        control={control}
                        label="fecha de cese laboral"
                        inputName="endDate"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button disabled>agregar</button>
                </div>
            </div>
        </div>
    </div>
}