const searchUser = (users, searchQuery, searchFilter) => {
    if (!searchQuery) {
        return users;
    }

    const lowercaseQuery = searchQuery.toLowerCase();

    return users.filter((user) => {
        const filterBy = user[searchFilter].toLowerCase();

        return filterBy.startsWith(lowercaseQuery);
    });
};

export default searchUser;