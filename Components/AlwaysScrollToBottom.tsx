import { useEffect, useRef } from "react";

const AlwaysScrollToBottom = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (elementRef.current) elementRef.current.scrollIntoView();
  });
  return <div ref={elementRef} />;
};

export default AlwaysScrollToBottom;
