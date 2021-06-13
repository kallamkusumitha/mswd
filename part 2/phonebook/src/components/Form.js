import React from 'react';
const Form = ({newName, setNewName, newNumber, setNewNumber, appendPerson, focusName}) => {
    return (
        <form onSubmit={appendPerson}>
                Name: <input value={newName} onChange={event => setNewName(event.target.value)} 
                    required autoComplete='off' ref={focusName}
                /><br></br>
                Number: <input value={newNumber} onChange={event => setNewNumber(event.target.value)} 
                    required autoComplete='off'
                /><br></br>
                <button type="submit">Add</button>
        </form>
    );
};

export default Form;
