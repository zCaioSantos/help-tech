import React, { useState } from "react";
import "./Table.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalLoading from "../Modal_Load/Modal_Load";
import ModalWarn from "../Modal_Warn/Modal_Warn";
import InputSearch from "../InputSearch/inputSearch";

const Table = ({ type, list, reload }) => {
    const [modal, setModal] = useState({});
    const [busca, setBusca] = useState("");

    // eslint-disable-next-line
    const [colunas, setColunas] = useState(
        Object.keys(list).length >= 1 ? Object.keys(list[0]) : null
    );

    const closeModal = () => {
        setModal(false);
    };

    const handOnChange = (e) => {
        setBusca(e.target.value);
    };

    const delet = async (props) => {
        try {
            setModal({
                type: "sucess",
                title: "Deletando",
                visible: true,
            });
            await axios.delete(`http://localhost:5000/${type}/${props}`);
            setModal({
                visible: false,
            });
            reload();
        } catch (error) {
            setModal({
                type: "error",
                title: "Erro",
                text: "Não foi possivel deletar esse usuario, pois ele está atrelado a uma maquina!",
                page: type,
                ok: closeModal,
                visible: true,
            });
        }
    };

    if (modal.visible) {
        if (modal.type === "sucess") {
            return <ModalLoading info={modal} />;
        }
        if (modal.type === "error") {
            return <ModalWarn info={modal} />;
        }
    }

    return (
        <section className="card__table">
            <article className="header">
                <h1 className="title">List {type}</h1>
                <InputSearch handOnChange={handOnChange} />
                <Link to={`/${type}/new`}>
                    <p className="btn new">Add new</p>
                </Link>
            </article>
            {!colunas ? (
                <p style={{ color: "#ff4f7b", fontWeight: "bold" }}>
                    Tabela vazia!
                </p>
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
                        
                        {list
                        // eslint-disable-next-line
                            .filter((obj) => {
                                if (busca === "") {
                                    return obj;
                                } else if ( obj.nome?.toLowerCase().includes(busca.toLocaleLowerCase()) || obj.email?.toLowerCase().includes(busca.toLocaleLowerCase()) || obj.marca?.toLowerCase().includes(busca.toLocaleLowerCase()) || obj.modelo?.toLowerCase().includes(busca.toLocaleLowerCase()) || obj.telefone?.includes(busca)) {
                                    return obj;
                                }
                            })
                            .map((obj) => (
                                <tr key={Object.values(obj)[0]}>
                                    {Object.values(obj).map((dado) => (
                                        <td>{dado}</td>
                                    ))}
                                    <td>
                                        <div className="actions">
                                            <Link
                                                to={
                                                    `/${type}/` +
                                                    Object.values(obj)[0]
                                                }
                                            >
                                                <p className="btn view">View</p>
                                            </Link>
                                            <button
                                                className="btn delete"
                                                onClick={() => {
                                                    delet(
                                                        Object.values(obj)[0]
                                                    );
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
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
