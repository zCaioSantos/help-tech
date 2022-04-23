import axios from "axios";

import { React, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Loading from "../../components/Loading/Loading";
import Table from "../../components/Table/Table";
import "./List.scss";

export default function List({ type }) {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const loadTable = async () => {
        setIsLoading(true);
        const result = await (
            await axios.get(`http://localhost:5000/${type}/`)
        ).data;
        setList(result);
        setIsLoading(false);
    };

    useEffect(() => {
        loadTable();

        // eslint-disable-next-line
    }, [type]);

    return (
        <Layout>
            {isLoading ? (
                <Loading />
            ) : (
                <Table list={list} type={type} reload={loadTable} />
            )}
        </Layout>
    );
}
