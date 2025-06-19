import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SocialInfo = () => {
  return (
    <div className="w-full px-12.5 h-[691.1px] text-white ">
      <div className="w-full h-full border-[1px] rounded-2xl border-white/10">
        <div className="w-full h-[300px] px-8 py-6 border-b-[1px] border-white/10">
          <div className="flex gap-2">
            <div className="text-[#FFD875]">
              <FontAwesomeIcon icon={faMedal} />
            </div>
            <h1 className="text-base font-medium">TOP BÌNH LUẬN</h1>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
