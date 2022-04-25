import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import ModalWarn from "../Modal_Warn/Modal_Warn";
import inputs from '../../Config/Inputs.json'

import "./FormEdit.scss";
import { Suspense } from "react";
import Loading from "../Loading/Loading";

const FormEdit = ({ form, dados}) => {

    const [type, setType] = useState("")
    const [edit, setEdit] = useState({...dados});
    const [modal, setModal] = useState({});

    let list = type === 'users' ? inputs.listUsers : inputs.listProduct;

    // eslint-disable-next-line
    const handleChange = (e) => {
        setEdit({ ...edit, [e.target.name]: e.target.value });
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            setModal({
                type: "normal",
                title: "Cadastro",
                text: "User editado com sucesso!",
                visible: true,
                page: form.type,
                close: closeModal,
                ok: closeModal
            })
            console.log(edit)
            // await axios.put(`http://localhost:5000/${type}/{edit.id}`, {...edit})
        } catch (error) {
            setModal({
                type: "error",
                title: "Error",
                text: `Falha ao editar!`,
                visible: true,
                close: closeModal,
                ok: closeModal
            })
            console.log(error)
        }
    };

    const setValueDados = () => {
        list.forEach(element => {
            element.value =  "parei aqui !"           
        });
        console.log(list)
    }

    useEffect (() => {
        setType(form.type)
        console.log(edit)
    }, [form.type])

    const closeModal = () => {
        setModal(false)
    }

    if (modal.visible) {
        return (
            <ModalWarn info={modal} />
        )
    }

    return (
        <Suspense fallback={<Loading/>} >
            <form onSubmit={submit} className="form">
                <section className="header">
                    <p className="title">Editando dados: {form.type === "users" ? edit.nome : `${edit.marca} - ${edit.modelo}`}</p>
                </section>
                <section className="body">
                    {list.map((input) => (
                        <FormInput key={input.name} input={input} handOnChange={handleChange} />
                    ))}
                </section>
                <section className="footer">
                    <button type="submit" className="btn new">
                        Save
                    </button>
                    <button type="cancel" className="btn cancel">
                            Delete
                    </button>
                    <Link to={`/${form.type}`}>
                        <button type="cancel" className="btn view">
                            Cancel
                        </button>
                    </Link>

                </section>
            </form>
        </Suspense>
    );
};

export default FormEdit;
