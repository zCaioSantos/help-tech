
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableEdit from '../../components/FormEdit/FormEdit'

import Layout from "../../components/Layout/Layout";
import Loading from "../../components/Loading/Loading";
import Notfoundcomponent from "../../components/NotFoundComponent/NotFoundComponent";



import "./Single.scss";

export default function Single({ type, title }) {

    const { id } = useParams();
    const [form, setForm] = useState({});
    const [dados, setDados] = useState({})
    const [isLoading, setIsLoading] = useState(false); 
    const [notfound, setNotfound] = useState(false)

    const loadDados = async () => {

        setIsLoading(true)
        const result = await axios.get(`http://localhost:5000/${type}/${id}`)
        setDados({...result.data})
        if (result.data === null) {
            setNotfound(true)
        }
        setIsLoading(false)

    }
    
    useEffect(() => {
        loadDados()
        setForm({
            title: title,
            type: type,
        });

        // eslint-disable-next-line
    }, [type, title]);

    if (notfound) {
        return (
            <Layout>
                <Notfoundcomponent type={type}/>
            </Layout>
        )
    }

    return (
        <Layout>
            {isLoading ? <Loading /> : <TableEdit form={form} dados={dados} />}
        </Layout>
    );
}
