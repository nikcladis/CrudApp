const UserCard = ({
  name,
  username,
  email,
  address: { city, zipcode },
  phone,
}) => {
  return (
    <article>
      <ul className="p-5 flex flex-col gap-2 border-2 border-blue-700 cursor-pointer rounded-md transition duration-300 ease-in hover:text-white hover:bg-blue-700">
        <li>
          <p>
            <span className="font-semibold">Name:</span> {name}
          </p>
        </li>
        <li>
          <span className="font-semibold">Username:</span> {username}
        </li>
        <li>
          <span className="font-semibold">Email:</span> {email}
        </li>
        <li>
          <span className="font-semibold">City:</span> {city}
        </li>
        <li>
          <span className="font-semibold">Zipcode:</span> {zipcode}
        </li>
        <li>
          <span className="font-semibold">Phone:</span> {phone}
        </li>
      </ul>
    </article>
  );
};

export default UserCard;
