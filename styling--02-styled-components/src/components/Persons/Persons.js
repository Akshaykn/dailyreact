import React, { Component } from 'react';
import Person from './Person/Person';
class Persons extends Component {
    static getDerivedStateFromProps(Props,state){
      console.log('[Persons.js]getDerivedStateFromProps');
      return state;      
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('[Persons.js] shouldComponentUpdate');
      return true;
    }
     
    getSnapshotBeforeUpdate(prevProps,prevState) {
      console.log('[Persons.js] getSnapshotBeforeUpdate');
      return null;
    }
    componentDidUpdate(prevProps,prevState,snapShot) {
      console.log('[Persons.js] componentDidUpdate');
      console.log(snapShot);
    }
    render() {
    console.log('[Persons.js rendering.....]');  
    return this.props.persons.map((person, index) => {
      return (
        <Person
          c lick={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    })
    }
  }
export default Persons;    