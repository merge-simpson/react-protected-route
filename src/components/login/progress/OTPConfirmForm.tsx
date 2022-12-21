import { PrimaryButton } from "@styles/tw/button";
import { FunctionComponent as FC } from "react";

export interface OTPConfirmFormProps {
  next: () => void;
}

const OTPConfirmForm: FC<OTPConfirmFormProps> = ({ next }) => {
  return (
    //
    <div>
      <h1>OTPConfirmForm</h1>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          next();
        }}
      >
        <input
          value="012346"
          name="otp"
          autoComplete="off"
          onChange={() => {}}
          className="border rounded px-2 outline-dark col-span-2"
        />
        <PrimaryButton onClick={() => next()}>LOGIN</PrimaryButton>
      </form>
    </div>
  );
};

export default OTPConfirmForm;
