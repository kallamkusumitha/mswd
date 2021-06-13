import React from 'react';
const person = ({persons, findName, removePerson}) => {
    return (
        persons.length ?
        <ul style={{listStyle: 'none', padding: 0}}>
            {
                persons.filter(person => person.name.toLowerCase().includes(findName.toLowerCase()))
                .map(person => (
                    <div key={person.name}>
                        {person.name} {person.number} &nbsp;
                        <button onClick={() => removePerson(person.id, person.name)}>Delete</button>
                    </div>
                ))
            }
        </ul>
        :
        <p>Loading contacts...</p>
    );
};

export default person;
