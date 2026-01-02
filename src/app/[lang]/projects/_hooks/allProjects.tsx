"use client";

import { useDictionary } from "@/hooks/useDictionary";
import { useMemo } from "react";

export function useProjects() {
  const { dictionary } = useDictionary();

  const reversedProjects = useMemo(() => {
    if (!dictionary?.projects) return [];
    return [...dictionary.projects].reverse();
  }, [dictionary?.projects]);

  return reversedProjects;
}