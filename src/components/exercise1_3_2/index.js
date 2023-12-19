import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PeopleContainer from "./PeopleContainer";

function Exercise1_3_2() {
  return (
    <Router>
    <Routes>
      <Route path='/people' element={<PeopleContainer />} />
    </Routes>
    <Link to='/people'>People</Link>
  </Router>
  );
}

export default Exercise1_3_2;
