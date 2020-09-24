import React, { useState, useRef, useEffect } from 'react';

export default function Sticky({
  className,
  children,
  enabled = true,
}) {
  const [sticky, setSticky] = useState(false);
  const ref = useRef();
  const top = useRef(0);

  useEffect(() => {
    const checkPosition = () => {
      if (ref.current) {
        if (!top.current) {
          top.current = ref.current.offsetTop + ref.current.offsetHeight;
        }
        const state = window.pageYOffset > top.current;
        if (sticky !== state) {
          setSticky(state);
        }
      }
    };

    checkPosition();

    if (enabled) {
      window.addEventListener('scroll', checkPosition);
    }

    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  }, [sticky, enabled]);

  return (
    <div
      ref={ref}
      data-sticky={sticky}
      className={sticky ? className : null}
      style={sticky ? { width: ref?.current?.clientWidth } : null}
    >
      {children}
    </div>
  );
}
