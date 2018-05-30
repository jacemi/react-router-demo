import React from 'react';

const NoMatch = props => {

  const { location } = props; 
  const { pathname } = location; 
  console.log(location);
  console.log(pathname);
  return(
    <div className="no-match">
    <h2>No match found for requested path: {pathname}</h2>
    </div>
  );
}

export default NoMatch;