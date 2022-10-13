import create from "zustand";
import User from "@models/user/User";
import ContextCallbackOption from "@models/common/ContextCallbackOption";
import STORAGE_KEY from "@utils/storage-key";

interface AuthState {
  isAuthenticated: boolean;
  login: (option?: ContextCallbackOption) => void;
  logout: (callback?: () => void) => void;
}

const useAuth = create<AuthState>((set, get) => {
  const AUTHUSER = STORAGE_KEY.AUTHUSER;

  return {
    // not one of null or undefined
    isAuthenticated: localStorage.getItem(AUTHUSER) != null,

    login: (option) => {
      type T = { data: Partial<User> }; // Partial<T>, Omit<T, "attr1" | "attr2" | "attr3">

      // sample promise and response

      // new Promise(callback?: (resolve함수, reject함수) => void)
      const loginPromise = new Promise<T>((resolve, reject) => {
        const response = { data: { userName: "abc123", nickname: "조아라" } };
        resolve(response); // 우리가 알던 return 역할(멈추진 않음)
        // reject(`삔또 상해서 에러`) // 우리가 알던 throw 역할(멈추진 않음)
      });

      // axios.post(url, requestBody, {header: {"Content-Type": "", "auth-key": "asfasdf"}})

      // const { data } = props;

      loginPromise
        .then(({ data }) => data)
        .then((user) => {
          if (!user) {
            // invalid
            set({ isAuthenticated: false });
            return;
          }

          // save on local storage
          localStorage.setItem(AUTHUSER, JSON.stringify(user));
          // JSON.parse(  localStorage.getItme("authUser") ?? "null"  ) -> 다시 객체로 변환

          // change state
          set({ isAuthenticated: true });

          !!option?.success && option.success(user);
        })
        // .catch(console.error) 코드와 비교:
        .catch(!!option?.onCatch ? option?.onCatch : console.error);
    },

    logout: (callback) => {
      localStorage.removeItem(AUTHUSER);
      set({ isAuthenticated: false });
      !!callback && callback();
    },
    // End of Create
  };
});

export default useAuth;
