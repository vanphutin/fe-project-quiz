import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiService";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import ModalUpdateQuiz from "./ModalUpdateQuiz";

const TableQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);
  const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
  const [showModalUpdateQuiz, setShowModalUpdateQuiz] = useState(false);
  const [dataDelete, setDataDelete] = useState({});
  const [dataUpdate, setDataUpdate] = useState({});

  useEffect(() => {
    fetchQuiz();
  }, []);
  const fetchQuiz = async () => {
    setDataDelete({});
    setDataUpdate({});
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      setListQuiz(res.DT);
    }
    console.log("res >>", res);
  };

  const handleClickBtnDelete = (quiz) => {
    setDataDelete(quiz);
    setShowModalDeleteQuiz(true);
  };
  const handleClickBtnUpdate = (quiz) => {
    setDataDelete(quiz);
    setShowModalUpdateQuiz(true);
  };
  return (
    <>
      <table className="table table-hover table-bordered mt-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listQuiz &&
            listQuiz.map((item, index) => {
              {
                /* console.log("item", item); */
              }
              return (
                <tr key={`table-quiz-${index}`}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td
                    style={{
                      display: "flex",
                      gap: "15px",
                      flexDirection: "row",
                    }}
                  >
                    <button
                      className="btn btn-warning "
                      onClick={() => {
                        handleClickBtnUpdate(item);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger "
                      onClick={() => handleClickBtnDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ModalDeleteQuiz
        show={showModalDeleteQuiz}
        setShow={setShowModalDeleteQuiz}
        dataDelete={dataDelete}
        fetchQuiz={fetchQuiz}
      />
      <ModalUpdateQuiz
        show={showModalUpdateQuiz}
        setShow={setShowModalUpdateQuiz}
        dataUpdate={dataUpdate}
        fetchQuiz={fetchQuiz}
        setDataDelete={setDataDelete}
      />
    </>
  );
};
export default TableQuiz;
