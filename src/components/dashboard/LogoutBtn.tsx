import { LogOut } from "lucide-react";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../store/authSlice";
const LogoutBtn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        Cookies.remove("token");
        dispatch(getUserInfo({ token: "", name: "", id: null }));
        navigate("/login");
    }
  return (
    <button type="button" onClick={handleLogout} className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  border border-input hover:text-accent-foreground h-10 px-4 py-2 bg-white/80 hover:bg-white border-none">
      <LogOut /> Logout
    </button>
  );
};

export default LogoutBtn;
