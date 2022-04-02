import "./reset.css";
import "./App.css";
import { useState } from "react";
import Form from "./components/form";
import List from "./components/list";

function App() {
  const [login, setlogin] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);

  const addList = (value) => {
    return setListTransactions([...listTransactions, value]);
  };

  const removeList = (value) => {
    console.log(value);
    const remover = listTransactions.filter(
      (transactions) => transactions.descricao !== value
    );
    return setListTransactions(remover);
  };

  const filtros = (categoria) => {
    if (categoria === "todos") {
      return setListTransactions(listTransactions);
    } else {
      const filter = listTransactions.filter(
        (itens) => itens.tipo === categoria
      );
      console.log(filter);
      return <List remove={removeList} listTransactions={filter} />;
    }
  };

  return (
    <div className="App">
      {login ? (
        <>
          <header className="App-header">
            <h1>"</h1>
            <button onClick={() => setlogin(false)}>Inicio</button>
          </header>
          <section className="container-total">
            <section className="container-form">
              <Form add={addList} />
              {listTransactions.length > 0 ? (
                <section>
                  <div>
                    <p>Valor Total:</p>
                    <span>O valor se refere as entradas</span>
                  </div>
                  <span>
                    {listTransactions.reduce(
                      (sum, valor) => sum + valor.valor,
                      0
                    )}
                  </span>
                </section>
              ) : (
                <div></div>
              )}
            </section>
            <section className="conatiner-list">
              <div className="filtros">
                <h3>Resumo finaceiro</h3>
                <button
                  className="selected"
                  id="todos"
                  onClick={(event) => filtros(event.target.id)}
                >
                  Todos
                </button>
                <button
                  id="Entradas"
                  onClick={(event) => filtros(event.target.id)}
                >
                  Entradas
                </button>
                <button
                  id="Despesas"
                  onClick={(event) => filtros(event.target.id)}
                >
                  Despesas
                </button>
              </div>
              <div className="financeiro">
                {listTransactions.length > 0 ? (
                  <List
                    remove={removeList}
                    listTransactions={listTransactions}
                  />
                ) : (
                  <div>
                    <h3>Vocẽ ainda não possui lançamentos</h3>
                    <svg></svg>
                  </div>
                )}
              </div>
            </section>
          </section>
        </>
      ) : (
        <section className="Home">
          <section className="entrar">
            <h1>''</h1>
            <h2>Centralize o controle das suas finanças</h2>
            <p>de forma rapida e segura</p>
            <button onClick={() => setlogin(true)}>Inicar</button>
          </section>
          <section className="img-Home">
            <div></div>
          </section>
        </section>
      )}
    </div>
  );
}

export default App;
