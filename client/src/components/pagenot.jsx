import React from 'react';
import { NavLink } from 'react-router-dom';
//sfc
const PageNotFound = () => {
    return (
        <>
        <h2>404 page Not Found</h2>
        <NavLink to="/">Go Back</NavLink>
        </>
      );
}
 
export default PageNotFound;