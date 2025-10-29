import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/index.css";
import { Dashboard, Login } from "./pages";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProtectRoute from "./components/ProtectRoute";
import ProtectAuth from "./components/ProtectAuth";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectRoute><Dashboard /></ProtectRoute>} />
        <Route path="/dashboard" element={<ProtectRoute><Dashboard /></ProtectRoute>} />
        <Route path="/login" element={<ProtectAuth><Login /></ProtectAuth>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
