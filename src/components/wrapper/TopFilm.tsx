import { ArrowLeft } from "../../assets/icons/ArrowLeft";
import { ArrowRight } from "../../assets/icons/ArrowRight";
import { getVisibleItems } from "../../utils/helper.util";

export const TopFilm = ({ title, items }) => {
  return (
    <div className="w-full 2xl:px-12.5 md:px-5 px-4">
      <div className="w-full h-full relative text-white overflow-hidden ">
        <button className="left-0  flex justify-center items-center absolute -translate-x-full p-1.5 position-by-top bg-transparent opacity-50">
          <ArrowLeft w="48" h="48" />
        </button>
        <button className="right-0  flex justify-center items-center absolute translate-x-full  p-1.5 position-by-top opacity-50">
          <ArrowRight w="48" h="48" />
        </button>

        <div className="text-white mb-[19.2px] flex items-center gap-4 ">
          <h3 className="text-[28px] font-semibold leading-1.4 max-md:text-[22.4px]">
            {title}
          </h3>
        </div>
        <div className="w-full flex md:gap-4 gap-2 max-xl:overflow-x-auto hide-scrollbar">
          {getVisibleItems(items, 6).map((i, index) => (
            <div className="2xl:flex-1 flex-none flex flex-col gap-4 xl:w-[calc((100%-64px)/5)] lg:w-[calc((100%-48px)/4)] md:w-[calc((100%-32px)/3)] w-[calc((100%-8px)/2)]">
              <div
                className="bg-transparent group relative xl:h-[429.98px] md:h-[366.48px] h-[292.5px]  hover:bg-[#FFD875] cursor-pointer"
                style={{
                  WebkitClipPath: `${
                    index % 2 === 0
                      ? "polygon(94.239% 100%, 5.761% 100%, 5.761% 100%, 4.826% 99.95%, 3.94% 99.803%, 3.113% 99.569%, 2.358% 99.256%, 1.687% 98.87%, 1.111% 98.421%, .643% 97.915%, .294% 97.362%, .075% 96.768%, 0 96.142%, 0 3.858%, 0 3.858%, .087% 3.185%, .338% 2.552%, .737% 1.968%, 1.269% 1.442%, 1.92% .984%, 2.672% .602%, 3.512% .306%, 4.423% .105%, 5.391% .008%, 6.4% .024%, 94.879% 6.625%, 94.879% 6.625%, 95.731% 6.732%, 96.532% 6.919%, 97.272% 7.178%, 97.942% 7.503%, 98.533% 7.887%, 99.038% 8.323%, 99.445% 8.805%, 99.747% 9.326%, 99.935% 9.88%, 100% 10.459%, 100% 96.142%, 100% 96.142%, 99.925% 96.768%, 99.706% 97.362%, 99.357% 97.915%, 98.889% 98.421%, 98.313% 98.87%, 97.642% 99.256%, 96.887% 99.569%, 96.06% 99.803%, 95.174% 99.95%, 94.239% 100%)"
                      : "polygon(5.761% 100%,94.239% 100%,94.239% 100%,95.174% 99.95%,96.06% 99.803%,96.887% 99.569%,97.642% 99.256%,98.313% 98.87%,98.889% 98.421%,99.357% 97.915%,99.706% 97.362%,99.925% 96.768%,100% 96.142%,100% 3.858%,100% 3.858%,99.913% 3.185%,99.662% 2.552%,99.263% 1.968%,98.731% 1.442%,98.08% .984%,97.328% .602%,96.488% .306%,95.577% .105%,94.609% .008%,93.6% .024%,5.121% 6.625%,5.121% 6.625%,4.269% 6.732%,3.468% 6.919%,2.728% 7.178%,2.058% 7.503%,1.467% 7.887%,.962% 8.323%,.555% 8.805%,.253% 9.326%,.065% 9.88%,0 10.459%,0 96.142%,0 96.142%,.075% 96.768%,.294% 97.362%,.643% 97.915%,1.111% 98.421%,1.687% 98.87%,2.358% 99.256%,3.113% 99.569%,3.94% 99.803%,4.826% 99.95%,5.761% 100%)"
                  }`,
                }}
              >
                <div
                  className="absolute  top-0 left-0 w-full h-full  bg-cover bg-no-repeat bg-center rounded-[8px] hover:rounded-[16px] group-hover:w-[calc(100%-8px)] group-hover:h-[calc(100%-8px)] group-hover:top-[4px] group-hover:left-[4px]"
                  style={{
                    backgroundImage: `url(${i.image})`,
                    WebkitClipPath: `${
                      index % 2 === 0
                        ? "polygon(94.239% 100%, 5.761% 100%, 5.761% 100%, 4.826% 99.95%, 3.94% 99.803%, 3.113% 99.569%, 2.358% 99.256%, 1.687% 98.87%, 1.111% 98.421%, .643% 97.915%, .294% 97.362%, .075% 96.768%, 0 96.142%, 0 3.858%, 0 3.858%, .087% 3.185%, .338% 2.552%, .737% 1.968%, 1.269% 1.442%, 1.92% .984%, 2.672% .602%, 3.512% .306%, 4.423% .105%, 5.391% .008%, 6.4% .024%, 94.879% 6.625%, 94.879% 6.625%, 95.731% 6.732%, 96.532% 6.919%, 97.272% 7.178%, 97.942% 7.503%, 98.533% 7.887%, 99.038% 8.323%, 99.445% 8.805%, 99.747% 9.326%, 99.935% 9.88%, 100% 10.459%, 100% 96.142%, 100% 96.142%, 99.925% 96.768%, 99.706% 97.362%, 99.357% 97.915%, 98.889% 98.421%, 98.313% 98.87%, 97.642% 99.256%, 96.887% 99.569%, 96.06% 99.803%, 95.174% 99.95%, 94.239% 100%)"
                        : "polygon(5.761% 100%,94.239% 100%,94.239% 100%,95.174% 99.95%,96.06% 99.803%,96.887% 99.569%,97.642% 99.256%,98.313% 98.87%,98.889% 98.421%,99.357% 97.915%,99.706% 97.362%,99.925% 96.768%,100% 96.142%,100% 3.858%,100% 3.858%,99.913% 3.185%,99.662% 2.552%,99.263% 1.968%,98.731% 1.442%,98.08% .984%,97.328% .602%,96.488% .306%,95.577% .105%,94.609% .008%,93.6% .024%,5.121% 6.625%,5.121% 6.625%,4.269% 6.732%,3.468% 6.919%,2.728% 7.178%,2.058% 7.503%,1.467% 7.887%,.962% 8.323%,.555% 8.805%,.253% 9.326%,.065% 9.88%,0 10.459%,0 96.142%,0 96.142%,.075% 96.768%,.294% 97.362%,.643% 97.915%,1.111% 98.421%,1.687% 98.87%,2.358% 99.256%,3.113% 99.569%,3.94% 99.803%,4.826% 99.95%,5.761% 100%)"
                    }`,
                  }}
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
                      {i.pd && <span>PD.</span>}
                      {i.pd && <span>{i.pd}</span>}
                    </div>
                    <div
                      className={`gap-[3.2px] flex px-2 pt-[3.2px] rounded-tr-[4.8px] ${
                        !i.pd ? "rounded-tl-[4.8px]" : ""
                      }`}
                      style={{
                        backgroundColor: `${i.tm ? "rgb(44, 163, 93)" : ""}`,
                      }}
                    >
                      {i.tm && <span>TM.</span>}
                      {i.tm && <span className="">{i.tm}</span>}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0  bg-transparent group-hover:bg-[#FFD875] opacity-40 pointer-events-none"></div>
              </div>
              <div className=" md:pl-[66px] pl-9 flex relative">
                <div
                  className="absolute top-0 left-0 md:w-[50px] w-7.5 text-[58.8px] leading-[100%] font-extrabold italic z-3 text-center max-md:text-[28px]"
                  style={{
                    background:
                      "linear-gradient(39deg,rgba(254,207,89,1),rgba(255,241,204,1))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-sm font-medium leading-[18.9px] max-md:text-[13px]">
                    {i.name}
                  </h4>
                  <h4 className="text-white/40 text-xs leading-[18.9px]">
                    {i.type}
                  </h4>
                  <div className="flex leading-[18.9px] flex-wrap max-md:hidden">
                    <h4 className="text-white text-xs font-medium">
                      {i.otherInfos.old}
                    </h4>
                    <h4 className="text-white text-xs font-medium ml-2.5 pl-2.5 relative">
                      <div className="w-1.25 h-1.25 rounded-full bg-white/10 absolute left-0 -translate-x-1/2 top-1/4"></div>
                      <span>Phần</span>
                      {` ${i.otherInfos.part}`}
                    </h4>
                    <h4 className="text-white text-xs font-medium ml-2.5 pl-2.5 relative">
                      <div className="w-1.25 h-1.25 rounded-full bg-white/10 absolute left-0 -translate-x-1/2 top-1/4"></div>

                      <span>Tập</span>
                      {` ${i.otherInfos.chapter}`}
                    </h4>
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
