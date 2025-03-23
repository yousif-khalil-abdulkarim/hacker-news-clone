import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body>{children}</body>
        </html>
    );
}
