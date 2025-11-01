
"use client";

import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

type AnimatedCounterProps = {
  target: number;
  duration?: number;
  className?: string;
  postfix?: string;
};

const easeOutQuad = (t: number) => t * (2 - t);

export default function AnimatedCounter({
  target,
  duration = 4000,
  className,
  postfix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const entry = useIntersectionObserver(ref, { freezeOnceVisible: true });
  const [count, setCount] = useState(0);

  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    if (entry?.isIntersecting) {
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
  }, [entry?.isIntersecting, target, duration, isDecimal]);

  const displayValue = isDecimal ? count.toFixed(1) : count;

  return (
    <span className={className}>
      {displayValue}
      {postfix}
    </span>
  );
}
