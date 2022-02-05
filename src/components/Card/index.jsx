import { FaTrash } from "react-icons/fa";
import "./styles.css";
const Card = ({
  className,
  descricao,
  tipo,
  valor,
  deletar,
  itemDeletar,
  tipoDeletar,
  valorDeletar,
}) => {
  return (
    <li className={className}>
      <div className="li-flex">
        <h3>{descricao}</h3>
        <span>R$ {valor}</span>
        <div
          className="trash-icon"
          onClick={() => deletar(itemDeletar, tipoDeletar, valorDeletar)}
        >
          <FaTrash />
        </div>
      </div>
      <p>{tipo}</p>
    </li>
  );
};

export default Card;
