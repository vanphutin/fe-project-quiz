import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiService";
import "./ListQuiz.scss";
import { useNavigate } from "react-router-dom";

const ListQuiz = (props) => {
  const navigate = useNavigate();
  const [arrQuiz, setArrQuiz] = useState([]);
  useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = async () => {
    const res = await getQuizByUser();
    // console.log("check res >>", res);
    if (res && res.EC === 0) {
      setArrQuiz(res.DT);
    }
  };
  return (
    <div className="list-quiz-container container">
      {arrQuiz &&
        arrQuiz.length > 0 &&
        arrQuiz.map((quiz, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img
              src={`data:image/png;base64, ${quiz.image}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Quiz {index + 1}</h5>
              <p className="card-text">{quiz.description}</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/quiz/${quiz.id}`)}
              >
                Start Now
              </button>
            </div>
          </div>
        ))}
      {arrQuiz && arrQuiz.length === 0 && <div>There are no exams... </div>}
    </div>
  );
};

export default ListQuiz;
