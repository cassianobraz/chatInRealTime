import { useRef } from "react";
import io from "socket.io-client";

export function Join({ setChatVisibility, setSocket }) {
  const userNameRef = useRef();

  const handleSubmit = () => {
    const userName = userNameRef.current.value;
    if (!userName.trim()) return;
    const socket = io.connect("http://localhost:3333");
    socket.emit("set_username", userName);
    setSocket(socket);
    setChatVisibility(true);
  };

  return (
    <div>
      <h1>Join</h1>
      <input type="text" ref={userNameRef} placeholder="Nome do usuário" />
      <button onClick={() => handleSubmit()}>Entrar</button>
    </div>
  );
}
