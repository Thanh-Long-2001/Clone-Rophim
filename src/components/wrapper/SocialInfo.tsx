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
import NewestFilmImg from "../../assets/newestFilm.png";
import { getVisibleItems } from "../../utils/helper.util";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons/faHeartCircleCheck";

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
    <div className="w-full px-12.5 h-[691.1px] text-white ">
      <div className="w-full h-full border-[1px] rounded-2xl border-white/10 flex flex-col">
        <div className="w-full h-[300px] px-8 py-6 border-b-[1px] border-white/10 flex flex-col">
          <div className="flex gap-2 mb-[19.2px]">
            <div className="text-[#FFD875]">
              <FontAwesomeIcon icon={faMedal} />
            </div>
            <h1 className="text-base font-medium">TOP BÌNH LUẬN</h1>
          </div>
          <div className="w-full flex gap-4 h-full ">
            {getVisibleItems(socialInfo.topComment, 6).map((i) => (
              <div className="flex-1 w-full h-full relative">
                <div
                  className="w-full h-full bg-cover bg-no-repeat bg-center opacity-50 absolute rounded-[9.6px]"
                  style={{
                    backgroundImage: `url(${NewestFilmImg})`,
                    maskImage:
                      "linear-gradient(180deg,black 0,transparent 80%)",
                  }}
                ></div>
                <div className="flex flex-col w-full h-full relative p-[19.2px] gap-3">
                  <div
                    className="w-11.5 h-11.5 rounded-full  bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(${NewestFilmImg})`,
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
                      src={NewestFilmImg}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-normal text-ellipsis line-clamp-1 overflow-hidden whitespace-normal">
                      {i.name}
                    </h4>
                  </div>
                </div>
              ))}
              <div className="mt-2 text-xs text-white/30">Xem thêm</div>
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
                      src={NewestFilmImg}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-normal text-ellipsis line-clamp-1 overflow-hidden whitespace-normal">
                      {i.name}
                    </h4>
                  </div>
                </div>
              ))}
              <div className="mt-2 text-xs text-white/30">Xem thêm</div>
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
                  <div className="w-fit h-7 content-center bg-amber-300 rounded-[30px]">
                    <h4 className="text-sm font-normal px-[12.8px] leading-[20.8px]">
                      {i.name}
                    </h4>
                  </div>
                </div>
              ))}
              <div className="mt-2 text-xs text-white/30">Xem thêm</div>
            </div>
          </div>
          <div className="flex-1 h-full px-8 py-6">
            <div className="flex gap-2 mb-[19.2px]">
              <div className="text-[#FFD875]">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h1 className="text-base font-medium">THỂ LOẠI HOT</h1>
            </div>
            <div className="flex flex-col ">
              {newComments.map((i) => (
                <div className="w-full flex items-center mb-1 rounded-[9.6px] bg-[#00000055] py-[9.6px] pl-[55.6px] pr-[12.8px]">
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
