import { useForm } from "react-hook-form";

const emptyChar = "\u200B";

const UserForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      address: {
        city: "",
        zipcode: "",
      },
      phone: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = form;

  const onSubmit = (data) => {
    console.log(data);
    resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col space-y-1"
    >
      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="flex justify-between items-center gap-2"
        >
          Name:
          <input
            id="name"
            type="text"
            name="name"
            className={`w-3/4 border-2 ${
              errors.name ? "border-red-500" : "border-gray-400"
            } px-2 py-1 rounded-md focus:outline-none focus:border-blue-500`}
            {...register("name", {
              required: "Name should be more than 5 characters.",
              minLength: 5,
            })}
          />
        </label>
        <p
          className={`text-red-500 text-sm font-semibold self-end ${
            errors.name ? "" : "invisible"
          }`}
        >
          {errors.name?.message} {/* or */} {emptyChar}
        </p>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="username"
          className="flex justify-between items-center gap-2"
        >
          Username:
          <input
            id="username"
            type="text"
            name="username"
            className={`w-3/4 border-2 ${
              errors.username ? "border-red-500" : "border-gray-400"
            } px-2 py-1 rounded-md focus:outline-none focus:border-blue-500`}
            {...register("username", {
              required: "Username should be more than 5 characters.",
              minLength: 5,
            })}
          />
        </label>
        <p
          className={`text-red-500 text-sm font-semibold self-end ${
            errors.username ? "" : "invisible"
          }`}
        >
          {errors.username?.message} {/* or */} {emptyChar}
        </p>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="flex justify-between items-center gap-2"
        >
          Email:
          <input
            id="email"
            type="text"
            name="email"
            className={`w-3/4 border-2 ${
              errors.email ? "border-red-500" : "border-gray-400"
            } px-2 py-1 rounded-md focus:outline-none focus:border-blue-500`}
            {...register("email", {
              required: "Email should include @.",
              pattern: /@/,
            })}
          />
        </label>
        <p
          className={`text-red-500 text-sm font-semibold self-end ${
            errors.email ? "" : "invisible"
          }`}
        >
          {errors.email?.message} {/* or */} {emptyChar}
        </p>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="city"
          className="flex justify-between items-center gap-2"
        >
          City:
          <input
            id="city"
            type="text"
            name="city"
            className={`w-3/4 border-2 ${
              errors.address?.city ? "border-red-500" : "border-gray-400"
            } px-2 py-1 rounded-md focus:outline-none focus:border-blue-500`}
            {...register("address.city", {
              required: "City is required.",
            })}
          />
        </label>
        <p
          className={`text-red-500 text-sm font-semibold self-end ${
            errors.address?.city ? "" : "invisible"
          }`}
        >
          {errors.address?.city?.message} {/* or */} {emptyChar}
        </p>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="zipcode"
          className="flex justify-between items-center gap-2"
        >
          Zip Code:
          <input
            id="zipcode"
            type="text"
            name="zipcode"
            className={`w-3/4 border-2 ${
              errors.address?.zipcode ? "border-red-500" : "border-gray-400"
            } px-2 py-1 rounded-md focus:outline-none focus:border-blue-500`}
            {...register("address.zipcode", {
              required: "Zipcode must only be digits or a hyphen.",
              pattern: /^\d+$/,
            })}
          />
        </label>
        <p
          className={`text-red-500 text-sm font-semibold self-end ${
            errors.address?.zipcode ? "" : "invisible"
          }`}
        >
          {errors.address?.zipcode?.message} {/* or */} {emptyChar}
        </p>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="phone"
          className="flex justify-between items-center gap-2"
        >
          Phone:
          <input
            id="phone"
            type="text"
            name="phone"
            className={`w-3/4 border-2 ${
              errors.phone ? "border-red-500" : "border-gray-400"
            } px-2 py-1 rounded-md focus:outline-none focus:border-blue-500`}
            {...register("phone", {
              required: "Phone number is required.",
              pattern: /^[0-9]+$/,
            })}
          />
        </label>
        <p
          className={`text-red-500 text-sm font-semibold self-end ${
            errors.phone ? "" : "invisible"
          }`}
        >
          {errors.phone?.message} {/* or */} {emptyChar}
        </p>
      </div>

      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-1.5 px-2 rounded-md transition duration-300 ease-in-out"
      >
        Click me
      </button>
    </form>
  );
};

export default UserForm;
