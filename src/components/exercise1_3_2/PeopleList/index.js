// PeopleList.js
import React from 'react';
import { Link } from 'react-router-dom';
import people from '../People/people.json';

const PeopleList = () => {
  return (
    <nav className="PeopleList">
      <ul>
        {people.map((person) => (
          <li key={`person-${person.id}`}>
            <Link to={`/people/${person.id}`}>
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PeopleList;