"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProviderPrimitive,
  useTheme as useNextThemeHook,
} from "next-themes";
import type { ThemeProviderProps as NextThemesProviderPrimitiveProps } from "next-themes";

export type ThemeProviderProps = NextThemesProviderPrimitiveProps;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProviderPrimitive {...props}>
      {children}
    </NextThemesProviderPrimitive>
  );
}

export const useTheme = useNextThemeHook;
