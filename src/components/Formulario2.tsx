import React, { ChangeEvent, useState } from 'react'
import { useForm } from '../hooks/useForm';

export const Formulario2 = () => {

    const { formulario, handleChange } = useForm({
        postal: 'ABC',
        ciudad: 'Ottawa',
    });

    const { postal, ciudad } = formulario;

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Codigo postal</label>
                <input type="text" className="form-control" name="postal" value={ postal } onChange={ (ev) => handleChange(ev)}/>
            </div>    

            <div className="mb-3">
                <label className="form-label">Ciudad</label>
                <input type="text" className="form-control" name="ciudad" value={ ciudad } onChange={ (ev) => handleChange(ev)}/>
            </div>   

            <pre> { JSON.stringify(formulario) } </pre>

        </form>
    )
}
