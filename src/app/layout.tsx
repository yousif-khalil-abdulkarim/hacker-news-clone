import "@/globals.css";

import { SiYcombinator } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { Navbar } from "@/components/sections/navbar/default";
import { Navigation } from "@/components/ui/navigation";

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body className="p-0 m-0">
                <Navbar
                    customNavigation={
                        <Navigation
                            menuItems={[
                                {
                                    title: "Ask",
                                    href: "/ask",
                                },
                                {
                                    title: "Best",
                                    href: "/best",
                                },
                                {
                                    title: "Show",
                                    href: "/show",
                                },
                                {
                                    title: "Top",
                                    href: "/top",
                                },
                            ]}
                        />
                    }
                    homeUrl="/top"
                    logo={<SiYcombinator />}
                    name="Hacker news"
                />
                <main className="max-w-6xl w-full mx-auto px-4 py-3">
                    {children}
                </main>
            </body>
        </html>
    );
}
