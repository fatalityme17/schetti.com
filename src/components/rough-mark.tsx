"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { annotate } from "rough-notation";

export function RoughMark({ children, className = "" }: { children: ReactNode; className?: string }) {
  const markRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!markRef.current) return;
    const mark = annotate(markRef.current, {
      type: "underline",
      color: "#52613b",
      strokeWidth: 2,
      iterations: 2,
      padding: 2,
      animate: false,
    });
    mark.show();
    return () => mark.remove();
  }, []);

  return (
    <span ref={markRef} className={className}>
      {children}
    </span>
  );
}
