"use client";
import React from "react";

interface IClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<IClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
