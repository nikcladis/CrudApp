import UserForm from "./components/UserForm/UserForm";
import UsersList from "./components/UsersList/UsersList";

const App = () => {
  return (
    <>
      <header className="p-4 bg-gray-300">
        <h1 className="font-bold">CRUD Application</h1>
      </header>
      <main className="flex flex-col sm:flex-row">
        <div className="md:w-1/4 sm:w-1/3 w-full p-4 bg-gray-500">
          <UserForm />
        </div>
        <div className="md:w-3/4 sm:w-2/3 w-full p-4 bg-gray-700">
          <UsersList />
        </div>
      </main>
    </>
  );
};

export default App;
