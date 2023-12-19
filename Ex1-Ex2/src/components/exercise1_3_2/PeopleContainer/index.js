import Media from 'react-media'
import { Route, Routes, Navigate } from 'react-router-dom';
import Person from '../Person';
import PeopleList from '../PeopleList';
import People from '../People/people.json';

const PeopleContainer = () => {
    return (
        <Media
            queries={{
                small: '(max-width:700px)',
            }}
        >
            {(size) =>
                size.small ? (
                    <Routes>
                        <Route path='/people/:id'>
                            <Person />
                        </Route>
                        <Route path='/people/'>
                            <PeopleList />
                        </Route>
                        <PeopleList />
                    </Routes>
                ) : (
                    <div style={{display:'flex'}}>
                        <PeopleList />
                        <Routes>
                            <Route path='/people/:id' element={<Person />} />
                            <Route
                                path='*'
                                element={<Navigate to={`/people/${People[0].id}`} />}
                            />
                        </Routes>
                    </div>
                )
            
            }
        </Media>
    )
}

export default PeopleContainer;