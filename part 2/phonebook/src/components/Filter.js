import React from 'react';
const Filter = ({findName, setFindName}) => {
    return (
        <div>
            Search for name: <input value={findName} 
                onChange={event => setFindName(event.target.value)}
            />
        </div>
    );
};
export default Filter;
