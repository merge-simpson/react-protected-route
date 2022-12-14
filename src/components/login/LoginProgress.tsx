import useAuth from "@store/useAuth";
import { useCallback, useState } from "react";
import LoginForm from "./progress/LoginForm";
import OTPConfirmForm from "./progress/OTPConfirmForm";

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
    <div className="flex flex-col py-4 gap-4 flex-auto justify-center items-center bg-slate-100">
      <h1 className="text-2xl font-bold">Login Progress</h1>
      <main className="flex flex-col items-center">
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
