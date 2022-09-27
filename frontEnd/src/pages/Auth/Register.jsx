import { Link } from "react-router-dom";
import "./Auth.css";
import { useEffect, useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const user = {
    name,
    email,
    password,
    confirmPassword,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div id="register">
      <h1>ReactGram</h1>
      <p className="subtitle">Cadestre-se para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          id="senha"
          name="senha"
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          id="confirmsenha"
          name="confirmsenha"
          type="password"
          placeholder="Confirme a Senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
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
