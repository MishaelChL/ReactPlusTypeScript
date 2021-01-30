import { type } from 'os';
import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

type TimeArgs = {
    milisegundos: number
}

export const Timer = ( { milisegundos }: TimeArgs ) => {

    const [segundos, setSegundos] = useState(0);

    const ref = useRef<NodeJS.Timeout>();

    useEffect(() => {
        // if(ref.current){
        //     clearInterval( ref.current );
        // } Es lo mismo q la linea de abajo
        ref.current && clearInterval( ref.current );

        ref.current = setInterval( () => setSegundos( s => s + 1 ), milisegundos );
    }, [milisegundos]);

    return (
        <>
            <h4>Timer: <small>{ segundos }</small></h4>
        </>
    )
}
