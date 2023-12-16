export const deleteUser = (users, userId, setUsers) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
};