import { FaTrashAlt } from "react-icons/fa";

const UserCardActions = () => {
  return (
    <div className="absolute flex items-center gap-2 top-3 right-3">
      <FaTrashAlt
        size={15}
        className="text-white hover:text-red-500"
        onClick={() => console.log("Delete button clicked")}
      />
    </div>
  );
};

export default UserCardActions;
