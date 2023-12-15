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
        <li>Name: {name}</li>
        <li>Username: {username}</li>
        <li>Email: {email}</li>
        <li>City: {city}</li>
        <li>Zipcode: {zipcode}</li>
        <li>Phone: {phone}</li>
      </ul>
    </article>
  );
};

export default UserCard;
