import { Link } from "react-router-dom";
import "./NotFound.scss"

const Notfound = () => {
    return (
        <section className='notfound'>
            <span>
                <h1>404</h1>
                <p>Ops.. algo de errado não está certo!</p>
            </span>
                <Link to="/" className="btn view">
                    Clique para voltar
                </Link>
        </section>
    );
}

export default Notfound;
