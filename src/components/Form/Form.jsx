import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import ModalWarn from "../Modal_Warn/Modal_Warn";
import inputs from '../../Config/Inputs.json'

import "./Form.scss";

const Form = ({ form }) => {

    const [type, setType] = useState("")
    let list = type === 'users' ? inputs.listUsers : inputs.listProduct;

    const [novo, setNovo] = useState({});
    const [modal, setModal] = useState({});
    // eslint-disable-next-line
    const handleChange = (e) => {
        setNovo({ ...novo, [e.target.name]: e.target.value });
    };

    const closeModal = () => {
        setModal(false)
    }

    const submit = async (e) => {
        e.preventDefault();
        try {
            setModal({
                type: "normal",
                title: "Cadastro",
                text: "User cadastrado com sucesso!",
                visible: true,
                page: form.type,
                close: closeModal,
                ok: closeModal
            })
            console.log(novo)
            await axios.post(`http://localhost:5000/${type}/`, {...novo})
        } catch (error) {
            setModal({
                type: "error",
                title: "Error",
                text: `Falha ao cadastrar!`,
                visible: true,
                close: closeModal,
                ok: closeModal
            })
            console.log(error)
        }
    };

    useEffect (() => {
        setType(form.type)
    }, [form.type])

    if (modal.visible) {
        return (
            <ModalWarn info={modal} />
        )
    }

    return (
        <form onSubmit={submit} className="form">
            <section className="header">
                <p className="title">{form.title}</p>
            </section>
            <section className="body">
                {list.map((input) => (
                    <FormInput key={input.name} input={input} handOnChange={handleChange} />
                ))}
            </section>
            <section className="footer">
                <button type="submit" className="btn new">
                    New
                </button>
                <Link to={`/${form.type}`}>
                    <button type="cancel" className="btn cancel">
                        Cancel
                    </button>
                </Link>
            </section>
        </form>
    );
};

export default Form;
