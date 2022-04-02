import { useState } from "react";
import "./form.css";

const Form = ({ add }) => {
  const [descricao, setdescricao] = useState("");
  const [valor, setvalor] = useState("");
  const [tipo, settipo] = useState("");

  const transformObject = (event) => {
    event.preventDefault();
    const data = {};

    data.descricao = descricao;
    data.tipo = tipo;

    if (tipo === "Despesas") {
      data.valor = valor * -1;
    } else {
      data.valor = Number(valor);
    }

    setdescricao("");
    settipo("");
    setvalor("");
    console.log(data);
    return add(data);
  };

  return (
    <form className="form-contas" onSubmit={(event) => transformObject(event)}>
      <label htmlFor="input">Descrição</label>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        value={descricao}
        onChange={(event) => setdescricao(event.target.value)}
        required
      />
      <span>Ex:compras de roupa</span>
      <div className="preco-tipo">
        <label>
          Valor
          <input
            type="number"
            placeholder="R$"
            value={valor}
            onChange={(event) => setvalor(event.target.value)}
            required
          />
        </label>

        <label>
          Tipo do valor
          <select
            value={tipo}
            onChange={(event) => settipo(event.target.value)}
            required
          >
            <option value=""></option>
            <option value="Entradas">Entradas</option>
            <option value="Despesas">Despesas</option>
          </select>
        </label>
      </div>
      <button type="submit">Inserir Valor</button>
    </form>
  );
};
export default Form;
