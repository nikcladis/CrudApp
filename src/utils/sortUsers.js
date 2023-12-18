const sortUsers = (users, sortBy, sortAscending) => {
    let sortedUsers = [...users];
    switch (sortBy) {
        case "name":
            sortedUsers.sort((a, b) => (sortAscending ? 1 : -1) * a.name.localeCompare(b.name));
            break;
        case "username":
            sortedUsers.sort((a, b) => (sortAscending ? 1 : -1) * a.username.localeCompare(b.username));
            break;
        case "email":
            sortedUsers.sort((a, b) => (sortAscending ? 1 : -1) * a.email.localeCompare(b.email));
            break;
        case "city":
            sortedUsers.sort((a, b) => (sortAscending ? 1 : -1) * a.address.city.localeCompare(b.address.city));
            break;
        case "zipcode":
            sortedUsers.sort((a, b) => (sortAscending ? 1 : -1) * a.address.zipcode.localeCompare(b.address.zipcode));
            break;
        case "phone":
            sortedUsers.sort((a, b) => (sortAscending ? 1 : -1) * a.phone.localeCompare(b.phone));
            break;
        default:
            break;
    }

    return sortedUsers;
};

export default sortUsers;
