import { Link } from "react-router-dom";
import "./NotFoundComponent.scss"

const Notfoundcomponent = ({ type }) => {
    return (
        <section className='notfoundcomponent'>
            <h1>404</h1>
            <span>
                <p>Ops.. {type} não encontrado!</p>
                <Link to={`/${type}`} className="btn view">
                    Clique para voltar
                </Link>
            </span>
        </section>
    );
}

export default Notfoundcomponent;
