import React, { useState, useEffect } from 'react';
import { Lista2 } from './Lista2';
import {Link} from 'react-router-dom'

export const Componente2 = function(){
    const [escola, setEscola] = useState('Impacta');
    const [cursos] = useState(['React', 'MEAN', 'Vue']);
    
    useEffect(() => {
        setTimeout(() => setEscola(escola+'1'), 500);
        console.log('Componente 2 foi montado');

        return () => console.log('Componente 2 foi desmontado');
    }, [escola]);

    return (
        <div>
            <h1>Exemplo 2</h1>
            <hr></hr>
            <br></br>
            <h1>Escola: {escola}</h1>
            <h2>Cursos:</h2>
            <div>
                {cursos.map((curso, i) =>
                    <Lista2 key={i} info={curso} />)}
            </div>
            <Link to="/exemplo1">Ir para Exemplo 1</Link>
        </div>
    )
}