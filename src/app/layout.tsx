import "@/globals.css";
import { Viewport } from "next";
import clsx from "clsx";
import { PropsWithChildren } from "react";

import { ThemeProviders } from "@/theme-providers";
import { fontSans } from "@/fonts";

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body
                className={clsx(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                )}
            >
                <ThemeProviders
                    themeProps={{ attribute: "class", defaultTheme: "dark" }}
                >
                    {children}
                </ThemeProviders>
            </body>
        </html>
    );
}
