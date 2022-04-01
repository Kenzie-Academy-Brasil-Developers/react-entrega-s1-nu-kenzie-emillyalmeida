import { useState } from "react";

const Form = (add) => {
  const [descricao, setdescricao] = useState("");
  const [valor, setvalor] = useState(0);
  const [tipo, settipo] = useState("");

  const transformObject = () => {
    const data = {};

    data.descricao = descricao;
    data.tipo = tipo;

    if (tipo === "Despesas") {
      data.valor = valor * -1;
    } else {
      data.valor = valor;
    }

    return add(data);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        value={descricao}
        onChange={(event) => setdescricao(event.target.value)}
      />
      <span>Ex:compras de roupa</span>
      <div className="preco-tipo">
        <label>
          valor
          <input
            type="number"
            placeholder="R$"
            value={valor}
            onChange={(event) => setvalor(event.target.value)}
          />
        </label>

        <label>
          Tipo do valor
          <select
            value={tipo}
            onChange={(event) => settipo(event.target.value)}
          >
            <option value="Entradas">Entradas</option>
            <option value="Despesas">Despesas</option>
          </select>
        </label>
      </div>
      <button onClick={() => transformObject()}>Inserir Valor</button>
    </form>
  );
};
export default Form;
