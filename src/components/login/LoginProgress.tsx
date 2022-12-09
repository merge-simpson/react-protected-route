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

  // 이 배열에서 순서만 바꾸면 페이지 순서가 바뀜.
  const orderedStepList: LoginStepName[] = ["AUTH", "OTP"];

  const [stepIndex, setStepIndex] = useState<number>(0);

  const next = useCallback(() => {
    // 만약 stepIndex가 1이었을 때 눌리면(이 함수 실행되면)
    const nextStep = stepIndex + 1; // 2
    const isLastStep = nextStep === orderedStepList.length; // true

    if (isLastStep) {
      // code: 최종에서 할 동작
      auth.login({ success: console.log }); // login
      return; // login 완료
    }

    setStepIndex(nextStep);
  }, [stepIndex]);

  return (
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
