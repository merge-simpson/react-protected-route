import useAuth from "@store/useAuth";
import SignInButton from "./widgets/SignInButton";
import SignOutButton from "./widgets/SignOutButton";

const TopBar = () => {
  const auth = useAuth();

  return (
    //
    <header className="grid grid-cols-4 gap-4 items-center px-8 pt-8 pb-4 border-b h-24">
      <h1 className="select-none text-lg sm:text-xl font-bold text-left">
        Protected Routes
      </h1>
      <nav className="col-span-2 flex justify-end items-end h-full">
        <ul className="grid grid-cols-2 gap-4 select-none text-lg">
          <li>메뉴1</li>
          <li>메뉴2</li>
        </ul>
      </nav>
      <div className="flex justify-end items-center">
        {auth.isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </div>
    </header>
  );
};

export default TopBar;
