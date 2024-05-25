import { Button } from "react-bootstrap";
import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { postProfile } from "../../services/apiService";
import { useEffect } from "react";

const HomePage = (props) => {
  const { t } = useTranslation();

  // useEffect(() => {
  //   showProfile(username,userImage);
  // }, []);

  // const showProfile = async () => {
  //   const res = await postProfile(username,userImage);
  //   console.log("res", res);
  // };

  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  console.log("account >>", account.username);
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
          Hello {account.username ? account.username : <>😊</>}, Welcome to Văn
          Phú Tín! We provide top-quality study materials, diverse exercises,
          and expert-led courses to help you achieve your learning goals. Click{" "}
          {isAuthenticated === false ? (
            <i style={{ fontWeight: "500" }}>"Get started—it's free"</i>
          ) : (
            <i style={{ fontWeight: "500" }}>"Doing Quiz Now"</i>
          )}{" "}
          to explore our exceptional offerings today!
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
