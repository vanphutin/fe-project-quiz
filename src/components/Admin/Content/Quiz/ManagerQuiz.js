import { difference, values } from "lodash";
import "./ManagerQuiz.scss";
import Select from "react-select";
import { useEffect, useState } from "react";
import { postCreatNewQuiz } from "../../../../services/apiService";
import { toast } from "react-toastify";
import TableQuiz from "./TableQuiz";
import Accordion from "react-bootstrap/Accordion";

const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];
const ManagerQuiz = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("EASY");
  const [image, setImage] = useState({ src: null, name: null });

  const handleChangeFile = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };
  const handleSubmitQuiz = async () => {
    const res = await postCreatNewQuiz(description, name, type?.value, image);
    if (!name && !description) {
      toast.error("Name/Description is required");
      return;
    }
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setName("");
      setDescription("");
      setImage({ src: null, name: null });
    } else {
      toast.error(res.EM);
    }
    // console.log("res >> ", res);
  };
  return (
    <div className="quiz-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Manager quizzes</Accordion.Header>
          <Accordion.Body>
            <hr />
            <div className="add-new">
              <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Add new quiz</legend>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your quiz name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <label>Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                  <label>Description</label>
                </div>
                <div className="select my-3 ">
                  <Select
                    options={options}
                    placeholder={"Quiz type..."}
                    defaultValue={type}
                    onChange={setType}
                  />
                </div>
                <div className="more-actions form-group">
                  <label className="mb-1">Upload image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(event) => handleChangeFile(event)}
                  />
                </div>
                <div className="mt-3">
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      handleSubmitQuiz();
                    }}
                  >
                    Save
                  </button>
                </div>
              </fieldset>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="list-detail">
        <TableQuiz />
      </div>
    </div>
  );
};

export default ManagerQuiz;
