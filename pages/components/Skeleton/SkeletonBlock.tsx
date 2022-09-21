import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";

export const SkeletonBlock: FC = () => {
  return (
    <div style={{ marginBottom: 10 }}>
      <Skeleton height={20} style={{ margin: 5, marginLeft: 15 }} width={185} />
      <Skeleton height={15} style={{ marginLeft: 35 }} width={165} />
      <Skeleton height={15} style={{ marginLeft: 35 }} width={165} />
      <Skeleton height={15} style={{ marginLeft: 35 }} width={165} />
    </div>
  );
};
