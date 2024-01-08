import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import AntdTable from "./components/AntdTable/AntdTable";
import {
  ABOUT_URL,
  CONTACTS_URL,
  HOME_URL,
  TABLE_URL,
} from "./config/router/urls";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./components/Contacts/Contacts";
import Layout from "./components/layout/Layout";
import { AuthenticationProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Layout>
          <Routes>
            <Route path={HOME_URL} Component={Home}>
              Главная
            </Route>
            <Route path={TABLE_URL} Component={AntdTable}>
              Пагинация
            </Route>
            <Route path={ABOUT_URL} Component={AboutUs}>
              О нас
            </Route>
            <Route path={CONTACTS_URL} Component={Contacts}>
              Контакты
            </Route>
          </Routes>
        </Layout>
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;
