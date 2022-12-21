import { useState } from "react"
import { Button } from "react-bootstrap"
import { EducationDataForm } from "./components/education-data-form/education-data-form"
import { PersonalDataForm } from "./components/persona-data-form/personal-data-form"
import { TrayectoryDataForm } from "./components/trayectory-data-form/trayectory-data-form"
import './register-profile.scss'

export function RegisterProfile() {
    return <div className="register-form container-fluid">
        <h1>Registra tu perfil profesional</h1>
        <div className="col">
            es solo un simple animal
            {true && "es un gato"}
            {true && "es un perro"}
        </div>
        <div className="row">
            <div className="col">
                <PersonalDataForm />
            </div>
            <div className="col">
                <TrayectoryDataForm />
            </div>
            <div className="col">
                <EducationDataForm />
            </div>
            <div className="col"></div>
        </div>
        <Button disabled>guardar</Button>
    </div>
}