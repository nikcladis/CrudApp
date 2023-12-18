const searchUser = (users, searchQuery, searchFilter) => {
    if (!searchQuery) {
        return users;
    }

    const lowercaseQuery = searchQuery.toLowerCase();

    return users.filter((user) => {

        let filterBy;

        switch (searchFilter) {
            case "name":
            case "username":
            case "email":
            case "phone":
                filterBy = user[searchFilter].toLowerCase();
                break;
            case "city":
            case "zipcode":
                filterBy = user.address[searchFilter].toLowerCase();
                break;
            default:
                break;
        }

        return filterBy.startsWith(lowercaseQuery);
    });
};

export default searchUser;