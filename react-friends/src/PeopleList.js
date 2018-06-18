import React from 'react';

const PeopleList = props => {
    return <div>{props.peoples.map(person => <div key={Math.random()} >
        First Name: {person.first_name} Last Name: {person.last_name} Email: {person.email}        
        </div>)}</div>;
};

export default PeopleList;