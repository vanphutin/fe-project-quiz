import _ from "lodash";
const Question = (props) => {
  const { data, index } = props;
  if (_.isEmpty(data)) {
    return <></>;
  }
  const handleHanLeCheckBox = (event, aId, qId) => {
    props.handleCheckBox(aId, qId);
  };
  return (
    <>
      <div className="q-body">
        {data.image ? (
          <div className="q-image">
            <img
              src={`data:image/png;base64, ${data.image}`}
              className="card-img-top"
              alt="..."
            />
          </div>
        ) : (
          <div className="q-image">
            {" "}
            <p className="q-text">This question has no images .</p>{" "}
          </div>
        )}
      </div>
      <div className="question">
        Question {index + 1} : {data.questionDescription} ?
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length &&
          data.answers.map((a, index) => {
            return (
              <div className="a-child" key={`answers-${index}`}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={a.isSelected}
                    onChange={(event) => {
                      handleHanLeCheckBox(event, a.id, data.questionId);
                    }}
                  />
                  <label className="form-check-label">{a.description}</label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Question;
