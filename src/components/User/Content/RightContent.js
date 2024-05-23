import CountDown from "./CountDown";
import "./RightContent.scss";

const RightContent = (props) => {
  const { dataQuiz } = props;
  console.log(dataQuiz);

  const onTimeUp = (props) => {
    alert("Full time");
    // props.handleFinish();
  };

  const getClassQuestion = (index, question) => {
    if (question && question.answers.length > 0) {
      let isUnQuestion = question.answers.find((a) => a.isSelected === true);
      // console.log("index", index, isUnQuestion);
      if (isUnQuestion) {
        return "question selected";
      }
    }
    return "question";
  };
  return (
    <>
      <div className="main-timer">
        <CountDown onTimeUp={onTimeUp} />
      </div>
      <div className="main-question">
        {dataQuiz &&
          dataQuiz.length &&
          dataQuiz.map((item, index) => {
            return (
              <div
                key={`question-ab- ${index}`}
                className={getClassQuestion(index, item)}
                onClick={() => {
                  props.setIndex(index);
                }}
              >
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RightContent;
