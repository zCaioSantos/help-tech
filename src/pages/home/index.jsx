import Layout from "../../components/Layout/Layout";
import "./home.scss";

export default function Home() {
    return (
        <Layout>
            <section className="home">
                <div className="header">
                    <img src="https://user-images.githubusercontent.com/81544166/166292612-ccffc310-2c61-427f-93fe-a919bf4734ef.png" width={200} alt="Logo da Help Tech" />
                </div>
                <div className="body">
                    <p>Desenvolvido por Caio Santos</p>
                </div>
                <div className="footer"></div>
            </section>
        </Layout>
    );
}
