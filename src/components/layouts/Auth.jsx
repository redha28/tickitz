import { Outlet } from "react-router";
import bgAuth from "../../assets/images/bg-auth.png";

const Auth = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-fixed  "
      style={{ backgroundImage: `url(${bgAuth})` }}>
      <div className="bg-black/70 absolute min-h-full min-w-full flex justify-center items-center py-4">
        <Outlet />
      </div>
    </section>
  );
};

export default Auth;
