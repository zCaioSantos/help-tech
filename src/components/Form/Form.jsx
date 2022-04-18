import React from "react";
import "./Form.scss";

const Table = () => {

    title = "New User"

    return (
        <section className="form">
            <article className="header">
                <h1 className="title">s
                    <FaUserFriends />
                    {title}
                </h1>
                <button className="btn new">Add new</button>
            </article>
        </section>
    );
};

export default Table;
