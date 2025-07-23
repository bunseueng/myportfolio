import {
  animate,
  KeyframeOptions,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import React, { useRef } from "react";

interface AnimationCounterProps {
  from: number;
  to: number;
  animationOption?: KeyframeOptions;
}

const AnimationCounter = ({
  from,
  to,
  animationOption,
}: AnimationCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!isInView) return;

    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: 2.5,
      ease: "easeOut",
      ...animationOption,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, isInView, from, to]);
  return <span ref={ref} />;
};

export default AnimationCounter;
