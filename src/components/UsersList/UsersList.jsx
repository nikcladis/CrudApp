import { useEffect, useContext } from "react";
import UserCard from "./UserCard";
import { UserContext } from "../../contexts/UserProvider";
import { fetchData, endpoints } from "../../api";

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
    console.log("done");
    fetchUsers();
  }, []);

  const showFilteredUsers = searchQuery
    ? users.filter((user) => {
        const lowercaseQuery = searchQuery.toLowerCase();

        return (
          user.name.toLowerCase().startsWith(lowercaseQuery) ||
          user.username.toLowerCase().startsWith(lowercaseQuery) ||
          user.email.toLowerCase().startsWith(lowercaseQuery) ||
          user.address.city.toLowerCase().startsWith(lowercaseQuery) ||
          user.address.zipcode.toString().startsWith(searchQuery) ||
          user.phone.toString().startsWith(searchQuery)
        );
      })
    : users;

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
