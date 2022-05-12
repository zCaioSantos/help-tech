import axios from 'axios';
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

    const logar = async (e) => {
        e.preventDefault();
        const result = await (await axios.post(`http://localhost:5000/logins/`, {...login})).data;
        console.log(result)
    }

    return (
        <section className='login'>
            <h1>Help Tech</h1>
            <form onSubmit={logar}>
                {listInputs.map((input) => (
                    <FormInput key={input.name} input={input} handOnChange={handleChange} />
                ))}
                <button type='submit' className='btnLogin entrar'>Entrar</button>
            </form>
        </section>
    );
}

export default Login;
