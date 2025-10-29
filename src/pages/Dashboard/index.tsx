import { useEffect } from "react";
import useAPI from "../../hooks/useAPI";
import Loader from "../../components/Loader";
import Layout from "../../components/dashboard/Layout";
import { IdCard, User } from "lucide-react";
import { useSelector } from "react-redux";
import type { AuthState } from "../../store/authSlice";

export interface RootState {
  auth:AuthState;
}
const Dashboard = () => {
  const { GET, loading } = useAPI();
  const auth = useSelector((state: RootState) => state.auth);
  const fetchData = async () => {
    try {
      const response = await GET("/user/info");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);
  return (
    <Layout>
      {loading && <Loader />}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold">Welcome to Your Dashboard</h2>
            <p className="text-lg text-(--color-font)">
              You're now logged into the MeetusVR shopping metaverse
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border bg-white/80 backdrop-blur-sm border-none shadow-xl">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                  <User className="text-(--color-primary)" size={20} />
                  {auth.name || localStorage.getItem("userName") || ""}
                </h3>
                <p className="text-sm text-)(--color-font)">
                  Your registered name
                </p>
              </div>
              <div className="p-6 pt-0">
                <p className="text-2xl font-semibold">Employee</p>
              </div>
            </div>
            <div className="rounded-lg border bg-white/80 backdrop-blur-sm border-none shadow-xl">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                  <IdCard className="text-(--color-primary)" size={20} />
                  {auth.id ?? "N/A"}
                </h3>
                <p className="text-sm text-)(--color-font)">
                  Your unique identifier
                </p>
              </div>
              <div className="p-6 pt-0">
                <p className="text-2xl font-semibold">N/A</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg  custom-gradient text-white shadow-2xl">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-white">
                Shopping Metaverse
              </h3>
              <p className="text-sm text-white/90">
                Explore the future of shopping
              </p>
            </div>
            <div className="p-6 pt-0">
              <p className="text-white/90">
                You now have access to our immersive VR shopping experience.
                Browse products, interact with 3D models, and enjoy a
                revolutionary shopping journey in the metaverse.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Dashboard;
