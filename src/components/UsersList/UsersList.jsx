import UserCard from "./UserCard";

const UsersList = () => {
  return (
    <ul className="flex gap-2">
      <li>
        <UserCard />
      </li>
      <li>
        <UserCard />
      </li>
      <li>
        <UserCard />
      </li>
      <li>
        <UserCard />
      </li>
    </ul>
  );
};

export default UsersList;
