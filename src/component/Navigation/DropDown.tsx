import React from 'react';
import NavigationItems from './NavigationItems';
import "./dropdown.css"

const DropDown = () => {
    return (
        <div className='dropdowns'>

            <input type="checkbox" id="touch" className="touch" />
            <label htmlFor="touch" className="nav-label">
                <span style={{}} id="services"></span>
                <i className="fa-solid fa-angle-down angle" ></i>
            </label>
            <ul className="slide">
                <li><NavigationItems /></li>

            </ul>
        </div>
    );
};

export default DropDown;