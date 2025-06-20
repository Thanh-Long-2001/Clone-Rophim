import { getVisibleItems } from "../../utils/helper.util";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TopMovie } from "../../data/listfilm.json";
import NewestFilmImg from "../../assets/newestFilm.png";

export const Content5 = () => {
  return (
    <div className="w-full px-12.5">
      <div className="text-white mb-[19.2px] flex items-center gap-4">
        <h3 className="text-[28px] font-semibold leading-1.4">
          Mãn Nhãn với Phim Chiếu Rạp
        </h3>
        <div className="w-7 h-7 rounded-full border-[1px] border-white/20 flex items-center justify-center">
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div className="w-full flex gap-4 h-[299.52px]">
        {getVisibleItems(TopMovie, 4).map((i) => (
          <div className="w-full flex">
            <div className="flex-1 flex flex-col">
              <div
                className=" h-[197.09px] bg-cover bg-no-repeat bg-center rounded-[8px] relative"
                style={{ backgroundImage: `url(${NewestFilmImg})` }}
              ></div>
              <div className="flex-1 px-5 py-4">
                <div className="h-full w-full flex gap-5 ">
                  <div className="w-20 h-30 -mt-15 relative">
                    <img
                      className="w-full h-full rounded-lg"
                      src={NewestFilmImg}
                    />
                  </div>
                  <div className=" flex-1 flex flex-col gap-1 text-white/40">
                    <h4 className="text-sm text-white text-ellipsis line-clamp-1 overflow-hidden whitespace-normal">
                      {i.name}
                    </h4>
                    <h4 className="text-xs text-ellipsis line-clamp-1 overflow-hidden whitespace-normal">
                      {i.subTitle}
                    </h4>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
