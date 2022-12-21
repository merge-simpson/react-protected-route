import { FunctionComponent as FC, useRef } from "react";
import NonSubmitButton from "@utils/nonsubmit-button";
import { LightButton, PrimaryButton } from "@styles/tw/button";

export interface LoginFormProps {
  next: () => void;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { next } = props;

  return (
    <form
      className="max-w-[50rem] border rounded-md p-8 flex flex-col gap-4"
      onSubmit={(evt) => {
        evt.preventDefault();
        next();
      }}
    >
      <span className="uppercase">Account</span>
      <input
        name="username"
        className="border rounded px-2 outline-dark col-span-2"
        autoComplete="username"
        value="abc1234"
        onChange={() => {}}
      />
      <span className="uppercase">Password</span>
      <input
        name="password"
        type="password"
        className="border rounded px-2 outline-dark col-span-2"
        autoComplete="password"
        value="q1w2e3!@"
        onChange={() => {}}
      />
      <div className="flex gap-4">
        <PrimaryButton onClick={() => next()}>SEND OTP</PrimaryButton>
        <LightButton>CANCEL</LightButton>
      </div>
    </form>
  );
};

export default LoginForm;
