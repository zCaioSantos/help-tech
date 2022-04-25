import { Link } from "react-router-dom";
import "./NotFoundComponent.scss"

const Notfoundcomponent = ({ type }) => {
    return (
        <section className='notfoundcomponent'>
            <span>
                <h1>404</h1>
                <p>Ops.. {type} não encontrado!</p>
            </span>
                <Link to={`/${type}`} className="btn view">
                    Clique para voltar
                </Link>
        </section>
    );
}

export default Notfoundcomponent;
