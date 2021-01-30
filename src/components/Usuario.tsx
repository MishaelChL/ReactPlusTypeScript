import { useState } from 'react';

interface User {
    uid: string;
    name: string;
}

// const tempUser: User = {
//     uid: 'XYZ789',
//     name: 'Juan Perez'
// }

export const Usuario = () => {

    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Jose Mishael Chile Laime'
        });
    }

    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>
            <button onClick={ login } className="btn btn-outline-primary">Login</button>
            {
                (!user)?<pre>No hay usuario</pre>
                    : <pre> { JSON.stringify( user ) } </pre>
            }
            
        </div>
    )
}
