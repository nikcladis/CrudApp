const UserCardItem = ({ name, value }) => {
  return (
    <li>
      <p>
        <span className="font-semibold">{name}:</span> {value}
      </p>
    </li>
  );
};

export default UserCardItem;
