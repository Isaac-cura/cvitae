export function PersonalDataForm() {
    return <div>
        <h2>Información personal</h2>
        <div className="row">
            <div className="col">
                <label htmlFor="firstName">nombre (*)</label>
                <input className="form-control" type="text" id="firstName" />
            </div>
            <div className="col">
                <label htmlFor="lastName">apellido (*)</label>
                <input className="form-control" type="text" id="lastName" />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <label htmlFor="description">descripción (*)</label>
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
                <label htmlFor="birthdate">fecha de nacimiento (*)</label>
                <input className="form-control" type="date" name="birthdate" id="birthdate" />
            </div>
        </div>
    </div>
}