import React from 'react';
import { CursoForm } from './form';
import { CursosLista } from './list';

export class CursoCadastro extends React.Component {

    render() {
        const cursos = [
            { _id: 1, codigo: 123, descricao: 'React' },
            { _id: 2, codigo: 321, descricao: 'Mean' },
            { _id: 3, codigo: 112, descricao: 'Vue' }
        ];

        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm/>
                </div>
                <div className="col-md-6">
                    <CursosLista cursos={cursos} />
                </div>
            </div>
        );
    }
}