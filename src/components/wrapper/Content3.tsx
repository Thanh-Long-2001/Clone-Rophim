import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewestFilmImg from "../../assets/newestFilm.png";

import { getVisibleItems } from "../../utils/helper.util";

export const Content3 = ({ title, items }) => {
  console.log(title);

  return (
    <div className="w-full px-12.5">
      <div className="text-white mb-[19.2px] flex items-center gap-4">
        <h3 className="text-[28px] font-semibold leading-1.4">{title}</h3>
        <div className="w-7 h-7 rounded-full border-[1px] border-white/20 flex items-center justify-center">
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div className="w-full flex gap-4">
        {getVisibleItems(items, 8).map((i) => (
          <div className="w-full flex gap-4">
            <div className="flex-1 flex flex-col gap-3">
              <div
                className=" h-[316.5px] bg-cover bg-no-repeat bg-center rounded-[8px] relative"
                style={{ backgroundImage: `url(${NewestFilmImg})` }}
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
                  <h4 className="text-white text-sm font-medium">{i.name}</h4>
                  <h4 className="text-white/40 text-xs mt-1.25">{i.type}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
