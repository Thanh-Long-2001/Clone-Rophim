import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getVisibleItems } from "../../utils/helper.util";
import { ArrowLeft } from "../../assets/icons/ArrowLeft";
import { ArrowRight } from "../../assets/icons/ArrowRight";

export const UniqueStyle = ({ title, items }) => {
  return (
    <div className="w-full 2xl:px-12.5 md:px-5 px-4">
      <div className="w-full h-full relative text-white overflow-hidden ">
        <button className="max-xl:hidden left-0 flex justify-center items-center absolute -translate-x-full p-1.5 position-by-top bg-transparent opacity-50">
          <ArrowLeft w="48" h="48" />
        </button>
        <button className="max-xl:hidden right-0 flex justify-center items-center absolute translate-x-full  p-1.5 position-by-top opacity-50">
          <ArrowRight w="48" h="48" />
        </button>

        <div className="text-white mb-[19.2px] flex items-center md:gap-4 max-md:gap-2">
          <h3 className="text-[28px] font-semibold leading-1.4 max-md:text-[22.4px] max-md:flex-1 w-fit">
            {title}
          </h3>
          <div className="w-7 h-7 rounded-full border-[1px] border-white/20 flex items-center justify-center">
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
        <div className="w-full h-full max-xl:overflow-x-auto hide-scrollbar">
          <div className="w-full flex md:gap-4 gap-2">
            {getVisibleItems(items, 8).map((i) => (
              <div className="2xl:flex-1 flex-none flex flex-col gap-3 xl:w-[calc((100%-96px)/7)] lg:w-[calc((100%-64px)/5)] md:w-[calc((100%-48px)/4)] w-[calc((100%-16px)/3)]">
                <div
                  className=" xl:h-[316.5px] md:h-[297px] h-[190.98px] bg-cover bg-no-repeat bg-center rounded-[8px] relative cursor-pointer hover:opacity-80"
                  style={{ backgroundImage: `url(${i.image})` }}
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white flex text-xs ">
                    <div
                      className={`gap-[3.2px] flex px-2 pt-[3.2px] rounded-tl-[4.8px] ${
                        !i.tm ? "rounded-tr-[4.8px]" : ""
                      }`}
                      style={{
                        backgroundColor: `${i.pd ? `rgb(94, 96, 112)` : ""}`,
                      }}
                    >
                      {i.pd && <span className="leading-[100%]">{i.pd}</span>}
                    </div>
                    <div
                      className={`gap-[3.2px] flex px-2 py-[3.2px] rounded-tr-[4.8px] ${
                        !i.pd ? "rounded-tl-[4.8px]" : ""
                      }`}
                      style={{
                        backgroundColor: `${i.tm ? "rgb(44, 163, 93)" : ""}`,
                      }}
                    >
                      {i.tm && <span className="leading-[100%]">{i.tm}</span>}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="h-full w-full text-center">
                    <h4 className="text-white text-sm font-medium text-ellipsis line-clamp-1 overflow-hidden whitespace-normal break-all text-hover-change cursor-pointer">
                      {i.name}
                    </h4>
                    <h4 className="text-white/40 text-xs mt-1.25 text-ellipsis line-clamp-1 overflow-hidden whitespace-normal break-all cursor-pointer">
                      {i.type}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
