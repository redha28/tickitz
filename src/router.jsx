import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import Auth from "./components/layouts/Auth";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Movie from "./components/layouts/Movie";
import AllMovie from "./pages/AllMovie";
import MovieDetail from "./pages/MovieDetail";
import MovieOrder from "./pages/MovieOrder";
import Error from "./pages/Error";
import Payment from "./pages/Payment";
import ResultPayment from "./pages/ResultPayment";

function router() {
  return (
    <Routes>
      {/* nested */}
      <Route path="auth" element={<Auth />}>
        <Route index element={<SignIn />}></Route>
        <Route path="new" element={<SignUp />}></Route>
      </Route>
      {/* layout */}
      <Route element={<Movie />}>
        <Route index element={<LandingPage />}></Route>
        <Route path="movie">
          <Route index element={<AllMovie />}></Route>
          <Route path=":id" element={<MovieDetail />}></Route>
        </Route>
        {/* prefix */}
        <Route path="order">
          <Route index element={<Error />}></Route>
          <Route path=":id" element={<MovieOrder />}></Route>
          <Route path="payment">
            <Route path=":id" element={<Payment />}></Route>
            <Route path="succes" element={<ResultPayment />}></Route>
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default router;
