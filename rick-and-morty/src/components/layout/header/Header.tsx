import { Link } from "react-router-dom";
import {
  ABOUT_URL,
  CONTACTS_URL,
  HOME_URL,
  TABLE_URL,
} from "../../../config/router/urls";
import { Button } from "antd";
import { useAuthentication } from "../../../contexts/AuthContext";

const Header = () => {
  const { performLogin, performLogout, isUserLoggedIn } = useAuthentication();

  const handleAuthentication = () => {
    if (isUserLoggedIn) {
      performLogout();
    } else {
      performLogin();
    }
  };
  return (
    <div>
      <Link to={HOME_URL}>Главная</Link>
      <Link to={TABLE_URL}>Пагинация</Link>
      <Link to={ABOUT_URL}>О нас</Link>
      <Link to={CONTACTS_URL}>Контакты</Link>
      <Button onClick={handleAuthentication}>
        {isUserLoggedIn ? "Выйти" : "Войти"}
      </Button>
    </div>
  );
};

export default Header;
