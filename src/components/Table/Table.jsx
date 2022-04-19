import React from "react";
import "./Table.scss";

const Table = ({ title, list }) => {
    const colunas = Object.keys(list[0]);

    return (
        <section className="card__table">
            <article className="header">
                <h1 className="title">
                    {title}
                </h1>
                <button className="btn new">Add new</button>
            </article>
            <table className="table">
                <thead>
                    <tr>
                        {colunas.map((colum) => (
                            <th>{colum}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { list.map((obj) => (
                        <tr>
                            {Object.values(obj).map((dado) => (
                                <td>{dado}</td>
                            ))}
                            <td>
                                <button className="btn view">View</button>
                                <button className="btn delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Table;
