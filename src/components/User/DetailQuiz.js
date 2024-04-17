import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import "./DetailQuiz.scss";
import _ from "lodash";
const DetailQuiz = (props) => {
  const params = useParams();
  const location = useLocation();
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
      console.log(data);
    }
  };
  return (
    <div className="container detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz {quizId} : {location?.state?.quizTile}
        </div>
        <div className="q-body">
          <img src="" alt="" />
        </div>
        <div className="q-content">
          <div className="question">Question 1 : What time ? </div>
          <div className="answer">
            <div className="a-child">A. fsf</div>
            <div className="a-child">B. fsf</div>
            <div className="a-child">C. fsf</div>
          </div>
        </div>
        <div className="footer">
          <button>Back</button>
          <button>Next</button>
        </div>
      </div>

      <div className="right-content">Count down</div>
    </div>
  );
};
export default DetailQuiz;
