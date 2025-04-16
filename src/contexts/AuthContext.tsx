import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
  } from "react";
  import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopup,
    onAuthStateChanged,
    User,
  } from "firebase/auth";
  import { auth, googleProvider } from "../firebase";
  
  type AuthContextType = {
    user: User | null;
    loading: boolean;
    signup: (email: string, password: string) => Promise<any>;
    login: (email: string, password: string) => Promise<any>;
    loginWithGoogle: () => Promise<any>;
    logout: () => Promise<void>;
  };
  
  const AuthContext = createContext<AuthContextType | null>(null);
  
  export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
  
    const signup = (email: string, password: string) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const login = (email: string, password: string) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const loginWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
    };
  
    const logout = () => {
      return signOut(auth);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return unsubscribe;
    }, []);
  
    return (
      <AuthContext.Provider
        value={{ user, loading, signup, login, loginWithGoogle, logout }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  // Custom hook
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
  };
  