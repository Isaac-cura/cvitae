import { useState } from "react"
import { Button } from "react-bootstrap"
import './register-profile.scss'

export function RegisterProfile() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        description: '',
        avatar: '',
        job: {
            company: '',
            position: '',
            description: '',
            startDate: '',
            endDate: ''
        }
    })
    return <div className="register-form">
        <h1>Registra tu perfil profesional</h1>
        <div className="row">
            <div className="col">
                <label htmlFor="firstName">nombre</label>
                <input className="form-control" type="text" id="firstName" />
            </div>
            <div className="col">
                <label htmlFor="lastName">apellido</label>
                <input className="form-control" type="text" id="lastName" />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <label htmlFor="description">descripción</label>
                <textarea className="form-control" name="description" id="description"></textarea>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <label htmlFor="avatar">avatar</label>
                <input className="form-control" type="file" name="avatar" id="avatar" />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <label htmlFor="birthdate">fecha de nacimiento</label>
                <input className="form-control" type="date" name="birthdate" id="birthdate" />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <label htmlFor="jobStartDate">fecha de inicio</label>
                        <input className="form-control" type="date" name="jobStartDate" id="jobStartDate" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="jobPosition">posición</label>
                        <input className="form-control" type="text" name="jobPosition" id="jobPosition" />
                    </div>
                    <div className="col">
                        <label htmlFor="jobCompany">compañía</label>
                        <input className="form-control" type="text" name="jobCompany" id="jobCompany" />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="jobDescription">descripción del puesto</label>
                    <textarea name="jobDescription" id="jobDescription"></textarea>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="jobEndDate">fecha fin</label>
                        <input className="form-control" type="date" name="jobEndDate" id="jobEndDate" />
                    </div>
                </div>
            </div>
        </div>
        <Button disabled>guardar</Button>
    </div>
}