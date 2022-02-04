import nu from "./nu-kenzie.svg";
import "./styles.css";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <img src={nu} alt="#" />
      <Button className={"header-button"} children={"Início"}></Button>
    </header>
  );
};

export default Header;
