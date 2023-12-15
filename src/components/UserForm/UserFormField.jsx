import { emptyChar } from "../../constants/constants";

const UserFormField = ({
  id,
  type,
  name,
  label,
  errors,
  register,
  pattern,
  errorMessage,
}) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="flex justify-between items-center gap-2">
      {label}:
      <input
        id={id}
        type={type}
        name={name}
        className={`w-3/4 border-2 ${
          errors[name] ? "border-red-500" : "border-gray-400"
        } px-2 py-1 rounded-md focus:outline-none focus:border-blue-500`}
        {...register(name, {
          required: errorMessage,
          pattern: pattern,
        })}
      />
    </label>
    <p
      className={`text-red-500 text-sm font-semibold self-end ${
        errors[name] ? "" : "invisible"
      }`}
    >
      {errors[name]?.message} {/* or */} {emptyChar}
    </p>
  </div>
);

export default UserFormField;
