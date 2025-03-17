import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Card from "../elements/Card";
import { useEffect, useState } from "react";
import { getUpcomingMovie } from "../../api/movie";
import Skeleton from "../elements/Skeleton";

const UpcomingMovie = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getMovie = async () => {
    try {
      setIsLoading(true);
      const res = await getUpcomingMovie();
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setDatas(data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getMovie();
  }, []);

  return (
    <div className="px-4 lg:px-24 py-12">
      <div className="flex justify-center lg:justify-between mb-8">
        <div>
          <h1 className="text-blue-600 font-bold text-2xl text-center lg:text-start">
            UPCOMING MOVIES
          </h1>
          <p className="text-3xl font-semibold text-center lg:text-start">
            Exciting Movie Coming Soon
          </p>
        </div>
        <div className="hidden lg:block">
          <div className="flex gap-4">
            <div className="px-4 py-4 rounded-full bg-gray-400">
              <FaArrowLeftLong className="text-white font-bold" />
            </div>
            <div className="px-4 py-4 rounded-full bg-blue-600">
              <FaArrowRightLong className="text-white font-bold" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-y-hidden py-8 px-4">
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
          datas.map((data, idx) => {
            return (
              <Card
                key={idx}
                title={data.title}
                dataGenre={data.genre_ids}
                src={data.poster_path}
                release={data.release_date}
                id={data.id}
                vote_average={data.vote_average}
              />
            );
          })
        ) : (
          <p>Nothing</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingMovie;
