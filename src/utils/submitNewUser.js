const submitNewUser = (data, users, setUsers, resetForm) => {
    const newUser = {
        id: users.length + 1,
        name: data.name,
        username: data.username,
        email: data.email,
        address: {
            city: data.city,
            zipcode: data.zipcode,
        },
        phone: data.phone,
    };

    setUsers([...users, newUser]);
    resetForm();
};

export default submitNewUser;