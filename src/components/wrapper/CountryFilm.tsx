import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { listFilmByCountry } from "../../data/listfilm.json";
import { getVisibleItems } from "../../utils/helper.util";
import { ArrowRight } from "../../assets/icons/ArrowRight";
import { ArrowLeft } from "../../assets/icons/ArrowLeft";
import Korea1 from "../../assets/filmImg/korea/8bb89f53976f3bdfda177596c74a8feb.webp";
import Korea2 from "../../assets/filmImg/korea/9a9ad5d3d25b1e4526f949e813379142.webp";
import Korea3 from "../../assets/filmImg/korea/22c4a73009e93758c324c3f8001a0a0c.webp";
import Korea4 from "../../assets/filmImg/korea/c62c6dec414d16a8fc42dd6b09e3a263.webp";
import Korea5 from "../../assets/filmImg/korea/4954a5ec5db25b7096aeac408329f253.webp";
import China1 from "../../assets/filmImg/china/3dab8efd5a7def80ce85b975d1754799.webp";
import China2 from "../../assets/filmImg/china/7230af672bb85f672e0978639214d39a.webp";
import China3 from "../../assets/filmImg/china/98bfac3021c629f948483e87b3e9e42d.webp";
import China4 from "../../assets/filmImg/china/a80da13135efd24e001b2cbddf9587a1.webp";
import China5 from "../../assets/filmImg/china/e25e1e21545a467d3e1d26f46d333f0f.webp";
import USUK1 from "../../assets/filmImg/usuk/289f326faa807d9704753a5c9978fa0a.webp";
import USUK2 from "../../assets/filmImg/usuk/8016ffe1a9c0761917606c48e1b1a82b.webp";
import USUK3 from "../../assets/filmImg/usuk/bfc4367ea707a9fa0941286aefcde186.webp";
import USUK4 from "../../assets/filmImg/usuk/ddefd87aa6338d26f87d3fe07b5a3581.webp";
import USUK5 from "../../assets/filmImg/usuk/fd79ee8d6cd5e33f78abb4ac71eaf874.webp";

const imageMap: Record<string, string> = {
  Korea1,
  Korea2,
  Korea3,
  Korea4,
  Korea5,
  China1,
  China2,
  China3,
  China4,
  China5,
  USUK1,
  USUK2,
  USUK3,
  USUK4,
  USUK5,
};

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
export const CountryFilm = () => {
  return (
    <div className="w-full 2xl:px-12.5 md:px-5">
      <div className="w-full md:p-8 p-4 flex flex-col gap-8 xl:h-[812.422px] rounded-2xl background-color-country">
        {listFilmByCountry.map((item, index) => (
          <div className="gap-4 flex flex-1 max-xl:flex-col ">
            <div className="xl:max-w-[214px] w-full flex items-center  gap-6 xl:pl-2 xl:pr-6">
              <div className="w-full flex xl:flex-col max-xl:justify-between justify-center gap-6 ">
                <span
                  className="text-[28px] font-bold leading-[36.4px] max-md:text-[21px]"
                  style={{
                    background: `${getBackgroundColor(index)}`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.country}
                </span>
                <span className="flex gap-[3px] items-center text-sm text-white cursor-pointer text-hover-change">
                  <span className="max-md:hidden">Xem toàn bộ</span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </div>
            </div>

            <div className=" w-full ">
              <div className="w-full h-full relative ">
                <button className="max-xl:hidden absolute z-2 w-10 h-10 rounded-full bg-white flex justify-center items-center -translate-x-1/2 translate-y-13">
                  <ArrowLeft w="20" h="20" />
                </button>
                <button className="max-xl:hidden absolute z-2 right-0 w-10 h-10 rounded-full bg-white flex justify-center items-center translate-x-1/2 translate-y-13">
                  <ArrowRight w="20" h="20" />
                </button>
                <div className="w-full h-full flex max-xl:overflow-x-auto hide-scrollbar lg:gap-4 gap-2 overflow-hidden ">
                  {item.items.map((i, idx) => (
                    <div
                      key={idx}
                      className={`2xl:flex-1 flex-none h-full flex flex-col cursor-pointer lg:w-[calc((100%-32px)/3)] md:w-[calc((100%-16px)/2)] w-[calc((100%-8px)/2)]`}
                    >
                      <div
                        className="w-full xl:h-[158.81px] md:h-[178.8px] h-[109.2px] bg-cover bg-no-repeat bg-center rounded-[8px] relative"
                        style={{ backgroundImage: `url(${imageMap[i.image]})` }}
                      >
                        <div className="absolute bottom-0 left-4 text-white flex text-xs ">
                          <div
                            className={`gap-[3.2px] flex px-2 pt-[3.2px] rounded-tl-[4.8px] ${
                              !i.tm ? "rounded-tr-[4.8px]" : ""
                            }`}
                            style={{
                              backgroundColor: i.pd ? "rgb(94, 96, 112)" : "",
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
                              backgroundColor: i.tm ? "rgb(44, 163, 93)" : "",
                            }}
                          >
                            {i.tm && <span>TM.</span>}
                            {i.tm && <span className="">{i.tm}</span>}
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
          </div>
        ))}
      </div>
    </div>
  );
};
