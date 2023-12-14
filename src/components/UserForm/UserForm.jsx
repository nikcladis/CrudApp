import { useForm } from "react-hook-form";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-2"
    >
      <label htmlFor="name">
        Name:
        <input
          id="name"
          type="text"
          name="name"
          {...register("name", {
            required: "Name should be more than 5 characters.",
            minLength: 5,
          })}
        />
        <p className="text-red-500">{errors.name?.message}</p>
      </label>

      <label htmlFor="username">
        Username:
        <input
          id="username"
          type="text"
          name="username"
          {...register("username", {
            required: "Username should be more than 5 characters.",
            minLength: 5,
          })}
        />
        <p className="text-red-500">{errors.username?.message}</p>
      </label>

      <label htmlFor="email">
        Email:
        <input
          id="email"
          type="text"
          name="email"
          {...register("email", {
            required: "Email should include @.",
            pattern: /@/,
          })}
        />
        <p className="text-red-500">{errors.email?.message}</p>
      </label>

      <label htmlFor="city">
        City:
        <input
          id="city"
          type="text"
          name="city"
          {...register("city", {
            required: "City is required.",
          })}
        />
        <p className="text-red-500">{errors.city?.message}</p>
      </label>

      <label htmlFor="zipcode">
        Zip Code:
        <input
          id="zipcode"
          type="text"
          name="zipcode"
          {...register("zipcode", {
            required: "Zipcode must only be digits or a hyphen.",
            pattern: /^\d+$/,
          })}
        />
        <p className="text-red-500">{errors.zipcode?.message}</p>
      </label>

      <label htmlFor="phone">
        Phone:
        <input
          id="phone"
          type="text"
          name="phone"
          {...register("phone", {
            required: "Phone number is required",
            pattern: /^[0-9]+$/,
          })}
        />
        <p className="text-red-500">{errors.phone?.message}</p>
      </label>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click me
      </button>
    </form>
  );
};

export default UserForm;
