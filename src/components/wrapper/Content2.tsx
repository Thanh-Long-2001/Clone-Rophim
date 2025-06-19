import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { listFilmByCountry } from "../../data/listfilm.json";
import BackgroundImg from "../../assets/backgroundImg.png";
const getBackgroundColor = (index: number) => {
  switch (index) {
    case 0:
      return "linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(103, 65, 150) 130%)";
      break;
    case 1:
      return "linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(247, 161, 11) 130%)";
      break;
    case 2:
      return "linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(255, 0, 153) 130%)";
      break;
  }
};
export const Content2 = () => {
  const getVisibleItems = (list, visibleCount: number) => {
    return list.slice(0, visibleCount);
  };
  return (
    <div className="w-full px-12.5 ">
      <div className="w-full p-8 flex flex-col gap-8 h-[812.422px]">
        {listFilmByCountry.map((item, index) => (
          <div className="gap-4 flex flex-1">
            <div className="flex items-center gap-6 pl-2 pr-6">
              <div className="max-w-[214px] flex flex-col justify-center gap-6">
                <span
                  className="text-[28px] font-bold leading-[36.4px]"
                  style={{
                    background: `${getBackgroundColor(index)}`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.country}
                </span>
                <span className="flex gap-[3px] items-center text-sm text-white">
                  Xem chủ đề <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </div>
            </div>

            <div className="max-w-[1486px] w-full">
              <div className="w-full h-full flex gap-4">
                {getVisibleItems(item.items, 5).map((i) => (
                  <div className="flex-1 h-full flex flex-col">
                    <div
                      className="w-full h-[158.81px] bg-cover bg-no-repeat bg-center rounded-[8px] relative"
                      style={{ backgroundImage: `url(${BackgroundImg})` }}
                    >
                      <div className="absolute bottom-0 left-4 text-white flex text-xs ">
                        <div
                          className={`gap-[3.2px] flex px-2 pt-[3.2px] rounded-tl-[4.8px] ${
                            !i.tm ? "rounded-tr-[4.8px]" : ""
                          }`}
                          style={{
                            backgroundColor: `${
                              i.pd ? `rgb(94, 96, 112)` : ""
                            }`,
                          }}
                        >
                          {i.pd && <span>PD.</span>}
                          {i.pd && <span>{i.pd}</span>}
                        </div>
                        <div
                          className={`gap-[3.2px] flex px-2 pt-[3.2px] rounded-tr-[4.8px] ${
                            !i.pd ? "rounded-tl-[4.8px]" : ""
                          }`}
                          style={{
                            backgroundColor: `${
                              i.tm ? "rgb(44, 163, 93)" : ""
                            }`,
                          }}
                        >
                          {i.tm && <span>TM.</span>}
                          {i.tm && (
                            <span className="leading-[100%]">{i.tm}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 px-4 py-3">
                      <div className="h-full w-full">
                        <h4 className="text-white text-sm font-medium">
                          {i.name}
                        </h4>
                        <h4 className="text-white/40 text-xs mt-1.25">
                          {i.type}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
