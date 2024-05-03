import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ImFolderUpload } from "react-icons/im";
import { toast } from "react-toastify";
import { putUpdateQuiz } from "../../../../services/apiService";
import _ from "lodash";

const ModalUpdateQuiz = (props) => {
  const { show, setShow, dataUpdate } = props;
  const [isModalVisible, setIsModalVisible] = useState(true); // Thêm state để kiểm soát sự tồn tại của modal

  const handleClose = () => {
    setShow(false);
    setName("");
    setImage("");
    setDescription("");
    setPreviewImg("");
    setIsModalVisible(false);
    props.resetUpdateData();
  };

  const handleShow = () => {
    setShow(true);
    setIsModalVisible(true); // Đặt isModalVisible về true khi bạn muốn hiển thị modal
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State để theo dõi xem hành động bất đồng bộ đang được thực thi hay không

  useEffect(() => {
    console.log("checked", dataUpdate);
    if (!_.isEmpty(dataUpdate)) {
      setName(dataUpdate.name);
      description(dataUpdate.description);

      setImage("");
      if (dataUpdate.image) {
        setPreviewImg(`data:image/jpeg;base64, ${dataUpdate.image} `);
      }
    }
  }, [dataUpdate]);
  const handleUploadImg = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImg(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    } else {
      // setPreviewImg("NULL");
    }
    console.log("hello");
  };

  const handleSubmitCreateUser = async () => {
    setIsSubmitting(true); // Đặt isSubmitting thành true khi bắt đầu hành động bất đồng bộ

    let data = await putUpdateQuiz(dataUpdate.id, name, description, image);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      // await props.fetchListUser();
      // props.setCurrentPage(1);
      await props.fetchListUserWithPaginate(props.setCurrentPage);
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
    setIsSubmitting(false); // Đặt lại isSubmitting thành false sau khi hành động kết thúc
    console.log("check res >>", data);
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={show && isModalVisible}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>

            <div className="col-md-12">
              <label className="form-labe lable-upload" htmlFor="labelUpload">
                <ImFolderUpload />
                Update File Image
              </label>
              <input
                type="file"
                hidden
                id="labelUpload"
                onChange={(event) => {
                  handleUploadImg(event);
                }}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewImg ? (
                <img src={previewImg} />
              ) : (
                <span>preview img </span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </button>

          <Button
            variant="primary"
            onClick={handleSubmitCreateUser}
            disabled={isSubmitting}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalUpdateQuiz;
