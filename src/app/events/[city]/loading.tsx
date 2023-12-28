import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center flex-wrap max-w-[1100px] mx-auto px-[20px] py-24 gap-20">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export default Loading;
