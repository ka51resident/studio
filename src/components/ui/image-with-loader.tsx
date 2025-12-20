// src/components/ui/image-with-loader.tsx
"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

type ImageWithLoaderProps = ImageProps & {
  wrapperClassName?: string;
};

export default function ImageWithLoader({
  className,
  wrapperClassName,
  onLoad,
  ...props
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    if (onLoad) {
      onLoad(e);
    }
  };

  return (
    <div className={cn("relative overflow-hidden rounded-lg", wrapperClassName)}>
      {isLoading && (
        <Skeleton className="absolute inset-0" />
      )}
      <Image
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
}
