import ModalCreateUser from "./ModalCreateUsers";
import "./ManageUser.scss";
const ManageUsers = (props) => {
  return (
    <div classNameName="manage-user-container">
      <div classNameName="title">manage user</div>
      <div classNameName="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>table user</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUsers;
