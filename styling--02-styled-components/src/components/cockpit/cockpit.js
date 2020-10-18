import React from 'react';
import classes from './cockpit.css';

const cockpit = (props) => {
    const classesArray = [];
    if (props.persons.length <= 2) {
      classesArray.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      classesArray.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
      <div className={classes.cockpit}>
        <h1>Hi, I'm a React App</h1>
        <p className={classesArray.join(' ')}>This is really working!</p>
        <button className={classes.Button} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
      </div>
    );
}