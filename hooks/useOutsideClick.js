import { useEffect } from "react";

export default function useOutsideClick(ref, exceptionId, cb) {
  useEffect(() => {
    function handleOutsideClcik(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.id !== exceptionId
      ) {
        cb();
      }
    }
    document.addEventListener("mousedown", handleOutsideClcik);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClcik);
    };
  }, [ref, cb]);
}
