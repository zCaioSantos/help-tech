import React from "react";
import FormInput from "../FormInput/FormInput";
import "./Form.scss";

const Form = ({title, inputs}) => {

    inputs = [
        {
            name: "nome",
            label: "Nome",
            type: "text",
            placeholder: "Digite seu nome"
        },
        {
            name: "email",
            label: "E-mail",
            type: "email",
            placeholder: "Digite seu email"
        },
        {
            name: "departamento",
            label: "Departamento",
            type: "text",
            placeholder: "Informe o departamento do usuario"
        }
    ]

    return (
        <form className="form">
            <section className="header">
                <p className="title">{title}</p>
            </section>
            <section className="body">
                <FormInput inputs={inputs}/>
            </section>
            <section className="footer">
                <button className="btn new">New</button>
                <button className="btn cancel">Cancel</button>
            </section>
        </form>
    );
};

export default Form;
