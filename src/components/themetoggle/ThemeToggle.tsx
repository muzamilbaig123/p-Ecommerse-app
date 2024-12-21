"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/lib/hooks";
import { toggleTheme } from "@/lib/slices/themecolor/theme";


const ThemeToggle = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
        border: "1px solid #333",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
