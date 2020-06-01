import React, { Component } from 'react';

// Stateless Functional Component

const NavBar = (props) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Total counters with value greater than zero is:{' '}
        <span className='badge badge-pill badge-secondary'>
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};
// class NavBar extends Component {
//   render() {}
// }

export default NavBar;
