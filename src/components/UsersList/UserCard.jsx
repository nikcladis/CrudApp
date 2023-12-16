import { useState } from "react";
import UserCardItem from "./UserCardItem";
import UserCardActions from "./UserCardActions";

const UserCard = ({
  id,
  name,
  username,
  email,
  address: { city, zipcode },
  phone,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article>
      <ul
        className="relative p-5 flex flex-col gap-2 border-2 border-blue-700 cursor-pointer rounded-md transition duration-300 ease-in hover:text-white hover:bg-blue-700"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <UserCardItem name="Name" value={name} />
        <UserCardItem name="Username" value={username} />
        <UserCardItem name="Email" value={email} />
        <UserCardItem name="City" value={city} />
        <UserCardItem name="Zipcode" value={zipcode} />
        <UserCardItem name="Phone" value={phone} />

        {isHovered && <UserCardActions userId={id} />}
      </ul>
    </article>
  );
};

export default UserCard;
