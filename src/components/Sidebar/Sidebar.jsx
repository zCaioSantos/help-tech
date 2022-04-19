import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

import { FaHome, FaUserAlt, FaLaptop, FaSignOutAlt } from "react-icons/fa";

function Sidebar(props) {
    return (
        <section className='sidebar'>
            <article className="header">
                <p>Help Tech</p>
            </article>

            <hr />

            <article className="body">
        
                <ul>
                    <li className='title'>
                        <p>Main</p>
                    </li>
                    <li className='option'>
                        <FaHome/>
                        <span>Home</span>
                    </li>
                    <li className='option'>
                        <FaUserAlt/>
                        <Link style={{textDecoration: "none"}} to="/users">
                            <span>Users</span>
                        </Link>
                    </li>
                    <li className='option'>
                        <FaLaptop/>
                        <span>Products</span>
                    </li>
                </ul>
            </article>

            <article className="footer">         
                <ul>
                    <li className='title'>
                        <p>User</p>
                    </li>
                    <li className='option'>
                        <FaSignOutAlt/>
                        <span>Logout</span>
                    </li>
                </ul>
            </article>
        </section>
    );
}

export default Sidebar;