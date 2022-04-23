import React, { useState } from "react";
import "./Table.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalLoading from "../Modal_Load/Modal_Load";

const Table = ({type, list, reload}) => {

    const [modal, setModal] = useState({});

    // eslint-disable-next-line
    const [colunas, setColunas] = useState(Object.keys(list).length >= 1 ? Object.keys(list[0]) : null)

    const delet = async (props) => {
        try {
            setModal({
                type: "sucess",
                title: "Deletando",
                visible: true
            })
            await axios.delete(`http://localhost:5000/${type}/${props}`)
            setModal({
                visible: false
            })
            reload()
        } catch (error) {
            console.log("erro ao delet user")
        }
    }

    if (modal.visible) {
        return (
            <ModalLoading info={modal} />
        )
    }

    return (
        <section className="card__table">
            <article className="header">
                <h1 className="title">List {type}</h1>
                <Link to={`/${type}/new`}>
                    <p className="btn new">Add new</p>
                </Link>
            </article>
            {!colunas ? (
                <p style={{color:'#ff4f7b', fontWeight: 'bold'}}>Tabela vazia!</p>
            ) : (
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
                        {list.map((obj) => (
                            <tr key={Object.values(obj)[0]}>
                                {Object.values(obj).map((dado) => (
                                    <td>{dado}</td>
                                ))}
                                <td className="actions">
                                    <Link
                                        to={
                                            `/${type}/` + Object.values(obj)[0]
                                        }
                                    >
                                        <p
                                            className="btn view"
                                        >
                                            View
                                        </p>
                                    </Link>
                                    <button
                                        className="btn delete"
                                        onClick={() => {delet(Object.values(obj)[0])}}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    ); 
};

export default Table;