import "./Auth.css";
//components
import { Link } from "react-router-dom";
//hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//redux
import { register, reset } from "../../slices/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    dispatch(register(user));
  };

  //Clean all auth states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div id="register">
      <h1>ReactGram</h1>
      <p className="subtitle">Cadestre-se para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input
          name="nome"
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          name="senha"
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
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
