import LoginForm from "../../components/Login/LoginForm";
import loginImg from "../../assets/images/loginImage.png"
const Login = () => {
  return (
    <div className="mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-[0.43fr_0.57fr] min-h-screen">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center gap-9 max-w-[381px] mx-auto">
            <div className="space-y-2 text-center">
              <h1 className="text-[56px] leading-[100%] tracking-[0%] text-[#1A1A1E]">
                Welcome back
              </h1>
              <p className="text-[18px] leading-[155%] tracking-[0%] text-(--color-font)">
                Step into our shopping metaverse for an unforgettable shopping
                experience
              </p>
            </div>
            <div className="w-full">
              <LoginForm />
            </div>

            <p className="text-(--color-font) text-[14px] leading-[155%] tracking-[0%]">Don't have an account? Sign up</p>
          </div>
        </div>
        <div className=" flex items-center justify-center w-full">
          <img src={loginImg} alt="login image" className="w-full block mx-auto max-w-[744px]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
