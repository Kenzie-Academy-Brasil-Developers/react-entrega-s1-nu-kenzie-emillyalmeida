const Form = () => {
  return (
    <form>
      <input type="text" placeholder="Digite aqui sua descrição" />
      <span>Ex:compras de roupa</span>
      <div className="preco-tipo">
        <label>
          valor
          <input type="number" placeholder="R$" />
        </label>

        <label>
          Tipo do valor
          <select>
            <option value="Entradas">Entradas</option>
            <option value="Despesas">Despesas</option>
          </select>
        </label>
      </div>
      <button>Inserir Valor</button>
    </form>
  );
};
export default Form;
