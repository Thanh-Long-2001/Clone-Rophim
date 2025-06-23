import { getVisibleItems } from "../../utils/helper.util";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TopMovie } from "../../data/listfilm.json";
import { ArrowLeft } from "../../assets/icons/ArrowLeft";
import { ArrowRight } from "../../assets/icons/ArrowRight";

export const MovieFilm = () => {
  return (
    <div className="w-full px-12.5">
      <div className="w-full h-full relative text-white overflow-hidden">
        <button className="left-0  flex justify-center items-center absolute -translate-x-full p-1.5 position-by-top bg-transparent opacity-50">
          <ArrowLeft w="48" h="48" />
        </button>
        <button className="right-0  flex justify-center items-center absolute translate-x-full  p-1.5 position-by-top opacity-50">
          <ArrowRight w="48" h="48" />
        </button>
        <div className="text-white mb-[19.2px] flex items-center gap-4">
          <h3 className="text-[28px] font-semibold leading-1.4">
            Mãn Nhãn với Phim Chiếu Rạp
          </h3>
          <div className="w-7 h-7 rounded-full border-[1px] border-white/20 flex items-center justify-center">
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
        <div className="w-full flex gap-4 ">
          {getVisibleItems(TopMovie, 4).map((i) => (
            <div className="flex-1 flex flex-col h-[299.52px]">
              <div
                className=" h-[197.09px] bg-cover bg-no-repeat bg-center rounded-[8px] relative"
                style={{ backgroundImage: `url(${i.background})` }}
              ></div>
              <div className="flex-1 px-5 py-4">
                <div className="flex gap-5 ">
                  <div className="w-20 h-30 -mt-15 z-5">
                    <img
                      className="w-full h-full rounded-lg"
                      src={i.thumnail}
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1 text-white/60 font-normal">
                    <h4 className="text-sm text-white text-ellipsis line-clamp-1 overflow-hidden break-all font-medium">
                      {i.name}
                    </h4>
                    <h5 className="text-xs text-ellipsis line-clamp-1 overflow-hidden whitespace-normal break-all">
                      {i.subTitle}
                    </h5>
                    <div className="flex leading-[18.9px] flex-wrap">
                      <h4 className=" text-xs font-medium">
                        {i.otherInfos.old}
                      </h4>
                      <h4 className=" text-xs font-medium ml-2.5 pl-2.5 relative">
                        <div className="w-1.25 h-1.25 rounded-full bg-white/20 absolute left-0 -translate-x-1/2 top-1/4"></div>
                        {` ${i.otherInfos.releaseYear}`}
                      </h4>
                      <h4 className=" text-xs font-medium ml-2.5 pl-2.5 relative">
                        <div className="w-1.25 h-1.25 rounded-full bg-white/20 absolute left-0 -translate-x-1/2 top-1/4"></div>

                        {` ${i.otherInfos.duration}`}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
