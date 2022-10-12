import create from "zustand";
import User from "@models/user/User";
import ContextCallbackOption from "@models/common/ContextCallbackOption";

interface AuthState {
  isAuthenticated: boolean;
  updateAuthenticated: () => boolean;
  login: (option?: ContextCallbackOption) => void;
  logout: (callback?: () => void) => void;
}

const useAuth = create<AuthState>((set, get) => {
  return {
    // not one of null or undefined
    isAuthenticated: localStorage.getItem("authUser") != null,

    updateAuthenticated: () => {
      const isAuthenticated = localStorage.getItem("authUser") != null;
      set((state) => ({ isAuthenticated }));
      return isAuthenticated;
    },

    login: (option) => {
      type T = { data: Partial<User> };

      // sample promise and response
      const loginPromise = new Promise<T>((resolve, reject) => {
        const response = { data: { userName: "abc123", nickname: "조아라" } };
        resolve(response);
      });

      loginPromise
        .then(({ data }) => data)
        .then((user) => {
          if (!user) {
            // invalid
            set({ isAuthenticated: false });
            return;
          }

          // save on local storage
          localStorage.setItem("authUser", JSON.stringify(user));

          // change state
          set({ isAuthenticated: true });

          !!option?.success && option.success(user);
        })
        .catch(!!option?.onCatch ? option?.onCatch : console.error);
    },

    logout: (callback) => {
      localStorage.removeItem("authUser");
      set({ isAuthenticated: false });
      !!callback && callback();
    },
    // End of Create
  };
});

export default useAuth;
