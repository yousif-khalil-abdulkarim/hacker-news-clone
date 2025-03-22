"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export interface ThemeProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
    interface RouterConfig {
        routerOptions: NonNullable<
            Parameters<ReturnType<typeof useRouter>["push"]>[1]
        >;
    }
}

export function ThemeProviders({ children, themeProps }: ThemeProvidersProps) {
    const router = useRouter();

    return (
        <HeroUIProvider
            navigate={(...args) => {
                router.push(...args);
            }}
        >
            <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </HeroUIProvider>
    );
}
