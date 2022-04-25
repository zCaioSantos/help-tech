import { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import inputs from '../../Config/Inputs.json'
import "./Login.scss"

const Login = () => {

    let listInputs = inputs.listLogin
    const [login, setLogin] = useState({});

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    return (
        <section className='login'>
            <h1>Help Tech</h1>
            <form>
                {listInputs.map((input) => (
                    <FormInput key={input.nome} input={input} handleChange={handleChange} />
                ))}
                <button type='submit' className='btnLogin entrar'>Entrar</button>
            </form>
        </section>
    );
}

export default Login;
