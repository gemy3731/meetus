import { useEffect } from "react";
import useAPI from "../../hooks/useAPI"
import Loader from "../../components/Loader";
import Layout from "../../components/dashboard/Layout";


const Dashboard = () => {
  const {GET,loading} = useAPI();
  const fetchData = async () => {
    try{
      const response = await GET("/user/info")
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, [])
  return (
    <Layout>
      {loading && <Loader />}
      <h1 className="text-3xl font-bold underline">Dashboard</h1>
    </Layout>
  )
}

export default Dashboard