import { Link } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="register">
      <h1>ReactGram</h1>
      <p className="subtitle">Cadestre-se para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input id="nome" name="nome" type="text" placeholder="Nome" />
        <input id="email" name="email" type="email" placeholder="Email" />
        <input id="senha" name="senha" type="password" placeholder="Senha" />
        <input
          id="confirmsenha"
          name="confirmsenha"
          type="password"
          placeholder="Confirme a Senha"
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta?
        <Link to="/login"> Clique aqui</Link>
      </p>
    </div>
  );
};

export default Register;
