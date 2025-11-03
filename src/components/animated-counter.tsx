
"use client";

import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  target: number;
  duration?: number;
  className?: string;
  postfix?: string;
  isInView: boolean;
};

const easeOutQuad = (t: number) => t * (2 - t);

export default function AnimatedCounter({
  target,
  duration = 2000,
  className,
  postfix = "",
  isInView,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animationFrame = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeOutQuad(progress);
        
        let currentCount;
        if (isDecimal) {
            currentCount = easedProgress * target;
        } else {
            currentCount = Math.floor(easedProgress * target);
        }

        setCount(currentCount);

        if (elapsedTime < duration) {
          requestAnimationFrame(animationFrame);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(animationFrame);
    }
  }, [isInView, target, duration, isDecimal]);

  const displayValue = isDecimal ? count.toFixed(1) : count;

  return (
    <span className={className}>
      {displayValue}
      {postfix}
    </span>
  );
}
