import UserForm from "./components/UserForm/UserForm";
import UsersList from "./components/UsersList/UsersList";

const App = () => {
  return (
    <>
      <header className="p-4 bg-gray-300">
        <h1 className="font-bold">CRUD Application</h1>
      </header>
      <main className="flex flex-col sm:flex-row">
        <div className="lg:w-1/5 md:w-2/5 sm:w-1/2 w-full p-4 bg-gray-500">
          <UserForm />
        </div>
        <div className="lg:w-4/5 md:w-3/5 sm:w-1/2 w-full p-4 bg-gray-700">
          <UsersList />
        </div>
      </main>
    </>
  );
};

export default App;
