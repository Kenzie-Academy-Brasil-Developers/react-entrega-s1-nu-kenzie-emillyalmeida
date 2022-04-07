import "./card.css";

const Card = ({ transaction, remover, index }) => {
  const { descricao, tipo, valor } = transaction;
  return (
    <li
      key={index}
      className={tipo === "Entradas" ? "card-info entrada" : "card-info"}
    >
      <div>
        <h3>{descricao}</h3>
        <p>{tipo}</p>
      </div>
      <span>R$ {valor.toFixed(2).replace(".", ",")}</span>
      <button id={index} onClick={(event) => remover(event.target.id)}></button>
    </li>
  );
};

export default Card;
