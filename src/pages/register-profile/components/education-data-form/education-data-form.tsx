import moment from "moment"
import { useMemo } from "react"
import { useForm } from "react-hook-form"

export function EducationDataForm() {
    const currentDate = useMemo(() => moment(), [])
    const { register, control } = useForm({
        defaultValues: {
            startDate: currentDate as any,
            title: '',
            institution: '',
            description: '',
            endDate: null
        }
    })
    return <div className="row">
        <div className="col">
            <div className="row">
                <div className="col"><h2>Educación</h2></div>
            </div>
        </div>
    </div>
}