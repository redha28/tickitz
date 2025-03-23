import Card from "../elements/Card";
// import { useEffect, useState } from "react";
// import { getPopularMovie } from "../../api/movie";
import Skeleton from "../elements/Skeleton";

const PopularMovie = ({ datas, isLoading }) => {
  // const [datas, setDatas] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const getMovie = async () => {
  //   try {
  //     setIsLoading(true);
  //     const res = await getPopularMovie();
  //     if (!res.ok) {
  //       throw new Error(`HTTP error! status: ${res.status}`);
  //     }
  //     const data = await res.json();
  //     setDatas(data.results);
  //   } catch (err) {
  //     if (err instanceof Error) console.log(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getMovie();
  // }, []);

  return (
    <section className="px-4 lg:px-24 py-12">
      <h1 className="text-center text-blue-600 font-bold text-2xl mb-4">MOVIES</h1>
      <p className="text-center text-4xl mb-8">
        Exciting Movies That Should Be <br className="hidden lg:block" /> Watched Today
      </p>
      <div className="flex gap-4 overflow-y-auto py-8 px-4">
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
                id={data.id}
                vote_average={data.vote_average}
              />
            );
          })
        ) : (
          <p>Nothing</p>
        )}
      </div>
    </section>
  );
};

export default PopularMovie;
