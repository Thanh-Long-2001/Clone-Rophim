import BackgroundImg from "../assets/backgroundImg.png";
import FilmName from "../assets/filmName.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
export const TopSlider = () => {
  return (
    <div className=" w-full xl:h-190 h-150 mx-auto max-md:h-75 ">
      <div
        className="h-full w-full"
        style={{
          WebkitMaskImage:
            "linear-gradient(0deg, transparent 0, black 20%, black 80%, transparent)",
        }}
      >
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center absolute top-0 left-0 z-0 "
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            maskImage:
              "linear-gradient(90deg,transparent 10px,rgba(0,0,0,.2) 15%,black 40%,black 80%,transparent 99%)",
          }}
        ></div>
        <div className="relative xl:h-[660px] h-60 md:h-150 w-full ">
          <div className="h-full w-fit max-md:w-full flex items-end max-md:items-end max-md:justify-center">
            <div className="relative xl:px-[50px] xl:py-25 xl:max-w-175 max-w-150 pb-7.5 px-7.5 z-5  max-md:w-full max-md:px-5 max-md:py-0">
              <div className="max-lg:hidden h-[130px] mb-4 cursor-pointer">
                <img src={FilmName} />
              </div>
              <h1 className="max-md:block hidden font-bold text-xl mb-4 max-md:mb-2 max-md:text-center text-white cursor-pointer">
                Tay Nghiệp Dư
              </h1>
              <h3 className="mb-4 max-md:mb-2 text-[#FFD875] cursor-pointer max-md:text-center">
                The Amateur
              </h3>
              <div className="flex gap-[9.6px] text-[#FFD875] mb-4 max-md:mb-3 cursor-pointer max-md:flex max-md:justify-center">
                <div className="rounded-[5.28px] px-[6.4px] border-[1px] border-[#FFD875] flex items-center ">
                  <span className="pr-1 text-[10px]">IMDb</span>
                  <span className="text-white leading-6 text-sm">6.5</span>
                </div>
                <div
                  className="rounded-[5.28px] px-[6.4px] bg-[#FFD875]"
                  style={{
                    backgroundImage: "linear-gradient(220deg, #FFD875, #FFF)",
                  }}
                >
                  <span className="text-sm text-black leading-[19.2px] font-medium">
                    4k
                  </span>
                </div>
                <div className="rounded-[5.28px] flex items-center px-[6.4px] bg-white ">
                  <span className="text-xs text-black font-medium">T18</span>
                </div>
                <div className="rounded-[5.28px] flex items-center px-[6.4px] border-[1px] border-[#fff]">
                  <span className="text-xs text-white">2025</span>
                </div>
                <div className="rounded-[5.28px] flex items-center px-[6.4px] border-[1px] border-[#fff]">
                  <span className="text-xs text-white">1h 44m</span>
                </div>
              </div>
              <div className="flex gap-[9.6px] text-white mb-6 cursor-pointer max-md:hidden">
                <div className="rounded-[5.28px] px-[6.4px] bg-white/10 text-hover-change text-xs h-6.5 flex items-center ">
                  <span className="">Chiếu Rạp</span>
                </div>
                <div className="rounded-[5.28px] px-[6.4px] bg-white/10 text-hover-change text-xs h-6.5  flex items-center">
                  <span className="">Gay Cấn</span>
                </div>
                <div className="rounded-[5.28px] px-[6.4px] bg-white/10 text-hover-change text-xs h-6.5  flex items-center">
                  <span className="">Kinh Dị</span>
                </div>
                <div className="rounded-[5.28px] px-[6.4px] bg-white/10 text-hover-change text-xs h-6.5 flex items-center ">
                  <span className="">Bí Ẩn</span>
                </div>
                <div className="rounded-[5.28px] px-[6.4px] bg-white/10 text-hover-change text-xs h-6.5 flex items-center ">
                  <span className="">Hài</span>
                </div>
              </div>
              <div className="max-md:hidden text-white mb-6 cursor-pointer">
                Bộ phim sẽ là xoay quanh một sinh viên đại học liên tục gặp các
                ác mộng về sự sụp đổ của gia đình cô, buộc cô phải trở về ngôi
                nhà của mình và tìm kiếm người có thể ngăn chặn điều đó xảy ra
              </div>
              <div className="flex gap-8 items-center cursor-pointer max-md:hidden">
                <div className="h-17.5 w-17.5 flex items-center text-[28px] justify-center  rounded-full text-black bg-[linear-gradient(39deg,rgba(254,207,89,1),rgba(255,241,204,1))]">
                  <div className="relative left-[2px]">
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                </div>
                <div className="flex border-[2px] rounded-[30px] text-white  border-white/10 ">
                  <div className="pl-[6.4px] pr-[3.2px] flex justify-center items-center min-w-17  h-[50px] border-r-1 border-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_49_76)">
                        <path
                          d="M10 18.1432L1.55692 9.82794C0.689275 8.97929 0.147406 7.85276 0.0259811 6.64517C-0.0954433 5.43759 0.211298 4.22573 0.892612 3.22133C4.99987 -2.24739 10 4.10278 10 4.10278C10 4.10278 15.0001 -2.24739 19.1074 3.22133C19.7887 4.22573 20.0954 5.43759 19.974 6.64517C19.8526 7.85276 19.3107 8.97929 18.4431 9.82794L10 18.1432Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="pr-[6.4px] pl-[3.2px] flex justify-center items-center min-w-17  h-[50px] border-l-1 border-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_37_55)">
                        <path
                          d="M10 0.75C4.47734 0.75 0 5.22734 0 10.75C0 16.2727 4.47734 20.75 10 20.75C15.5227 20.75 20 16.2727 20 10.75C20 5.22734 15.5227 0.75 10 0.75ZM11.2664 14.9523C11.2664 15.1187 11.2337 15.2833 11.17 15.437C11.1064 15.5906 11.0131 15.7302 10.8955 15.8478C10.7779 15.9654 10.6383 16.0587 10.4846 16.1224C10.331 16.186 10.1663 16.2188 10 16.2188C9.83369 16.2188 9.66901 16.186 9.51537 16.1224C9.36172 16.0587 9.22211 15.9654 9.10452 15.8478C8.98692 15.7302 8.89364 15.5906 8.82999 15.437C8.76635 15.2833 8.73359 15.1187 8.73359 14.9523V9.88633C8.73359 9.72002 8.76635 9.55534 8.82999 9.4017C8.89364 9.24805 8.98692 9.10844 9.10452 8.99084C9.22211 8.87325 9.36172 8.77996 9.51537 8.71632C9.66901 8.65268 9.83369 8.61992 10 8.61992C10.1663 8.61992 10.331 8.65268 10.4846 8.71632C10.6383 8.77996 10.7779 8.87325 10.8955 8.99084C11.0131 9.10844 11.1064 9.24805 11.17 9.4017C11.2337 9.55534 11.2664 9.72002 11.2664 9.88633V14.9523ZM10 7.81406C9.74953 7.81406 9.50468 7.73979 9.29642 7.60063C9.08816 7.46148 8.92584 7.26369 8.82999 7.03229C8.73414 6.80088 8.70906 6.54625 8.75793 6.30059C8.80679 6.05493 8.92741 5.82928 9.10452 5.65217C9.28163 5.47506 9.50728 5.35445 9.75294 5.30558C9.9986 5.25672 10.2532 5.2818 10.4846 5.37765C10.716 5.4735 10.9138 5.63582 11.053 5.84408C11.1921 6.05234 11.2664 6.29718 11.2664 6.54766C11.2665 6.71398 11.2337 6.87868 11.1701 7.03235C11.1065 7.18602 11.0132 7.32565 10.8956 7.44326C10.778 7.56086 10.6384 7.65414 10.4847 7.71777C10.331 7.78139 10.1663 7.81411 10 7.81406Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute xl:bottom-[212px] md:bottom-[42px] md:right-[50px] xl:w-[450px] w-75 xl:h-[45px]  max-md:w-full max-md:pt-8 max-md:pb-4 max-md:bottom-0">
          <div className="h-full flex cursor-pointer max-md:h-fit max-md:w-full max-md:justify-center">
            <div className="mr-[5px] xl:flex-1 max-md:w-fit">
              <div
                className="w-full h-full bg-cover bg-no-repeat bg-center rounded-[8px] border-[2px] border-white max-xl:w-7.5 max-xl:h-7.5 max-xl:rounded-full"
                style={{ backgroundImage: `url(${BackgroundImg})` }}
              ></div>
            </div>
            <div className="mr-[5px] xl:flex-1 max-md:w-fit">
              <div
                className="w-full h-full bg-cover bg-no-repeat bg-center rounded-[8px] border-[2px] border-white/30 max-xl:w-7.5 max-xl:h-7.5 max-xl:rounded-full"
                style={{
                  backgroundImage: `url(${"https://static.nutscdn.com/vimg/150-0/27591bc926452f55a69c18dbf6b6f930.webp"})`,
                }}
              ></div>
            </div>
            <div className="mr-[5px] xl:flex-1 max-md:w-fit">
              <div
                className="w-full h-full bg-cover bg-no-repeat bg-center rounded-[8px] border-[2px] border-white/30 max-xl:w-7.5 max-xl:h-7.5 max-xl:rounded-full"
                style={{
                  backgroundImage: `url(${"https://static.nutscdn.com/vimg/150-0/60847d8f5b2a261bccf48c26dc958fb4.webp"})`,
                }}
              ></div>
            </div>
            <div className="mr-[5px] xl:flex-1 max-md:w-fit">
              <div
                className="w-full h-full bg-cover bg-no-repeat bg-center rounded-[8px] border-[2px] border-white/30 max-xl:w-7.5 max-xl:h-7.5 max-xl:rounded-full"
                style={{
                  backgroundImage: `url(${"https://static.nutscdn.com/vimg/150-0/3f912f6db5f248397fe4140f01c1c374.jpg"})`,
                }}
              ></div>
            </div>
            <div className="mr-[5px] xl:flex-1 max-md:w-fit">
              <div
                className="w-full h-full bg-cover bg-no-repeat bg-center rounded-[8px] border-[2px] border-white/30 max-xl:w-7.5 max-xl:h-7.5 max-xl:rounded-full"
                style={{
                  backgroundImage: `url(${"https://static.nutscdn.com/vimg/150-0/d65790d160abd8842a11aa80c19d3bf1.jpg"})`,
                }}
              ></div>
            </div>
            <div className="mr-[5px] xl:flex-1 max-md:w-fit">
              <div
                className="w-full h-full bg-cover bg-no-repeat bg-center rounded-[8px] border-[2px] border-white/30 max-xl:w-7.5 max-xl:h-7.5 max-xl:rounded-full"
                style={{
                  backgroundImage: `url(${"https://static.nutscdn.com/vimg/150-0/b93de5750a063ee53413a5730194f5ce.jpg"})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
