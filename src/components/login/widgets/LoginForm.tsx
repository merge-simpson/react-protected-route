import useAuth from "@store/useAuth";

const LoginForm = () => {
  const auth = useAuth();

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        auth.login();
      }}
    >
      <input value="abc1234" onChange={() => {}} />
      <input type="password" value="1234" onChange={() => {}} />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
