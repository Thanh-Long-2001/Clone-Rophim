import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const subjects = [
  { title: "Marvel", color: "#556dd9" },
  { title: "4K", color: "#8181ab" },
  { title: "Sitcom", color: "#449b86" },
  { title: "Lồng Tiếng Cực Mạnh", color: "#907ec2" },
  { title: "Xuyên Không", color: "#d5937a" },
  { title: "Cổ Trang", color: "#b65c5c" },
  { title: "More1", color: "#515464" },
  { title: "More2", color: "#515464" },
  { title: "More3", color: "#515464" },
  { title: "More3", color: "#515464" },
];

export const Attention = () => {
  let hasMore = false;
  const getVisibleItems = (visibleCount: number) => {
    const visibleItems = subjects.slice(0, visibleCount - 1);
    const hiddenCount = subjects.length - visibleCount + 1;
    if (hiddenCount > 0) {
      hasMore = true;
      return [
        ...visibleItems,
        { title: `+${hiddenCount} chủ đề`, color: "#515464" },
      ];
    }

    return subjects.slice(0, visibleCount);
  };

  return (
    <div className="w-full max-md:mt-7.5">
      <div className="2xl:px-12.5 px-5 max-md:px-4 text-white mb-[19.2px]">
        <h3 className="2xl:text-[28px] font-semibold leading-1.4 xl:text-[25.2px] max-xl:text-[22.4px] flex-1">
          Bạn đang quan tâm gì?
        </h3>
      </div>
      <div className=" 2xl:px-12.5 px-5 max-md:px-4 max-md:overflow-x-auto hide-scrollbar">
        <div className="grid 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 gap-4 max-md:gap-2 max-md:flex max-md:w-max  ">
          {getVisibleItems(7).map((item, i) => (
            <div
              key={i}
              className={` ${
                i !== getVisibleItems(7).length - 1
                  ? "md:px-4 md:py-[19.2px] md:pl-6 md:pr-10 max-md:h-20.5"
                  : "flex items-center justify-center"
              } rounded-xl max-md:rounded-lg text-white cursor-pointer transition-transform max-md:w-30 max-md:flex max-md:items-center max-md:p-4`}
              style={{ backgroundColor: item.color }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-9.6px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div
                className={`h-[110px] max-md:h-10 flex flex-col ${
                  i === getVisibleItems(7).length - 1 ? "xl:h-fit py-4" : ""
                } ${
                  i !== getVisibleItems(7).length - 1
                    ? "justify-end max-md:justify-center"
                    : "justify-center text-center"
                } gap-[11.2px]`}
              >
                <span className="font-bold 2xl:text-[28px] xl:text-[22.4px]  max-md:text-[15.4px] text-[19.6px] leading-1.3">
                  {item.title}
                </span>
                {hasMore && i !== getVisibleItems(7).length - 1 && (
                  <span className="flex gap-[3px] items-center text-sm max-md:hidden">
                    Xem chủ đề <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
