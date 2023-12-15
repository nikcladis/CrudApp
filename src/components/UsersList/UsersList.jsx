import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { fetchData, endpoints } from "../../api";

const UsersList = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const users = await fetchData(endpoints.users);

        console.log(users);

        setUsersData(users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsersData();
  }, []);

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <li>
        <UserCard
          name="Nick Kladis"
          username="nikcladis"
          email="nikcladis@gmail.com"
          address={{ city: "Patras", zipcode: "26504" }}
          phone="6948181847"
        />
      </li>
    </ul>
  );
};

export default UsersList;
