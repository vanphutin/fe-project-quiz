import "./App.scss";
import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import PerfectScrollbar from "react-perfect-scrollbar";
const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container"></div>
      <div className="sidenav-container"></div>
      <div className="app-content">
        <PerfectScrollbar>
          <Outlet />
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default App;
