import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { fetchData, endpoints } from "../../api";

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
