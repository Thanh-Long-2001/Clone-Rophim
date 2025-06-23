import { Attention } from "./Attention";
import { CountryFilm } from "./CountryFilm";
import { TopFilm } from "./TopFilm";
import { SocialInfo } from "./SocialInfo";
import { MovieFilm } from "./MovieFilm";
import { dataListByType, topFilm } from "../../data/listfilm.json";
import { AnimeStore } from "./AnimeStore";
import "./Wrapper.css";
import { UniqueStyle } from "./UniqueStyle";
export const Wrapper = () => {
  return (
    <div className="w-full flex flex-col gap-12.5 -mt-25 relative z-6 pb-40">
      <Attention />
      <CountryFilm />
      <SocialInfo />
      <UniqueStyle {...dataListByType[0]} />
      <TopFilm {...topFilm[0]} />
      <MovieFilm />
      <UniqueStyle {...dataListByType[1]} />
      <TopFilm {...topFilm[1]} />
      <UniqueStyle {...dataListByType[2]} />
      <AnimeStore />
    </div>
  );
};
