"use clienr";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("65579960-e645-48f5-9d23-5f6edb0c467a");
  }, []);

  return null;
};
