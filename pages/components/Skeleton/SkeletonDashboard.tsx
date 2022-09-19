import React, { FC } from "react";
import { SkeletonBlock } from "./SkeletonBlock";

export const MySkeleton: FC = () => {
  return (
    <div>
      <SkeletonBlock />
      <SkeletonBlock />
      <SkeletonBlock />
    </div>
  );
};
