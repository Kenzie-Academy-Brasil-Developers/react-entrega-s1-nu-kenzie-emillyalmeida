import "./list.css";
import Card from "../card";

const List = ({ listTransactions, remove }) => {
  return (
    <ul className="ul-total">
      {listTransactions.map((transaction, index) => (
        <Card
          transaction={transaction}
          remover={remove}
          key={index}
          index={index}
        />
      ))}
    </ul>
  );
};

export default List;
