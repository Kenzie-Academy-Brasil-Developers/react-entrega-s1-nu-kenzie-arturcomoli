import "./styles.css";
import Button from "../Button";
import { useState } from "react";

const Form = ({ listTransactions, setListTransactions }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [maxId, setMaxId] = useState(
    listTransactions.reduce(
      (prev, cur) => (prev.maxId > cur.maxId ? prev.maxId : cur.maxId),
      0
    )
  );

  const gerarId = () => {
    console.log("id gerado");
    setMaxId(maxId + 1);
    console.log(maxId);
    return maxId;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTipo();
    gerarId();
    if (tipo !== undefined && descricao && valor) {
      setListTransactions([
        ...listTransactions,
        { descricao, valor, tipo, maxId },
      ]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="descricao">Descrição</label>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        onChange={(e) => setDescricao(e.target.value)}
      />
      <span>Ex.: Compra de roupas</span>

      <div className="inputs">
        <div className="filho">
          <label htmlFor="valor">Valor</label>
          <input
            type="text"
            placeholder="R$ 1.50"
            onChange={(e) => {
              e.target.value.includes(",")
                ? setValor(Number(e.target.value.replace(",", ".")))
                : setValor(Number(e.target.value));
            }}
          />
        </div>
        <div className="tipo filho">
          <label htmlFor="tipo">Tipo de valor</label>
          <select
            name="tipo"
            className="ls-select"
            id="tipo"
            onChange={(e) => {
              e.target.value !== "-------" && setTipo(e.target.value);
            }}
          >
            <option>-------</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>
      <Button className={"form-button"} children={"Inserir valor"} />
    </form>
  );
};

export default Form;
