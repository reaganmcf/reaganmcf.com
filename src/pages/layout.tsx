import React, { PropsWithChildren } from "react";
import IsometricDotBackground from "./../components/isometric-dot-background";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <IsometricDotBackground />
      <div className="flex w-full justify-center min-w-screen-md max-w-screen-lg mx-auto" >{children}</div>
    </>
  );
};

export default PageLayout;
