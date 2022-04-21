
import axios from "axios"
import {React, useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";
import "./List.scss";

export default function List({ type }) {

    const [list, setList] = useState([])
    const [coluns, setListColuns] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const loadList = async () => {
        setIsLoading(true)
        const result = await (await axios.get(`http://localhost:5000/${type}/`)).data
        setList(result)
        console.log(result)
        setListColuns(Object.keys(result[0]))
        setIsLoading(false)
    }

    useEffect(() => {
        loadList();
        // eslint-disable-next-line
    }, [type]);

    return (
        <section className="list">
            <Sidebar />
            <article className="list__container">
                {isLoading ? <Loading/> : <Table title={`List ${type}`} type={type} list={list} colunas={coluns} />}
            </article>
        </section>
    );
};
