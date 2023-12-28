import { cn } from "@/lib/utils";
import React from "react";

type SkeletonProps = {
  className?: string;
};

const Skeleton = ({ className }: SkeletonProps) => {
  return <div className="animate-pulse h-4 w-[300px] rounded-md bg-white/5" />;
};

export default Skeleton;
