import { Outlet } from "react-router";
import Footer from "../fragments/Footer";
import Header from "../fragments/Header";

const Movie = () => {
  return (
    <main className="overflow-hidden relative">
      <Header />
      <div className="min-h-screen pt-20">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Movie;
