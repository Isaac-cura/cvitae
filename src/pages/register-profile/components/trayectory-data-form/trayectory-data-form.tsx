import { useMemo, useState } from "react"
import moment, { Moment } from 'moment'
import { useForm } from "react-hook-form";
import { DatePickerWrapped } from "../../../../components/wrapped-datepicker";
import { Alert } from "react-bootstrap";
import { Job } from "../../../../domain/profesional-profile.model";
import { useListForm } from "../../../../hooks/useListForm/useListForm";

export function TrayectoryDataForm() {
    const { list, addToList, removeFromList } = useListForm<Job>()
    const currentDate = useMemo(() => moment(), [])
    const { control, register, getValues, formState: { isValid } } = useForm({
        defaultValues: {
            startDate: currentDate as any,
            position: '',
            company: '',
            description: '',
            endDate: null as any
        },
        mode: "onChange",
    })
    const addFormToList = () => {
        const { startDate, endDate, position, company, description } = getValues()
        addToList({
            startDate: (startDate as Moment).toISOString(),
            endDate: (endDate as Moment)?.toISOString(),
            position,
            company,
            description
        })
    }
    return <div className="row">
        <div className="col-12">
            <h2>Trayectoria laboral</h2>
        </div>
        {list.map((item, index) => {
            return (<div className="col-12" key={index}>
                <Alert variant="secondary" onClose={() => { removeFromList(index) }} dismissible>
                    {item.company}
                </Alert>
            </div>)
        })}
        <div className="col">
            <div className="row">
                <div className="col" data-testid="startDate">
                    <DatePickerWrapped control={control} label="fecha de contratación (*)" inputName="startDate" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="jobPosition">posición (*)</label>
                    <input className="form-control" type="text" id="jobPosition" {...register("position", { required: true })}
                    />
                </div>
                <div className="col">
                    <label htmlFor="jobCompany">compañía (*)</label>
                    <input {...register("company", { required: true })} className="form-control" type="text" id="jobCompany" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="jobDescription">descripción del puesto (*)</label>
                    <textarea {...register("description", { required: true })} className="form-control" id="jobDescription">
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
                    <button disabled={!isValid} onClick={addFormToList}>agregar</button>
                </div>
            </div>
        </div>
    </div>
}

