import React from "react";
import Form from '../../components/Form/Form'
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Single.scss";

export default function Single({type}) {

    let inputs;
    switch (type) {
        case "users":
            inputs = [
                {
                    name: "nome",
                    label: "Nome",
                    type: "text",
                    placeholder: "Digite seu nome",
                    value: "Caio Fernandes",
                }
            ];
            break;
        case "products":
            inputs = [
                {
                    name: "nome",
                    label: "Nome",
                    type: "text",
                    placeholder: "Digite seu nome",
                },
            ];
            break;
        default:
            break;
    }

    return (
        <section className="single">
            <Sidebar />
            <article className="single__container">
                <Form title={"Informações: " + inputs[0].name} inputs={inputs}/>
            </article>
        </section>
    );
}
