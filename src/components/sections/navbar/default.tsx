import { ReactNode } from "react";
import Link from "next/link";

import {
    Navbar as UINavbar,
    NavbarCenter as UINavbarCenter,
} from "@/components/ui/navbar";

export interface NavbarProps {
    logo: ReactNode;
    name: string;
    homeUrl: string;
    customNavigation: ReactNode;
}

export function Navbar({ logo, name, homeUrl, customNavigation }: NavbarProps) {
    return (
        <header className="sticky top-0 z-50 border-b-2 border-border">
            <div className="fade-bottom absolute inset-0 w-full backdrop-blur-lg" />
            <div className="max-w-6xl w-full relative mx-auto px-4 py-3">
                <UINavbar>
                    <Link
                        className="flex items-center gap-2 text-xl font-bold"
                        href={homeUrl}
                    >
                        {logo}
                        {name}
                    </Link>
                    <UINavbarCenter className="mx-auto">
                        {customNavigation}
                    </UINavbarCenter>
                </UINavbar>
            </div>
        </header>
    );
}
