import { useSelector } from "react-redux";
import Button from "./Button";

const Card = ({ src, title, release, dataGenre = [], size, id, vote_average }) => {
  const { isLoading, data } = useSelector((state) => state.genres);

  const filteredGenre = (arr1, arr2) => {
    const filteredArr = arr1.filter((item) => arr2.includes(item.id));
    if (arr2.length > 3) {
      const idx = filteredArr.length - 3;
      const gendreFix = filteredArr.slice(idx);
      gendreFix.push({ id: 0, name: "More.." });
      return gendreFix;
    }
    return filteredArr;
  };

  return (
    <div className="flex flex-col gap-2 justify-between ">
      <div
        className={`${size} relative group w-56 h-72 rounded-md bg-cover hover:shadow-white bg-center hover:scale-105 transition-all`}
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${src})` }}>
        <div className="absolute hidden rounded-md group-hover:flex bg-black/60 backdrop-blur-xs w-full h-full flex-col items-center justify-center gap-4">
          <Button
            title="Details"
            classname="border-2 border-white hover:bg-blue-600 text-white font-bold px-4 py-2 w-32 text-center rounded-md"
            to={`/movie/${id}`}
          />
          <Button
            title="Buy Ticket"
            classname="border-2 border-white hover:bg-blue-600 text-white px-4 py-2 w-32 font-bold text-center rounded-md"
            to={`/order/${id}`}
          />
          <div className="absolute w-full min-h-12 bottom-0"></div>
        </div>
        {vote_average >= 8.5 ? (
          <div className="absolute px-1 py-1 bg-blue-600 text-white rounded-r-full top-2 rounded-md">
            <p>Recomended</p>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="text-ellipsis whitespace-nowrap overflow-hidden max-h-8 max-w-56  font-bold text-xl">
        {title}
      </div>
      {release && (
        <div className="">
          <p className="font-bold text-blue-600 mb-2">{release}</p>
        </div>
      )}

      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div className="flex gap-2 flex-wrap h-12">
          {filteredGenre(data.genres, dataGenre).map((data) => {
            return (
              <div
                key={data.id}
                className="bg-gray-300 h-6 flex justify-center items-center px-1 py-1 rounded-md text-gray-500">
                {data.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Card;
