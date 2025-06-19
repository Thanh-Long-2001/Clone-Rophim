import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const subjects = [
  "Marvel",
  "4K",
  "Sitcom",
  "Lồng Tiếng Cực Mạnh",
  "Xuyên Không",
  "Cổ Trang",
  "More1",
  "More2",
  "More3",
];

export const Content1 = () => {
  let hasMore = false;
  const getVisibleItems = (visibleCount: number) => {
    const visibleItems = subjects.slice(0, visibleCount - 1);
    const hiddenCount = subjects.length - visibleCount + 1;
    if (hiddenCount > 0) {
      hasMore = true;
      return [...visibleItems, `+${hiddenCount}`];
    }

    return subjects.slice(0, visibleCount);
  };

  return (
    <div className="w-full px-12.5 ">
      <div className="text-white mb-[19.2px]">
        <h3 className="text-[28px] font-semibold leading-1.4">
          Bạn đang quan tâm gì?
        </h3>
      </div>
      <div className="hidden lg:grid grid-cols-7 gap-4">
        {getVisibleItems(7).map((item, i) => (
          <div
            key={i}
            className={`bg-white/10  ${
              i !== getVisibleItems(7).length - 1
                ? "px-4 py-[19.2px] pl-6 pr-10"
                : "flex items-center justify-center"
            } rounded-xl text-white`}
          >
            <div
              className={`h-[110px] flex flex-col ${
                i !== getVisibleItems(7).length - 1
                  ? "justify-end"
                  : "justify-center text-center"
              } gap-[11.2px]`}
            >
              <span className="font-bold text-[28px] leading-1.3">{item}</span>
              {hasMore && i !== getVisibleItems(7).length - 1 && (
                <span className="flex gap-[3px] items-center text-sm">
                  Xem chủ đề <FontAwesomeIcon icon={faAngleRight} />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
