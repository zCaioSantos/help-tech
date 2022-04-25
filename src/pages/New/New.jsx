import { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import Layout from "../../components/Layout/Layout";
import "./New.scss";

export default function New({ type, title }) {
    const [form, setForm] = useState({});
    
    useEffect(() => {
        setForm({
            title: title,
            type: type,
        });
    }, [type, title]);

    return (
        <Layout>
            <Form form={form}/>
        </Layout>
    );
}
