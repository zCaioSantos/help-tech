// import Navbar from '../../components/Navbar/Navbar'
import FormInput from "../../components/FormInput/FormInput";
import Layout from "../../components/Layout/Layout";
import "./home.scss";

export default function Home() {
    return (
        <Layout>
            <FormInput
                type="text"
                text="Nome"
                name="nome"
                placeholder="Informe o nome. Ex.: Nome Sobrenome"
            />
        </Layout>
    );
}
