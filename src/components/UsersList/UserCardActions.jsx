import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";
import { deleteUser } from "../../utils/deleteUser";
import { FaTrashAlt } from "react-icons/fa";

const UserCardActions = ({ userId }) => {
  const { users, setUsers } = useContext(UserContext);

  const handleDeleteUser = () => {
    deleteUser(users, userId, setUsers);
  };

  return (
    <div className="absolute flex items-center gap-2 top-3 right-3">
      <FaTrashAlt
        size={15}
        className="text-white hover:text-red-500"
        onClick={handleDeleteUser}
      />
    </div>
  );
};

export default UserCardActions;
