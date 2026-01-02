"use client"; 

import { DictionaryContext } from "@/context/DictionaryProvider";
import { useContext } from "react";

export const useDictionary = () => {
    const context = useContext(DictionaryContext);
    if (!context) {
      throw new Error("useDictionary must be used within a DictionaryProvider");
    }
    return context;
};