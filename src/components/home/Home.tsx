import useAuth from "@store/useAuth";

const Home = () => {
  const auth = useAuth();

  return (
    //
    <div>
      <h1>Home</h1>
      <button onClick={() => auth.logout()}>Logout</button>
    </div>
  );
};

export default Home;
