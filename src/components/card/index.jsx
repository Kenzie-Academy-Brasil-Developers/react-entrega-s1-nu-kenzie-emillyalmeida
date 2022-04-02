const Card = ({ transaction, remover, index }) => {
  const { descricao, tipo, valor } = transaction;
  return (
    <li key={index}>
      <div>
        <h3>{descricao}</h3>
        <span>{tipo}</span>
      </div>
      <span>{valor}</span>
      <button
        id={descricao}
        onClick={(event) => remover(event.target.id)}
      ></button>
    </li>
  );
};

export default Card;
