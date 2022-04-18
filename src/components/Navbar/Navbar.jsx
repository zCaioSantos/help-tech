import React from 'react';
import './Navbar.scss';

import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li className='search'>
                    <input type="text" placeholder='Search..'/>
                    <FaSearch />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;