import "./styles.css";
import Button from "../Button";
const Form = ({ listTransactions, setListTransactions }) => {
  return (
    <form>
      <label htmlFor="descricao">Descrição</label>
      <input type="text" placeholder="Digite aqui sua descrição" />
      <span>Ex.: Compra de roupas</span>

      <div className="inputs">
        <div className="filho">
          <label htmlFor="valor">Valor</label>
          <input type="number" placeholder="R$ 1.50" />
        </div>
        <div className="tipo filho">
          <label htmlFor="tipo">Tipo de valor</label>
          <select name="tipo" id="tipo">
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>
      </div>
      <Button className={"form-button"} children={"Inserir valor"} />
    </form>
  );
};

export default Form;
