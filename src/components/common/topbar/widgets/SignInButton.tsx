import { PrimaryButton } from "@styles/tw/button";
import PATH from "@utils/path";
import { useNavigate } from "react-router-dom";

const SignInButton = () => {
  const navigate = useNavigate();
  const { LOGIN } = PATH;

  return (
    <PrimaryButton onClick={(event) => navigate(LOGIN)}>Sign In</PrimaryButton>
  );
};

export default SignInButton;
