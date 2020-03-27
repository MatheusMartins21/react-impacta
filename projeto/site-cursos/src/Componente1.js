import React from 'react';
import {Lista} from './Lista';
import {Link} from 'react-router-dom'

export class Componente1 extends React.Component{

    state ={
        escola: 'Impacta',
        cursos: ['React', 'MEAN', 'Vue']
    }

    componentDidMount(){
        console.log('Componente foi montado');
        setTimeout(() => this.setState({escola: 'Impacta 2020'}), 3000);
    }

    componentDidUpdate(){
        console.log('Componente foi atualizado');
        setTimeout(() => this.setState({escola: this.state.escola+'1'}), 500);
    }

    componentWillUnmount(){
        console.log('Componente vai ser desmontado');
    }

    render() {
        return (
            <div>
                <h1>Exemplo 1</h1>
                <hr></hr>
                <br></br>
                <h1>Escola: {this.state.escola}</h1>
                <h2>Cursos:</h2>
                <div>
                    {this.state.cursos.map((curso, i) =>
                        <Lista key={i} info={curso} />)}
                </div>
                <Link to="/exemplo2">Ir para Exemplo 2</Link>
            </div>
        )
    }
}