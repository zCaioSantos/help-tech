import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.scss";

import { FaHome, FaUserAlt, FaLaptop, FaSignOutAlt } from "react-icons/fa";

function Sidebar(props) {

    let navigate = useNavigate();

    const singOut = () => {
        localStorage.setItem('token', false)
        return navigate("/login");
    }

    return (
        <section className="sidebar">
            <article className="header">
                <p>Help Tech</p>
            </article>

            <hr />

            <article className="body">
                <ul>
                    <li className="title">
                        <p>Main</p>
                    </li>

                    <Link to="/">
                        <li className="option">
                            <FaHome />
                            <span>Home</span>
                        </li>
                    </Link>
                    <Link to="/users">
                        <li className="option">
                            <FaUserAlt />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products">
                        <li className="option">
                            <FaLaptop />
                            <span>Products</span>
                        </li>
                    </Link>
                </ul>
            </article>

            <article className="footer">
                <ul>
                    <li className="title">
                        <p>User</p>
                    </li>
                    
                    <li className="option red"  onClick={singOut}>
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </li>
                    
                </ul>
            </article>
        </section>
    );
}

export default Sidebar;
