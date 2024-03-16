import "./App.scss";
import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container"></div>
      <div className="sidenav-container"></div>
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
