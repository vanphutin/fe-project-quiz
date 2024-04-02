import ModalCreateUser from "./ModalCreateUsers";
import "./ManageUser.scss";
import { useState } from "react";
import TableUser from "./TableUser";
const ManageUsers = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  return (
    <div className="manage-user-container">
      <div className="title">manage user</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            + Add new users
          </button>
        </div>
        <div className="table-user-container">
          <TableUser />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
        />
      </div>
    </div>
  );
};

export default ManageUsers;
