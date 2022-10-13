import { FunctionComponent as FC } from "react";

export interface LoginFormProps {
  next: () => void;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { next } = props;

  return (
    <form
      onSubmit={(evt) => {
        next();
      }}
    >
      <input value="abc1234" onChange={() => {}} />
      <input type="password" value="q1w2e3!@" onChange={() => {}} />
      <button>SEND OTP</button>
      <button
        onClick={(evt) => {
          evt.preventDefault();
        }}
      >
        CANCEL
      </button>
    </form>
  );
};

export default LoginForm;
