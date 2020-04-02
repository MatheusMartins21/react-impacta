  
import React from 'react';
import { Cabecalho } from '../../components/cabecalho';
import { ContatoAResponderLista } from './list';

export const ResponderScreen = _ => (
    <div className="container">
        <Cabecalho titulo="Contatos" subtitulo="lista de contatos a responder"/>
        <ContatoAResponderLista/>
    </div>
);