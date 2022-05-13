import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import Loading from "../../components/Loading/Loading";
import ModalWarn from "../../components/Modal_Warn/Modal_Warn";
import inputs from "../../Config/Inputs.json";
import "./Login.scss";

const Login = () => {
  let navigate = useNavigate();

  let listInputs = inputs.listLogin;
  const [login, setLogin] = useState({});
  const [modal, setModal] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const logar = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await (
      await axios.post(`http://localhost:5000/logins/`, { ...login })
    ).data;
    localStorage.setItem("token", result);
    setIsLoading(false);
    return localStorage.getItem("token") === "true"
      ? navigate("/")
      : setModal({
          type: "error",
          title: "Erro",
          text: `Falha ao tentar fazer login. Esse usuário não existe!`,
          visible: true,
          page: "login",
          close: closeModal,
          ok: closeModal,
        });
  };

  return (
    <section className="login">
      <h1>Help Tech</h1>
      <form onSubmit={logar}>
        {listInputs.map((input) => (
          <FormInput
            key={input.name}
            input={input}
            handOnChange={handleChange}
          />
        ))}
        <button type="submit" onClick={logar} className="btnLogin entrar">
          Entrar
        </button>
      </form>

      {isLoading && (
        <div className="warn">
          <Loading />
        </div>
      )}

      {modal.visible && (
        <div className="warn">
          <ModalWarn info={modal} />
        </div>
      )}
    </section>
  );
};

export default Login;
