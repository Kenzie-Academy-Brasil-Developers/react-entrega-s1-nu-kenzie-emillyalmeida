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
    const remover = listTransactions.filter(
      (transactions) => transactions.descricao !== value.descricao
    );
    return setListTransactions(remover);
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
              {listTransactions > 0 ? (
                <section>
                  <div>
                    <p>Valor Total :</p>
                    <span>O valor se refere as entradas</span>
                  </div>
                  <span>
                    {listTransactions.reduce(
                      (sum, valor) => sum + valor.preco,
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
                <button>Todos</button>
                <button>Entradas</button>
                <button>Despesas</button>
              </div>
              <div className="financeiro">
                {listTransactions > 0 ? (
                  <List
                    remove={removeList}
                    listTransactions={listTransactions}
                  />
                ) : (
                  <div>
                    <h3>Vocẽ ainda não possui lançamentos</h3>
                    <img src="../public/img/NoCard.svg" alt="sem lançamentos" />
                  </div>
                )}
              </div>
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
