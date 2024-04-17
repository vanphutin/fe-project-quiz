import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import "./DetailQuiz.scss";
import _ from "lodash";
import Question from "./Quesiton";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
const DetailQuiz = (props) => {
  const params = useParams();
  const location = useLocation();
  const [dataQuiz, setDataQuiz] = useState([]);
  const [index, setIndex] = useState(0);

  console.log(location);
  const quizId = params.id;
  useEffect(() => {
    fetchQuestions();
  }, [quizId]);
  const fetchQuestions = async () => {
    const res = await getDataQuiz(quizId);
    console.log("check res >>", res);
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answers = [];
          let questionDescription,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            answers.push(item.answers);
          });
          return { questionId: key, answers, questionDescription, image };
        })
        .value();
      // console.log(data);
      setDataQuiz(data);
    }
  };
  console.log("check data quiz >>", dataQuiz);

  const handlePrev = () => {
    if (index - 1 < 0) return;
    setIndex(index - 1);
  };
  const handleNext = () => {
    if (dataQuiz && dataQuiz.length > index + 1) {
      setIndex(index + 1);
    }
  };
  return (
    <div className="container detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz {quizId} : {location?.state?.quizTile}
        </div>
        {/* <div className="q-body">
          <img src="" alt="" />
        </div> */}
        <div className="q-content">
          <Question
            index={index}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
          />
        </div>
        <div className="footer">
          <button onClick={() => handlePrev()}>Prev</button>
          <button onClick={() => handleNext()}>Next</button>
        </div>
      </div>

      <div className="right-content">Count down</div>
    </div>
  );
};
export default DetailQuiz;
