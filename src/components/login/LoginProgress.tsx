import { useState } from "react";
import LoginForm from "./widgets/LoginForm";
import OTPConfirmForm from "./widgets/OTPConfirmForm";

export type LoginStepName = "AUTH" | "OTP";

const LoginProgress = () => {
  const [stepName, setStepName] = useState<LoginStepName>("AUTH");

  return (
    //
    <div>
      <h1>Login Progress</h1>
      <main>
        {stepName === "AUTH" && <LoginForm />}
        {stepName === "OTP" && <OTPConfirmForm />}
      </main>
    </div>
  );
};

export default LoginProgress;
