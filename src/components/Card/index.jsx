import { FaTrash } from "react-icons/fa";
import "./styles.css";
const Card = ({ className }) => {
  return (
    <li className={className}>
      <div className="li-flex">
        <h3>Input de descrição</h3>
        <span>Input de valor</span>
        <div className="trash-icon">
          <FaTrash />
        </div>
      </div>
      <p>Input de tipo</p>
    </li>
  );
};

export default Card;
