import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { fetchData, endpoints } from "../../api";
import SearchUser from "../SearchUser/SearchUser";

const UsersList = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const users = await fetchData(endpoints.users);

        setUsersData(users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsersData();
  }, []);

  const showUsersList = usersData.map((user) => {
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
