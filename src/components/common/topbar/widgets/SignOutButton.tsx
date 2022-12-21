import useAuth from "@store/useAuth";
import { LightButton } from "@styles/tw/button";

const SignOutButton = () => {
  const auth = useAuth();

  return <LightButton onClick={(event) => auth.login()}>Sign In</LightButton>;
};

export default SignOutButton;
