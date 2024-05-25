import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ImFolderUpload } from "react-icons/im";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../../services/apiService";
import _ from "lodash";

const ModalViewUser = (props) => {
  const { show, setShow, dataUpdate } = props;
  const [isModalVisible, setIsModalVisible] = useState(true); // Thêm state để kiểm soát sự tồn tại của modal

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPasword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewImg("");
    setIsModalVisible(false);
    props.resetUpdateData();
  };

  const handleShow = () => {
    setShow(true);
    setIsModalVisible(true); // Đặt isModalVisible về true khi bạn muốn hiển thị modal
  };

  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State để theo dõi xem hành động bất đồng bộ đang được thực thi hay không

  useEffect(() => {
    console.log("checked", dataUpdate);
    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email);
      setUsername(dataUpdate.username);
      setRole(dataUpdate.role);
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
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitCreateUser = async () => {
    const isValidateEmail = validateEmail(email);
    setIsSubmitting(true); // Đặt isSubmitting thành true khi bắt đầu hành động bất đồng bộ

    if (!isValidateEmail) {
      toast.error("Invalid email");
      setIsSubmitting(false); // Đặt lại isSubmitting thành false khi hành động kết thúc
      return;
    }

    let data = await putUpdateUser(dataUpdate.id, username, role, image);
    console.log("check res >>", data);
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
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                disabled
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                disabled
                onChange={(event) => {
                  setPasword(event.target.value);
                }}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">User name</label>
              <input
                type="text"
                className="form-control"
                value={username}
                disabled
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                disabled
                onChange={(event) => {
                  setRole(event.target.value);
                }}
                value={role}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <div className="col-md-12">
              {/* <label className="form-labe lable-upload" htmlFor="labelUpload">
                <ImFolderUpload disabled />
                Update File Image
              </label> */}
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
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalViewUser;
