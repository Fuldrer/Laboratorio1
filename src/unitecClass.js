import React from 'react';
import PropTypes from 'prop-types';

class UnitecClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {unitecClassName: "CCC 307"}; 
        this.update = this.update.bind(this);
        this.update2 = this.update2.bind(this);
        this.update3 = this.update3.bind(this);
    }

    update(){
        this.setState({unitecClassName: "Vanguardia"})
    }

    update2(){
        this.setState({unitecClassName: "Diseño"})
    }

    update3(){
        this.setState({unitecClassName: "Lenguajes"})
    }

    render(){
        return(
            <div>
                <div>Nombre del Estudiante: {this.props.unitecStudentName}</div>
                <div>Nombre de Clase: {this.state.unitecClassName} </div>
                <button onClick= {this.update}>Vanguardia</button>
                <button onClick= {this.update2}>Diseño</button>
                <button onClick= {this.update3}>Lenguajes</button>
            </div>
        );
    }

}

UnitecClass.propTypes ={
    unitecStudentName: PropTypes.string.isRequired
}

UnitecClass.defaultProps ={
    unitecStudentName: "Estudiante"
}

export default UnitecClass;