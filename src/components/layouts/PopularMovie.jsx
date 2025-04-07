import { Link } from "react-router";
import Card from "../elements/Card";
import Skeleton from "../elements/Skeleton";
import { FaLongArrowAltDown, FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";

const PopularMovie = ({ datas, isLoading }) => {
  const [isViewMore, setIsViewMore] = useState(false);
  return (
    <>
      <section className="px-4 lg:px-8 md:px-12 xl:px-24 py-12">
        <h1 className="text-center text-blue-600 font-bold text-2xl mb-4">MOVIES</h1>
        <p className="text-center text-4xl mb-8">
          Exciting Movies That Should Be <br className="hidden lg:block" /> Watched Today
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 overflow-y-hidden py-8 transition-all delay-300">
          {isLoading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : datas.length !== 0 ? (
            !isViewMore ? (
              datas.slice(0, 5).map((data, idx) => {
                return (
                  <Card
                    key={idx}
                    title={data.title}
                    dataGenre={data.genre_ids}
                    src={data.poster_path}
                    id={data.id}
                    vote_average={data.vote_average}
                  />
                );
              })
            ) : (
              datas.map((data, idx) => {
                return (
                  <Card
                    key={idx}
                    title={data.title}
                    dataGenre={data.genre_ids}
                    src={data.poster_path}
                    id={data.id}
                    vote_average={data.vote_average}
                  />
                );
              })
            )
          ) : (
            <p>Nothing</p>
          )}
        </div>
      </section>
      <div className="w-full flex justify-center">
        {!isViewMore ? (
          <button
            className="font-bold text-blue-600 items-center flex gap-4 text-2xl cursor-pointer"
            onClick={() => setIsViewMore(true)}>
            View More <FaLongArrowAltDown className="text-xl" />
          </button>
        ) : (
          <Link
            to={"/movie"}
            className="font-bold text-blue-600 items-center flex gap-4 text-2xl cursor-pointer">
            View All <FaLongArrowAltRight className="text-xl" />
          </Link>
        )}
      </div>
    </>
  );
};

export default PopularMovie;
