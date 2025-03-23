import { PropsWithChildren } from "react";

import "@/globals.css";
import Navbar from "@/components/sections/navbar/default";

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
