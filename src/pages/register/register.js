import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../configs/firebaseconfig";
import "../login/auth.css"

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignIn() {
        createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            console.log(error);
            // ..
          });
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  return (
    <div className="container">
      <header className="header">
        <span>Por favor digite suas informações de cadastro</span>
        
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSignIn} className="button">
          Cadastrar
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/login">Acesse sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}

export default Register