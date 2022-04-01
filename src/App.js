import "./App.css";
import { useState } from "react";
import Form from "./components/form";

function App() {
  const [login, setlogin] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);

  const addList = (value) => {
    return setListTransactions([...listTransactions, value]);
  };
  return (
    <div className="App">
      {login ? (
        <>
          <header className="App-header">
            <h1>
              <img src="../public/img/Nu_Kenzie.svg" alt="Nu kenzie" />
            </h1>
            <button onClick={() => setlogin(false)}>Inicio</button>
          </header>
          <section className="container-total">
            <section className="container-form">
              <Form add={addList} />
            </section>
            <section className="conatiner-list">
              <div className="filtros">
                <h3>Resumo finaceiro</h3>
                <button>Todos</button>
                <button>Entradas</button>
                <button>Despesas</button>
              </div>
              <div className="financeiro"></div>
            </section>
          </section>
        </>
      ) : (
        <section className="Home">
          <section className="entrar">
            <h1>
              <img src="../public/img/Nu_Kenzie.svg" alt="Nu kenzie" />
            </h1>
            <h2>Centralize o controle das finanças</h2>
            <p>de forma rapida e segura</p>
            <button onClick={() => setlogin(true)}>Inicar</button>
          </section>
          <section className="img-Home">
            <img src="../public/img/Group_277.svg" alt="imagem do app" />
          </section>
        </section>
      )}
    </div>
  );
}

export default App;
