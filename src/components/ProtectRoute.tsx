import Cookies from "js-cookie"
import { Navigate } from "react-router-dom";

interface ProtectRouteProps {
  children: React.ReactNode;
}

const ProtectRoute = ({children}:ProtectRouteProps) => {
 const token = Cookies.get("token") || "";
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return <>{children}</>
}

export default ProtectRoute