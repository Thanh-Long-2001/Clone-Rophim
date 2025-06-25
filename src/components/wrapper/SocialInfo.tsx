import {
  faArrowTrendDown,
  faArrowTrendUp,
  faBolt,
  faCircleDown,
  faCircleUp,
  faClapperboard,
  faFolderPlus,
  faMedal,
  faMessage,
  faMinus,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  socialInfo,
  outStanding,
  mostFavourite,
  hotCategories,
  newComments,
} from "../../data/listfilm.json";
import { getVisibleItems } from "../../utils/helper.util";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons/faHeartCircleCheck";
import CommentImg1 from "../../assets/filmImg/comment/0718ef873d907689b4c55062a70e4b5b.webp";
import CommentImg2 from "../../assets/filmImg/comment/492206a5fddf0a2bcb5533ee829365e0.webp";
import CommentImg3 from "../../assets/filmImg/comment/8b86854b8793b8e4bf1d0aa220513d5e.webp";
import CommentImg4 from "../../assets/filmImg/comment/c8898c27e126eb8232e9fd9dfa348acb.webp";
import Avatar1 from "../../assets/avatar/02.jpg";
import Avatar2 from "../../assets/avatar/04.jpg";
import Avatar3 from "../../assets/avatar/05.jpg";
import Avatar4 from "../../assets/avatar/11.jpg";
import Avatar5 from "../../assets/avatar/17.jpg";
import { ArrowLeft } from "../../assets/icons/ArrowLeft";
import { ArrowRight } from "../../assets/icons/ArrowRight";

const imageMap: Record<string, string> = {
  CommentImg1,
  CommentImg2,
  CommentImg3,
  CommentImg4,
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
};

const getIconStatus = (status: string) => {
  if (status === "stable") {
    return <FontAwesomeIcon icon={faMinus} />;
  } else if (status === "increase") {
    return <FontAwesomeIcon icon={faArrowTrendUp} />;
  } else return <FontAwesomeIcon icon={faArrowTrendDown} />;
};

const getColorIconByStatus = (status: string) => {
  if (status === "stable") {
    return "text-white/30";
  } else if (status === "increase") {
    return "text-[#DC328C]";
  } else return "text-[#BEDC33]";
};

export const SocialInfo = () => {
  return (
    <div className="w-full 2xl:px-12.5 h-[675.11px] text-white max-2xl:hidden">
      <div className="w-full h-full border-[1px] rounded-2xl border-white/10 flex flex-col">
        <div className="w-full h-[300px] px-8 py-6 border-b-[1px] border-white/10 flex flex-col relative">
          <button className="w-10 h-10 left-0  flex justify-center items-center border-[1px] border-white/10 rounded-full absolute -translate-x-1/2 position-by-top bg-[#191B24]">
            <ArrowLeft w="20" h="20" />
          </button>
          <button className="w-10 h-10 right-0  flex justify-center items-center border-[1px] border-white/10 rounded-full absolute translate-x-1/2 position-by-top bg-[#191B24]">
            <ArrowRight w="20" h="20" />
          </button>
          <div className="flex gap-2 mb-[19.2px]">
            <div className="text-[#FFD875]">
              <FontAwesomeIcon icon={faMedal} />
            </div>
            <h1 className="text-base font-medium">TOP BÌNH LUẬN</h1>
          </div>
          <div className="w-full flex gap-4 h-full">
            {getVisibleItems(socialInfo.topComment, 6).map((i) => (
              <div className="flex-1 w-full h-full relative hover:opacity-90 opacity-70 group">
                <div
                  className="w-full h-full bg-cover bg-no-repeat bg-center  absolute rounded-[9.6px] blur-[5px]"
                  style={{
                    backgroundImage: `url(${imageMap[i.moreInfo.image]})`,
                    maskImage:
                      "linear-gradient(180deg,black 0,transparent 80%)",
                  }}
                ></div>
                <div className="flex flex-col w-full h-full relative p-[19.2px] gap-3">
                  <div
                    className="w-11.5 h-11.5 rounded-full  bg-cover bg-no-repeat bg-center border border-transparent group-hover:border-white"
                    style={{
                      backgroundImage: `url(${imageMap[i.avatar]})`,
                    }}
                  ></div>
                  <div className="flex flex-col gap-[6.4px] w-full">
                    <span className="font-medium">{i.name}</span>
                    <div className="h-10.5 whitespace-normal line-clamp-2 overflow-hidden text-ellipsis text-sm text-white/60 break-all leading-5">
                      {i.comment}
                    </div>
                    <div className="flex gap-4 text-xs text-white/60 mt-2">
                      <div>
                        <FontAwesomeIcon icon={faCircleUp} />
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faCircleDown} />
                      </div>
                      <div className="">
                        <FontAwesomeIcon icon={faMessage} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="w-[370px] h-full px-8 py-6 border-r-[1px] border-white/10">
            <div className="flex gap-2 mb-[19.2px]">
              <div className="text-[#FFD875]">
                <FontAwesomeIcon icon={faClapperboard} />
              </div>
              <h1 className="text-base font-medium">SÔI NỔI NHẤT</h1>
            </div>
            <div className="flex flex-col ">
              {outStanding.map((i, index) => (
                <div className="h-12.5 w-full flex items-center gap-4">
                  <div className="text-white/30 text-[18px] font-semibold">
                    {index + 1}.
                  </div>
                  <div
                    className={`${getColorIconByStatus(
                      i.status
                    )} text-sm w-4 text-center`}
                  >
                    {getIconStatus(i.status)}
                  </div>
                  <div className="w-[25px] h-9 ">
                    <img
                      className="w-full h-full rounded-[1.6px]"
                      src={i.image}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-normal text-ellipsis line-clamp-1 overflow-hidden whitespace-normal text-hover-change">
                      {i.name}
                    </h4>
                  </div>
                </div>
              ))}
              <div className="mt-2 text-xs text-white/30 text-hover-change cursor-pointer">
                Xem thêm
              </div>
            </div>
          </div>
          <div className="w-[370px] h-full px-8 py-6 border-r-[1px] border-white/10">
            <div className="flex gap-2 mb-[19.2px]">
              <div className="text-[#FFD875]">
                <FontAwesomeIcon icon={faHeartCircleCheck} />
              </div>
              <h1 className="text-base font-medium">YÊU THÍCH NHẤT</h1>
            </div>
            <div className="flex flex-col ">
              {mostFavourite.map((i, index) => (
                <div className="h-12.5 w-full flex items-center gap-4">
                  <div className="text-white/30 text-[18px] font-semibold">
                    {index + 1}.
                  </div>
                  <div
                    className={`${getColorIconByStatus(
                      i.status
                    )} text-sm w-4 text-center`}
                  >
                    {getIconStatus(i.status)}
                  </div>
                  <div className="w-[25px] h-9 ">
                    <img
                      className="w-full h-full rounded-[1.6px]"
                      src={i.image}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-normal text-ellipsis line-clamp-1 overflow-hidden whitespace-normal text-hover-change">
                      {i.name}
                    </h4>
                  </div>
                </div>
              ))}
              <div className="mt-2 text-xs text-white/30 cursor-pointer text-hover-change">
                Xem thêm
              </div>
            </div>
          </div>
          <div className="w-[280px] h-full px-8 py-6 border-r-[1px] border-white/10">
            <div className="flex gap-2 mb-[19.2px]">
              <div className="text-[#FFD875]">
                <FontAwesomeIcon icon={faFolderPlus} />
              </div>
              <h1 className="text-base font-medium">THỂ LOẠI HOT</h1>
            </div>
            <div className="flex flex-col ">
              {hotCategories.map((i, index) => (
                <div className="h-12.5 w-full flex items-center gap-4">
                  <div className="text-white/30 text-[18px] font-semibold">
                    {index + 1}.
                  </div>
                  <div
                    className={`${getColorIconByStatus(
                      i.status
                    )} text-sm w-4 text-center`}
                  >
                    {getIconStatus(i.status)}
                  </div>
                  <div
                    className="w-fit h-7 content-center rounded-[30px]"
                    style={{ backgroundColor: i.color }}
                  >
                    <h4 className="text-sm font-normal px-[12.8px] leading-[20.8px] text-hover-change">
                      {i.name}
                    </h4>
                  </div>
                </div>
              ))}
              <div className="mt-2 text-xs text-white/30 text-hover-change cursor-pointer">
                Xem thêm
              </div>
            </div>
          </div>
          <div className="flex-1 h-full px-8 py-6">
            <div className="flex gap-2 mb-[19.2px]">
              <div className="text-[#FFD875]">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h1 className="text-base font-medium">BÌNH LUẬN MỚI</h1>
            </div>
            <div className="flex flex-col ">
              {newComments.map((i) => (
                <div className="w-full h-17 flex items-center mb-1 rounded-[9.6px] bg-[#00000055] py-[9.6px] pl-[55.6px] pr-[12.8px] relative border border-transparent hover:border-white">
                  <div className="absolute h-7.5 w-7.5 left-[12.8px] top-4.5 ">
                    <img
                      className="w-full h-full rounded-full"
                      src={imageMap[i.avatar]}
                    />
                  </div>
                  <div className="flex flex-col gap-[3.2px]">
                    <div className="flex items-center text-xs font-normal text-white/50">
                      <span className="text-sm text-white leading-[19.2px]">
                        {i.name}
                      </span>
                      <span className="text-sm leading-[19.2px] ml-1 text-ellipsis line-clamp-1 overflow-hidden whitespace-normal break-all">
                        {i.comment}
                      </span>
                    </div>
                    <div className="flex gap-1 items-center text-xs font-normal ">
                      <div className="text-[9px] leading-[19.2px] text-[#FFD875] flex items-center">
                        <FontAwesomeIcon icon={faPlay} />
                      </div>
                      <span className="text-xs text-white/30 leading-[19.2px]">
                        {i.filmName}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
