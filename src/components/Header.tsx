import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0); // khi scroll > 0 thì đổi background
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`w-full  px-8 ${
        !isScrolled ? "h-[90px]" : "h-[70px] bg-black"
      } flex items-center text-white`}
    >
      <div className="w-full h-full flex gap-[32px] items-center">
        <div
          className="max-w-[154.55px] w-full h-11.5 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${Logo})` }}
        ></div>
        <div className="max-w-[368px] w-full h-[44.8px] flex items-center px-12 relative bg-white/20 rounded-[6.4px]">
          <div className="px-[3px] absolute left-3">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>

          <div className="w-full text-sm">
            <input
              className="placeholder:text-white"
              placeholder="Tìm kiếm phim, diễn viên"
            ></input>
          </div>
        </div>
        <div className="h-11 w-full flex items-center justify-between text-sm font-normal">
          <div className="flex gap-4">
            <div className="px-3 leading-9">Chủ Đề</div>
            <div className="px-3 leading-9 flex">
              Thể loại
              <div className="ml-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <div className="px-3 leading-9">Phim Lẻ</div>
            <div className="px-3 leading-9">Phim Bộ</div>
            <div className="px-3 leading-9 flex ">
              <div className="mr-2 ">
                <span className="py-[2px] rounded-[3px] px-[2.5px] bg-[#FFD875] text-[10px] font-medium">
                  NEW
                </span>
              </div>
              Xem Chung
            </div>
            <div className="px-3 leading-9 flex">
              Quốc gia
              <div className="ml-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <div className="px-3 leading-9">Diễn Viên</div>
            <div className="px-3 leading-9">Lịch chiếu</div>
          </div>
          <div className="flex items-center ">
            <div className="border-r-1 pr-4 border-white/30 ">
              <div className="flex items-center gap-3  px-[19.2px]">
                <div className="">
                  <svg
                    id="Pc"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.9998 16.8992C11.1655 16.8992 11.2998 16.7649 11.2998 16.5992V11.5982C11.2998 9.28322 13.1838 7.39922 15.4998 7.39922H18.7998C18.9238 7.39922 19.0446 7.41106 19.1616 7.43327C19.3745 7.47368 19.5998 7.32682 19.5998 7.11012V6.69922C19.5998 6.67022 19.5968 6.64022 19.5918 6.61222C19.2488 4.66722 17.4468 3.19922 15.4008 3.19922H6.79982C4.42882 3.19922 2.49982 5.12822 2.49982 7.49922V12.5982C2.49982 14.9692 4.42882 16.8992 6.79982 16.8992H8.24282L7.86182 19.2492H5.85982C5.44582 19.2492 5.10982 19.5852 5.10982 19.9992C5.10982 20.4132 5.44582 20.7492 5.85982 20.7492H10.7598C11.1738 20.7492 11.5098 20.4132 11.5098 19.9992C11.5098 19.5852 11.1738 19.2492 10.7598 19.2492H9.38082L9.76182 16.8992H10.9998Z"
                      fill="rgb(255, 216, 117)"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.1912 18.4564C16.7712 18.4564 16.4302 18.1154 16.4302 17.6954C16.4302 17.2754 16.7712 16.9344 17.1912 16.9344C17.6112 16.9344 17.9522 17.2754 17.9522 17.6954C17.9522 18.1154 17.6112 18.4564 17.1912 18.4564ZM18.8002 8.90039H15.5002C14.0362 8.90039 12.8002 10.1364 12.8002 11.5994V18.0994C12.8002 19.5884 14.0112 20.7994 15.5002 20.7994H18.8002C20.2892 20.7994 21.5002 19.5884 21.5002 18.0994V11.5994C21.5002 10.1364 20.2642 8.90039 18.8002 8.90039Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="flex-nowrap">Tải ứng dụng</span>
                  <strong>RoPhim</strong>
                </div>
              </div>
            </div>
            <button className=" text-black ml-[35.2px] rounded-[48px] bg-white border-[1px] py-[9.6px] px-[22.4px] flex gap-2 items-center border-white">
              <div className="ml-1">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <span className="text-sm font-medium">Thành viên</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
