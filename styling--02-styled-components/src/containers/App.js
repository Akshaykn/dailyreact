import React, { Component } from 'react';
import styled from 'styled-components';
import  classes  from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/cockpit';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[app.js] constructor');
  } 
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  static getDerivedStateFromProps(state, props) {
    console.log('[app.js getDerivedStateFromProps ]', props);
    return state;
  }

  componentDidMount() {
    console.log('[app.js conponnet did mount.....]');
  }

  componentDidUpdate() {
    console.log('[app.js] component did update.....');
  }
  
  componentDidCatch() {
    console.log('[app.js] component did catch....');
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    console.log('[app.js render]');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          ></Persons>
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    const classesArray = [];
    if (this.state.persons.length <= 2) {
      classesArray.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classesArray.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle} 
          persons={this.state.persons}
          togglePersonsHandler={this.togglePersonsHandler} 
          showPersons={this.state.showPersons}  />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
