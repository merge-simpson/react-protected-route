import { HTMLProps as Props } from "react";

// const inputRef = useRef<HTMLInputElement | null>(null);
// <input ref={inputRef} />
export type CommonInputProps = Omit<Props<HTMLInputElement>, "classID">;
// export interface CommonInputProps_ extends React.HTMLProps<HTMLInputElement> { ... }

// Omit<인터페이스, "attr1" | "attr2" | "attr3">: 그 인터페이스에서 attr1, attr2, attr3는 빼겠다.
// Partial<인터페이스>: 이 인터페이스의 일부를 가진다. 인터페이스 작성 시 모든 속성을 ?: 이걸로 작성한 것과 같음.

export type CommonDivProps = Omit<Props<HTMLDivElement>, "classID">;

export type CommonLabelProps = Omit<Props<HTMLLabelElement>, "classID">;

export type CommonFormProps = Omit<Props<HTMLFormElement>, "classID">;

// Button은 좀 다름.
export type CommonButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type CommonSVGProps = React.SVGProps<SVGSVGElement>;
type InitProps = Props<HTMLElement>;
export default InitProps;
