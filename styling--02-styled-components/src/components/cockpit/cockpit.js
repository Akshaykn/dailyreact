import React, {useEffect} from 'react';
import classes from './cockpit.css';

const Cockpit = (props) => {

    useEffect(() => {
      console.log("[cockpit.js] running");
    });
    
    const classesArray = [];
    if (props.persons.length <= 2) {
      classesArray.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      classesArray.push(classes.bold); // classes = ['red', 'bold']
    }
    let btnClass =  '';
    if(props.showPersons) {
      btnClass = classes.Red 
    }
    return (
      <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={classesArray.join(' ')}>This is really working!</p>
        <button className={btnClass} 
                onClick={props.togglePersonsHandler}>
          Toggle Persons
        </button>
      </div>
    );
}
export default Cockpit;