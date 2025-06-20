import { Content1 } from "./Content1";
import { Content2 } from "./Content2";
import { Content3 } from "./Content3";
import { Content4 } from "./Content4";
import { SocialInfo } from "./SocialInfo";
import { Content5 } from "./Content5";
import { dataListByType, topFilm } from "../../data/listfilm.json";
import { Content6 } from "./Content6";
import "./Wrapper.css";
export const Wrapper = () => {
  return (
    <div className="flex flex-col gap-12.5 -mt-25 relative z-6 pb-40">
      <Content1 />
      <Content2 />
      <SocialInfo />
      <Content3 {...dataListByType[0]} />
      <Content4 {...topFilm[0]} />
      <Content5 />
      <Content3 {...dataListByType[1]} />
      <Content4 {...topFilm[1]} />
      <Content3 {...dataListByType[2]} />
      <Content6 />
    </div>
  );
};
