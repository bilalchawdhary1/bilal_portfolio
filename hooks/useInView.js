"use client";

import {useInView as useFramerInView} from "framer-motion";
import {useEffect, useState, useRef} from "react";

export const useInView = (options = {}) => {
  const [isClient, setIsClient] = useState(false);
  const ref = useRef(null);

  // Always call useFramerInView to maintain hook order, but disable it on server
  const inView = useFramerInView(ref, {
    ...options,
    // Disable the hook on server side
    disabled: !isClient,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return {ref, isInView: isClient ? inView : false};
};
