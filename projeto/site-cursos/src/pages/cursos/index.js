import React from 'react';
import { Cabecalho } from '../../components/cabecalho';
import { CursoCadastro } from './cadastro';

export class CursosScreen extends React.Component{
    render(){
        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo="Cadastro de cursos"></Cabecalho>
                <CursoCadastro/>
            </div>
        );
    }
}