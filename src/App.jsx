import { useState } from "react";
import { db } from "./firebase";
import { ref, push } from "firebase/database";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuario = { nombre, edad, email };

    push(ref(db, "usuarios"), usuario)
      .then(() => {
        setMensaje("Usuario registrado correctamente");
        setNombre("");
        setEdad("");
        setEmail("");
      })
      .catch(() => {
        setMensaje("Error al registrar usuario");
      });
  };

  return (
    <div className="container">
      <h1 className="titulo">Registro de Usuario</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
          required
        />

        <label>Edad</label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          placeholder="Ingresa tu edad"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu email"
          required
        />

        <button type="submit">Registrar</button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default App;
