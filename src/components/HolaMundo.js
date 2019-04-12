import React, {Component} from "react";

class HolaMundo extends Component {
    render(){
        return(
            <div>
            <h1>deliss me ! adorable</h1>
            <h6>holisss</h6>
            </div>
        );
    }
}

export default HolaMundo;

/*solo se puede mandar un componente a la vez un <di> o un <h1> pero no ambos*/
/*
NO
* <h1>deliss me ! adorable</h1>
            <h6>holisss</h6>
*
*
* SI (porque solo mandamos a un componente DIV que encapsula H1 y H2)
* <div>
            <h1>deliss me ! adorable</h1>
            <h6>holisss</h6>
            </div>
* */