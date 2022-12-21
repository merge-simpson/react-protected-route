import useAuth from "@store/useAuth";
import { LightButton, PrimaryButton } from "@styles/tw/button";

const SignInButton = () => {
  const auth = useAuth();

  return (
    <PrimaryButton onClick={(event) => auth.login()}>Sign Out</PrimaryButton>
  );
};

export default SignInButton;
