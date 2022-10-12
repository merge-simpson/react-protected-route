import useAuth from "@store/useAuth";
import { useCallback, useState } from "react";
import LoginForm from "./widgets/LoginForm";
import OTPConfirmForm from "./widgets/OTPConfirmForm";

export type LoginStepName = "AUTH" | "OTP";

const LoginProgress = () => {
  const auth = useAuth();

  const ProgressName: { [key in LoginStepName]: LoginStepName } = {
    AUTH: "AUTH",
    OTP: "OTP",
  };

  const orderedStepList: LoginStepName[] = [
    ProgressName.AUTH,
    ProgressName.OTP,
  ];

  const [stepIndex, setStepIndex] = useState<number>(0);

  const next = useCallback(() => {
    const nextStep = stepIndex + 1;
    const isLastStep = nextStep === orderedStepList.length;

    if (isLastStep) {
      auth.login();
      return;
    }

    setStepIndex(nextStep);
  }, [stepIndex]);

  return (
    //
    <div>
      <h1>Login Progress</h1>
      <main>
        {orderedStepList[stepIndex] === ProgressName.AUTH && (
          <LoginForm next={next} />
        )}
        {orderedStepList[stepIndex] === ProgressName.OTP && (
          <OTPConfirmForm next={next} />
        )}
      </main>
    </div>
  );
};

export default LoginProgress;
