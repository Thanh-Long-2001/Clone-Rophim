import React from "react";
import { Content1 } from "./Content1";
import { Content2 } from "./Content2";
import { Content3 } from "./Content3";
import { Content4 } from "./Content4";
import { SocialInfo } from "./SocialInfo";

export const Wrapper = () => {
  return (
    <div className="flex flex-col gap-12.5 -mt-25 relative z-6">
      <Content1 />
      <Content2 />
      <SocialInfo />
      <Content3 />
      <Content4 />
    </div>
  );
};
