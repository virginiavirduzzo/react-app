import React from 'react';
import logo from './logo.svg';
import './App.css';

// const Saluda = props => {
//   console.log(props)
//   return <h3>Hola {props.name}</h3>
// }

class Saluda extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return <h3>Hola {this.props.name}</h3>
  }
}

class Person extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div>
              <span>Nombre: {this.props.name}, </span>
              <span>Apellido: {this.props.surname},</span>
              <span> Edad: {this.props.age}</span>
            </div>)
  }
}

function App() {
  // const hola = <h2>Hola mondo React</h2>
  // const saluda1 = persona => <h3>Hola {persona}</h3>
  return (
    <div className="App">
      <header className="App-header">
        <Saluda name='David' details={{ hobbies: ['coding'] }}/>
        <Person name='David' surname='Pinilla' age={27}/>
        <Person name='Juan' surname='Pérez' age={127}/>
        <Person name='David' surname='Ochando' age={97}/>
        {/* {hola}
        {saluda1('David')}
        {2+2} */}
      </header>
    </div>
  );
}

export default App;
