import { PropsWithChildren } from "react";
import "@/globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body>{children}</body>
        </html>
    );
}
