import ModalCreateUser from "./ModalCreateUsers";

const ManageUsers = (props) => {
  return (
    <div classNameName="manage-user-container">
      <div classNameName="title">manage user</div>
      <div classNameName="users-content">
        <div>
          <button>Add new users</button>
        </div>
      </div>
      <div>
        table user
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUsers;
