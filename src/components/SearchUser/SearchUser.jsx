import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";

const SearchUser = () => {
  const { searchQuery, setSearchQuery, searchFilter, setSearchFilter } =
    useContext(UserContext);

  const sortOptions = [
    { value: "all", label: "All" },
    { value: "name", label: "Name" },
    { value: "username", label: "Username" },
    { value: "email", label: "Email" },
    { value: "city", label: "City" },
    { value: "zipcode", label: "Zip Code" },
    { value: "phone", label: "Phone" },
  ];

  return (
    <search className="flex flex-col lg:flex-row gap-3">
      <div className="relative w-full lg:w-2/3 flex items-center">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          <FaSearch />
        </div>
        <input
          id="zipcode"
          type="text"
          name="zipcode"
          className="flex-grow border-2 py-1.5 px-2 rounded-md pl-8 border-gray-400 focus:outline-none focus:border-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Select
        className="lg:w-1/3"
        options={sortOptions}
        isSearchable={false}
        defaultValue={sortOptions.find(
          (option) => option.value === searchFilter
        )}
        onChange={(selectedOption) => setSearchFilter(selectedOption.value)}
      />

      <button className="lg:w-1/3 bg-blue-700 hover:bg-blue-500 text-white font-semibold p-1.5 rounded-md transition duration-300 ease-in-out">
        Sort
      </button>
    </search>
  );
};

export default SearchUser;
