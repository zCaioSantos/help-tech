import Layout from "../../components/Layout/Layout";
import "./home.scss";
import { FiUsers, FiServer } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Layout>
            <section className="home">
                <div className="header">
                    <img src="https://user-images.githubusercontent.com/81544166/166292612-ccffc310-2c61-427f-93fe-a919bf4734ef.png" width={200} alt="Logo da Help Tech" />
                    <p>Desenvolvido por Caio Santos</p>
                </div>
                <div className="body">
                    <ul>
                        <Link to="/users">
                            <li className="Card">
                                <FiUsers size={40} strokeWidth="1px" />
                                <p>Users</p>
                            </li>
                        </Link>
                        <Link to="/products">
                            <li className="Card">
                                <FiServer size={40} strokeWidth="" />
                                <p>Products</p>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="footer"></div>
            </section>
        </Layout>
    );
}
