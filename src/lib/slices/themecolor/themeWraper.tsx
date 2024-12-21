"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "@/lib/slices/themecolor/theme";
import { useAppSelector } from "@/lib/hooks";




const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  // Check localStorage and sync theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const shouldBeDark = savedTheme === "dark";
      if (shouldBeDark !== isDarkMode) {
        dispatch(toggleTheme());
      }
    }
  }, [dispatch, isDarkMode]);

  // Apply the theme to the document and save it to localStorage
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return <>{children}</>;
};

export default ThemeProvider;
