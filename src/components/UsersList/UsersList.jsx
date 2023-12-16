import { useEffect, useContext } from "react";
import UserCard from "./UserCard";
import { UserContext } from "../../contexts/UserProvider";
import { fetchData, endpoints } from "../../api";

const UsersList = () => {
  const { users, setUsers } = useContext(UserContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await fetchData(endpoints.users);

        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log("done");
    fetchUsers();
  }, []);

  const showUsersList = users.map((user) => {
    return (
      <li key={user.id}>
        <UserCard {...user} />
      </li>
    );
  });

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {showUsersList}
    </ul>
  );
};

export default UsersList;
