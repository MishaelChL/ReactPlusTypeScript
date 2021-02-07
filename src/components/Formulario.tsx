import React, { ChangeEvent, useState } from 'react'
import { useForm } from '../hooks/useForm';

interface FormData {
    email: string,
    nombre: string,
    edad: number,
}

export const Formulario = () => {

    const { nombre, email, edad, formulario, handleChange } = useForm<FormData>({
        email: 'fernando@gmail.com',
        nombre: 'Fernando Herrera',
        edad: 35,
    });

    // const { email, nombre, edad } = formulario;

    // const [formulario, setFormulario] = useState({
    //     email: '',
    //     nombre: '',
    // });

    // const handleChange = ( {target} : ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = target;

    //     setFormulario({
    //         ...formulario,
    //         [ name ]:value
    //     })
    // }

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={ email } onChange={ (ev) => handleChange(ev)}/>
            </div>    

            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" name="nombre" value={ nombre } onChange={ (ev) => handleChange(ev)}/>
            </div>   

            <div className="mb-3">
                <label className="form-label">Edad</label>
                <input type="number" className="form-control" name="edad" value={ edad } onChange={ (ev) => handleChange(ev)}/>
            </div>   

            <pre> { JSON.stringify(formulario) } </pre>

        </form>
    )
}
