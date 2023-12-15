import SearchUser from "../components/SearchUser/SearchUser";
import UserForm from "../components/UserForm/UserForm";
import UsersList from "../components/UsersList/UsersList";

const PageLayout = () => {
  return (
    <>
      <header className="p-2 bg-gray-300">
        <h1 className="font-bold">CRUD Application</h1>
      </header>
      <main className="flex flex-col sm:flex-row">
        <aside className="w-full xl:w-1/4 lg:w-2/5 md:w-1/2 p-2">
          <UserForm />
        </aside>
        <article className="w-full xl:w-3/4 lg:w-3/5 md:w-1/2">
          <div className="p-2">
            <SearchUser />
          </div>
          <div className="p-2">
            <UsersList />
          </div>
        </article>
      </main>
    </>
  );
};

export default PageLayout;
