import useAuth from "@store/useAuth";
import SignInButton from "./widgets/SignInButton";
import SignOutButton from "./widgets/SignOutButton";

const TopBar = () => {
  const auth = useAuth();

  return (
    //
    <header className="flex gap-4 justify-between items-center px-4 pt-8 pb-4 border-b">
      <h1 className="select-none text-lg sm:text-xl font-bold">
        Protected Routes
      </h1>
      <nav className="flex items-end h-full">
        <ul className="flex gap-4 select-none">
          <li>메뉴1</li>
          <li>메뉴2</li>
        </ul>
      </nav>
      <div>{auth.isAuthenticated ? <SignOutButton /> : <SignInButton />}</div>
    </header>
  );
};

export default TopBar;
