import SearchUser from "../components/SearchUser/SearchUser";
import UserForm from "../components/UserForm/UserForm";
import UsersList from "../components/UsersList/UsersList";
import UserProvider from "../contexts/UserProvider";

const PageLayout = () => {
  return (
    <>
      <header className="px-2 py-3 text-3xl">
        <h1 className="font-bold">CRUD Application</h1>
      </header>
      <div className="flex flex-col sm:flex-row">
        <UserProvider>
          <main className="flex flex-col gap-2 w-full xl:w-3/4 lg:w-3/5 md:w-1/2 order-2">
            <div className="p-2">
              <SearchUser />
            </div>
            <article className="p-2">
              <UsersList />
            </article>
          </main>
          <aside className="w-full xl:w-1/4 lg:w-2/5 md:w-1/2 p-2 order-1">
            <UserForm />
          </aside>
        </UserProvider>
      </div>
    </>
  );
};

export default PageLayout;
