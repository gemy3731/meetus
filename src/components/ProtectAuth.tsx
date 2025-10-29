import Cookies from "js-cookie"
import { Navigate } from "react-router-dom";

interface ProtectAuthProps {
  children: React.ReactNode;
}

const ProtectAuth = ({children}:ProtectAuthProps) => {
    const token = Cookies.get("token") || "";
  console.log("ProtectAuth auth:", token);
    if (token) {
      return <Navigate to="/" replace />;
    }
    return <>{children}</>
}

export default ProtectAuth