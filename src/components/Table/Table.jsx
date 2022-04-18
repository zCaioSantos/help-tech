import React from "react";
import "./Table.scss";

import { FaUserFriends } from "react-icons/fa";

const Table = ({title, coluns, object}) => {
    title = "List Users"
    coluns = ["ID", "Name", "E-mail", "Data-Nascimento"];
    object = [
        {
            Id: 1,
            Name: "Caio Fernandes dos Santos",
            Email: "caio@gmail.com.br",
            DataNascimento: "13/06/2000",
        },
        {
            Id: 2,
            Name: "Rafael Santos",
            Email: "rafael@gmail.com.br",
            DataNascimento: "17/04/1998",
        },
        {
            Id: 1,
            Name: "Caio Fernandes dos Santos",
            Email: "caio@gmail.com.br",
            DataNascimento: "13/06/2000",
        },
        {
            Id: 2,
            Name: "Rafael Santos",
            Email: "rafael@gmail.com.br",
            DataNascimento: "17/04/1998",
        },
        {
            Id: 1,
            Name: "Caio Fernandes dos Santos",
            Email: "caio@gmail.com.br",
            DataNascimento: "13/06/2000",
        },
        {
            Id: 2,
            Name: "Rafael Santos",
            Email: "rafael@gmail.com.br",
            DataNascimento: "17/04/1998",
        },
        {
            Id: 1,
            Name: "Caio Fernandes dos Santos",
            Email: "caio@gmail.com.br",
            DataNascimento: "13/06/2000",
        },
        {
            Id: 2,
            Name: "Rafael Santos",
            Email: "rafael@gmail.com.br",
            DataNascimento: "17/04/1998",
        },
        {
            Id: 1,
            Name: "Caio Fernandes dos Santos",
            Email: "caio@gmail.com.br",
            DataNascimento: "13/06/2000",
        },
        {
            Id: 2,
            Name: "Rafael Santos",
            Email: "rafael@gmail.com.br",
            DataNascimento: "17/04/1998",
        },
        {
            Id: 1,
            Name: "Caio Fernandes dos Santos",
            Email: "caio@gmail.com.br",
            DataNascimento: "13/06/2000",
        },
        {
            Id: 2,
            Name: "Rafael Santos",
            Email: "rafael@gmail.com.br",
            DataNascimento: "17/04/1998",
        },
        {
            Id: 1,
            Name: "Caio Fernandes dos Santos",
            Email: "caio@gmail.com.br",
            DataNascimento: "13/06/2000",
        },
        {
            Id: 2,
            Name: "Rafael Santos",
            Email: "rafael@gmail.com.br",
            DataNascimento: "17/04/1998",
        },
        {
            Id: 1,
            Name: "Caio Fernandes dos Santos",
            Email: "caio@gmail.com.br",
            DataNascimento: "13/06/2000",
        },
        {
            Id: 2,
            Name: "Rafael Santos",
            Email: "rafael@gmail.com.br",
            DataNascimento: "17/04/1998",
        },
        {
            Id: 1,
            Name: "Caio Fernandes dos Santos",
            Email: "caio@gmail.com.br",
            DataNascimento: "13/06/2000",
        },
        {
            Id: 2,
            Name: "Rafael Santos",
            Email: "rafael@gmail.com.br",
            DataNascimento: "17/04/1998",
        },
        {
            Id: 1,
            Name: "Caio Fernandes dos Santos",
            Email: "caio@gmail.com.br",
            DataNascimento: "13/06/2000",
        },
        {
            Id: 2,
            Name: "Rafael Santos",
            Email: "rafael@gmail.com.br",
            DataNascimento: "17/04/1998",
        },
        {
            Id: 1,
            Name: "Caio Fernandes dos Santos",
            Email: "caio@gmail.com.br",
            DataNascimento: "13/06/2000",
        },
        {
            Id: 2,
            Name: "Rafael Santos",
            Email: "rafael@gmail.com.br",
            DataNascimento: "17/04/1998",
        },
    ];

    return (
        <section className="card__table">
            <article className="header">
                <h1 className="title">
                    <FaUserFriends />
                    {title}
                </h1>
                <button className="btn new">Add new</button>
            </article>
            <table className="table">
                <thead>
                    <tr>
                        {coluns.map((colum) => (
                            <th>{colum}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {object.map((object) => (
                        <tr key={object.Id}>
                            <td>{object.Id}</td>
                            <td>{object.Name}</td>
                            <td>{object.Email}</td>
                            <td>{object.DataNascimento}</td>
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
