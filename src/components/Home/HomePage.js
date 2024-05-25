import { Button } from "react-bootstrap";
import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const HomePage = (props) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  console.log("account >>", account);
  console.log("isAuthenticated >>", isAuthenticated);
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">
          Welcome to
          <span className="homepage-fullname"> Van Phu Tin's</span> official
          page
        </div>
        <div className="title-2">
          Get more data—like signups, feedback, and anything else—with forms
          designed to be refreshingly different.
          {t("description.part2")}
        </div>
        <div className="title-3">
          {isAuthenticated === false ? (
            <button className="btn btn-dark" onClick={() => navigate("/login")}>
              Get started—it's free
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => navigate("/users")}
            >
              Doing Quiz Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
