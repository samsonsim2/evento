import { cn } from "@/lib/utils";
import React from "react";
import Skeleton from "./Skeleton";

type SkeletonProps = {
  className: string;
};

const SkeletonCard = () => {
  return (
    <div className="space-y-4">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default SkeletonCard;
