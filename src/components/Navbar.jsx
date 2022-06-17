import React, { useContext } from 'react';
import { ThemeContext } from '../context/Themecontext';

const Navbar = () => {

    const {islight, toggletheme} = useContext(ThemeContext);

  return (
    <div className='navbar'>
        <div className='heading'>
        <h2>My Dashboard</h2>
    </div>

    <div>
    <label  class="switch">
  <input onClick={toggletheme} type="checkbox" />
  <span class="slider round"></span>
</label>
    </div>

    </div>
  )
}

export default Navbar;