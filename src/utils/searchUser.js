const searchUser = (users, searchQuery) => {
    if (!searchQuery) {
        return users;
    }

    const lowercaseQuery = searchQuery.toLowerCase();

    return users.filter((user) => {
        return (
            user.name.toLowerCase().startsWith(lowercaseQuery) ||
            user.username.toLowerCase().startsWith(lowercaseQuery) ||
            user.email.toLowerCase().startsWith(lowercaseQuery) ||
            user.address.city.toLowerCase().startsWith(lowercaseQuery) ||
            user.address.zipcode.toString().startsWith(searchQuery) ||
            user.phone.toString().startsWith(searchQuery)
        );
    });
};

export default searchUser;