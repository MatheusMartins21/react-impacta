import React from 'react';
import { Cabecalho } from '../../components/cabecalho';
import { ContatoForm } from './form';

export const ContatoScreen = _ => (
    <div className="container">
        <Cabecalho titulo="Contato" subtitulo="Entre em contato conosco."/>
        <ContatoForm/>
    </div>
);