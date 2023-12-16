import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";
import { useForm } from "react-hook-form";
import { initialFormValues } from "../../constants/constants";
import submitNewUser from "../../utils/submitNewUser";
import UserFormField from "./UserFormField";

const UserForm = () => {
  const { users, setUsers } = useContext(UserContext);

  const form = useForm(initialFormValues);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = form;

  const onSubmit = (data) => {
    submitNewUser(data, users, setUsers, resetForm);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col space-y-1"
    >
      <UserFormField
        id="name"
        type="text"
        name="name"
        label="Name"
        errors={errors}
        register={register}
        errorMessage="Name should be more than 5 characters."
      />

      <UserFormField
        id="username"
        type="text"
        name="username"
        label="Username"
        errors={errors}
        register={register}
        errorMessage="Username should be more than 5 characters."
      />

      <UserFormField
        id="email"
        type="email"
        name="email"
        label="Email"
        errors={errors}
        register={register}
        pattern={/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/}
        errorMessage="Email should include @."
      />

      <UserFormField
        id="city"
        type="text"
        name="city"
        label="City"
        errors={errors}
        register={register}
        errorMessage="City is required."
      />

      <UserFormField
        id="zipcode"
        type="numeric"
        name="zipcode"
        label="Zip Code"
        errors={errors}
        register={register}
        pattern={/^\d+$/}
        errorMessage="Zipcode must only be digits or a hyphen."
      />

      <UserFormField
        id="phone"
        type="numeric"
        name="phone"
        label="Phone"
        errors={errors}
        register={register}
        pattern={/^[0-9]+$/}
        errorMessage="Phone number must only contain digits."
      />

      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-1.5 px-2 rounded-md transition duration-300 ease-in-out"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
