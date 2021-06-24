import React from "react";
import { Link, Route } from "react-router-dom";
// import AboutTeam from "./team";
// import AboutCompany from './company';

const About = () => {
  return (
    <>
      <h2>about</h2>
      {/* <div className="row">
        <div className="col-3">
          <ul>
            <li>
              <Link to="/about/team">Our Team</Link>
            </li>

            <li>
              <Link to="/about/company">Our Company</Link>
            </li>
          </ul>
        </div>
        <div className="col">
             <Route path='/about/team' component={AboutTeam} />
             <Route path='/about/company' component={AboutCompany} />
        </div> 
      </div>*/}
    </>
  );
};

export default About;
