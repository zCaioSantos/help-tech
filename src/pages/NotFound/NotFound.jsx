import { Link } from "react-router-dom";
import "./NotFound.scss"

const Notfound = () => {
    return (
        <section className='notfound'>
            <h1>404</h1>
            <span>
                <p>Ops.. algo de errado não está certo!</p>
                <Link to="/" className="btn view">
                    Clique para voltar
                </Link>
            </span>
        </section>
    );
}

export default Notfound;
