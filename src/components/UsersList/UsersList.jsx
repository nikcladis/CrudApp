import { useEffect, useContext } from "react";
import UserCard from "./UserCard";
import { UserContext } from "../../contexts/UserProvider";
import { fetchData, endpoints } from "../../api";
import searchUser from "../../utils/searchUser";

const UsersList = () => {
  const { users, setUsers, searchQuery } = useContext(UserContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await fetchData(endpoints.users);

        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUsers();
  }, []);

  const showFilteredUsers = searchUser(users, searchQuery);

  const filteredUsersList = showFilteredUsers.map((user) => (
    <li key={user.id}>
      <UserCard {...user} />
    </li>
  ));

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {filteredUsersList}
    </ul>
  );
};

export default UsersList;
