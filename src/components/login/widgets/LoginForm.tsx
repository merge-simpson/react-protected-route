import { FunctionComponent as FC } from "react";
import NonSubmitButton from "@utils/nonsubmit-button";

export interface LoginFormProps {
  next: () => void;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { next } = props;

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        next();
      }}
    >
      <input value="abc1234" onChange={() => {}} />
      <input type="password" value="q1w2e3!@" onChange={() => {}} />
      <button>SEND OTP</button>
      <NonSubmitButton>CANCEL</NonSubmitButton>
    </form>
  );
};

export default LoginForm;
