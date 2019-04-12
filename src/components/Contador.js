import React, {Component} from 'react';

class Contador extends Component{
    state = {
        titulo: 'Omega',
        valor: 0,
        classname: 'badge badge-secondary',
        borrar: 'deliss',
    }




    componentWillMount() {
        console.log('componente se va a montar');
    }

    componentDidMount() {
        console.log('componente se monto');
    }

// metodo incrementar valor
    incrementarValor = () => {
        // this.esCero();
        this.setState({
            valor: this.state.valor + 1
        })
        this.esCero();
        // return this.state.valor = this.state.valor + 1;
    }

    decrementarValor = () => {

        // console.log(this.state);
        // this.state.valor -= 1;
        this.setState({
            valor: this.state.valor -1
        })
        this.esCero();
        // return this.state.valor = this.state.valor - 1;
    }


    // metodo de colores segun el valor
    // si numero es menor a cero
    esCero() {
        if (this.state.valor > 0){
            console.log('es mayor a cero');
            console.log(this.state.classname);
            this.setState({
                className: this.state.classname = 'btn btn-success'
            });
        }
        if (this.state.valor < 0){
                console.log('es menor a cero');
                this.setState({
                    className: this.state.classname = 'btn btn-warning'
                })
            }
        if (this.state.valor === 0 ){
                console.log('es cero');
            this.setState({
                className: this.state.classname = 'btn badge-secondary'
                // valor: this.state.valor = 'cero'
            });
            }
    }

    render() {
        return(
            <div className='container'>
            <h1>{this.state.titulo}</h1>
            <span className={this.state.classname}>{this.state.valor}</span>
                <button onClick={this.incrementarValor} style={{'fontSize':'0.6rem'}} type='button' className='btn btn-primary mr-2 ml-2' >+</button>
                <button  onClick={this.decrementarValor} style={{'fontSize':'0.6rem'}} type='button' className='btn btn-danger'>-</button>
                <button  onClick={() => this.props.borrarme('hola small')} style={{'fontSize':'0.6rem'}} type='button' className='btn btn-danger'>-</button>
            </div>
        );
    }
}

export default Contador;