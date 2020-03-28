import React from 'react';
import {Lista} from './Lista';
import {Link} from 'react-router-dom';

export class Componente1 extends React.Component {

    state = {
        escola: 'Impacta',
        input: 'meu primeiro input',
        cursos: ['React', 'MEAN', "Vue"]
    }

    componentDidMount(){
        console.log('Componente 1 foi montado');
    }

    componentDidUpdate(){
        console.log('Componente 1 foi atualizado');
    }

    componentWillUnmount(){
        console.log('Componente 1 vai ser desmontado');
    }

    setInput(e){
        this.setState({input : e.target.value});
    }

    render() {
        return (
            <div>
                <h1>Escola: {this.state.escola}</h1>
                <input type="text" value={this.state.input}
                    onChange={this.setInput.bind(this)}
                ></input>
                <h2>Cursos:</h2>
                <div>
                    {this.state.cursos.map((curso, i) =>
                        <Lista key={i} informacao={curso} />)}
                </div>
                <Link to="/exemplo2">Teste 2</Link>
            </div>
        );
    }
}