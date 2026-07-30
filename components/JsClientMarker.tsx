"use client";

import { useEffect } from "react";

export default function JsClientMarker() {
  useEffect(() => {
    try {
      document.documentElement.classList.add("js");
    } catch (e) {
      // ignore
    }
  }, []);
  return null;
}
