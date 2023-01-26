import React, { useRef, useEffect } from "react";

interface Props {
  ref: React.MutableRefObject<any>;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useOutsideAlerter = ({ ref, setter }: Props) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setter(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setter]);
};
export default useOutsideAlerter;
