const PATH = {
  HOME: "/",
  LOGIN: "/login",
} as const; // on Compile time(Typescript): 변경 여지가 있는 코드를 미리 막음.

Object.freeze(PATH); // on Runtime(Javascript): 변경 자체를 막음.

export default PATH;
