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
      <NonSubmitButton>CANCEL</NonSubmitButton>
    </form>
  );
};

interface NonSubmitButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const NonSubmitButton: FC<NonSubmitButtonProps> = (props) => {
  const { onClick: forwardClickEventHandler, ...restProps } = props;

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    !!forwardClickEventHandler && forwardClickEventHandler(evt);
  };

  return <button {...restProps} onClick={onClick} />;
};

export default LoginForm;
