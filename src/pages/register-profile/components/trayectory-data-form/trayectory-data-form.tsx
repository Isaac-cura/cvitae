import { useMemo } from "react"
import moment from 'moment'
import { useForm } from "react-hook-form";
import { DatePickerWrapped } from "../../../../components/wrapped-datepicker/wrapped-datepicker";
export function TrayectoryDataForm() {
    const currentDate = useMemo(() => moment(), [])
    const { control, register, formState: {isValid} } = useForm({
        defaultValues: {
            startDate: currentDate as any,
            position: '',
            company: '',
            description: '',
            endDate: null as any
        },
        mode: "onChange",
    })
    return <div className="row">
        <div className="col-12">
            <h2>Trayectoria laboral</h2>
        </div>
        <div className="col">
            <div className="row">
                <div className="col" data-testid="startDate">
                    <DatePickerWrapped control={control} label="fecha de contratación (*)" inputName="startDate"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="jobPosition">posición (*)</label>
                    <input className="form-control" type="text" id="jobPosition" {...register("position", {required: true})}
                    />
                </div>
                <div className="col">
                    <label htmlFor="jobCompany">compañía (*)</label>
                    <input {...register("company", {required: true})} className="form-control" type="text" id="jobCompany" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="jobDescription">descripción del puesto (*)</label>
                    <textarea {...register("description", {required: true})} className="form-control" id="jobDescription">
                    </textarea>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <DatePickerWrapped control={control} label="fecha de cese laboral" inputName="endDate"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button disabled={!isValid}>agregar</button>
                </div>
            </div>
        </div>
    </div>
}