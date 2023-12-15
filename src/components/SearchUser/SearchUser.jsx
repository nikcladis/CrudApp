const SearchUser = () => {
  return (
    <search className="flex flex-col lg:flex-row gap-3">
      <input
        id="zipcode"
        type="text"
        name="zipcode"
        className="w-full lg:w-2/3 border-2 py-1 px-2 rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
      />
      <button className="lg:w-1/3 bg-blue-700 hover:bg-blue-500 text-white font-semibold p-1.5 rounded-md transition duration-300 ease-in-out">
        Sort
      </button>
    </search>
  );
};

export default SearchUser;
