import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="relative w-10 h-10 animate-spin">
        <Image alt="Logo" fill src={"/logo.png"} />
      </div>
      <p className="text-sm  muted-foreground">Your content is generating...</p>
    </div>
  );
};

export default Loader;
