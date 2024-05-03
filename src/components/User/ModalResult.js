import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalResult.scss";
const ModalResult = (props) => {
  const { show, setShow, dataModalResult } = props;
  const [modalClose, setModalClosed] = useState(false);
  const handleClose = () => {
    setShow(false);
    setModalClosed(true);
  };
  console.log("check dataModalResult >>", dataModalResult);
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Your result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="total-question">
            Total question : <b>{dataModalResult.countTotal}</b>
          </div>
          <div className="total-answers">
            Total correct answer : <b>{dataModalResult.countCorrect}</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Show Answers
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
            }}
          >
            Comfirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalResult;
