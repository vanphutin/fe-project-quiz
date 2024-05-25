import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteQuiz } from "../../../../services/apiService";
import { toast } from "react-toastify";
const ModalDeleteUser = (props) => {
  const { show, setShow, dataDelete } = props;

  const handleClose = () => setShow(false);
  const handlSubmitDeleteUser = async () => {
    let data = await deleteQuiz(dataDelete.id);
    console.log("check res >>", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Comfirm Delete Quiz ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this Quiz{" "}
          <b> {dataDelete && dataDelete.name ? dataDelete.name : ""} </b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handlSubmitDeleteUser();
            }}
          >
            Comfirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
