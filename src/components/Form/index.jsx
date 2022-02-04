const Form = () => {
  return (
    <form>
      <label htmlFor="descricao">Descrição</label>
      <input type="text" placeholder="Digite aqui sua descrição" />
      <span>Ex.: Compra de roupas</span>

      <div>
        <label htmlFor="valor">Valor</label>
        <input type="number" placeholder="R$ 1.50" />
        <label htmlFor="tipo">Tipo de valor</label>
        <select name="tipo" id="tipo">
          <option value="entrada">Entrada</option>
          <option value="despesa">Despesa</option>
        </select>
      </div>
      <button>Inserir valor</button>
    </form>
  );
};

export default Form;
