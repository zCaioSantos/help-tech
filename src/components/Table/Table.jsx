import React from "react";
import "./Table.scss";
import { Link } from "react-router-dom";

const Table = ({ title, type }) => {
    
    let list;
    switch (type) {
        case 'users':
            list=[{Id: 1, name: "Caio", email: ""}]
            break;
        case 'products':
            list=[{Id: 1, name: "Notebook Lenovo"}]
            break;
        default:
            break;
    }

    const colunas = Object.keys(list[0]);

    return (
        <section className="card__table">
            <article className="header">
                <h1 className="title">
                    {title}
                </h1>
                <Link to={`/${type}/new`}>
                    <p className="btn new">Add new</p>
                </Link>
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
                        <tr key={Object.values(obj)[0]}>
                            {Object.values(obj).map((dado) => (
                                <td>{dado}</td>
                            ))}
                            <td className="actions">
                                <Link to={`/${type}/` + Object.values(obj)[0]} >
                                    <p className="btn view">View</p>
                                </Link>
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
