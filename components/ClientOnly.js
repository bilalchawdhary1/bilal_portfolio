"use client";

import {useEffect, useState} from "react";

const ClientOnly = ({children, fallback = null}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback || <div className='min-h-screen bg-white' />;
  }

  return children;
};

export default ClientOnly;
