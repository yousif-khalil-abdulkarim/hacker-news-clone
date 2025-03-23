import { Menu } from "lucide-react";
import { ReactNode } from "react";
import { SiYcombinator } from "@icons-pack/react-simple-icons";
import Link from "next/link";

import Navigation from "@/components/ui/navigation";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
    Navbar as NavbarComponent,
    NavbarLeft,
    NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavbarLink {
    text: string;
    href: string;
}

interface NavbarActionProps {
    text: string;
    href: string;
    variant?: ButtonProps["variant"];
    icon?: ReactNode;
    iconRight?: ReactNode;
    isButton?: boolean;
}

interface NavbarProps {
    logo?: ReactNode;
    name?: string;
    homeUrl?: string;
    mobileLinks?: NavbarLink[];
    actions?: NavbarActionProps[];
    showNavigation?: boolean;
    customNavigation?: ReactNode;
}

export default function Navbar({
    logo = <SiYcombinator />,
    name = "Hacker news",
    homeUrl = "https://www.launchuicomponents.com/",
    mobileLinks = [
        {
            text: "Getting Started",
            href: "https://www.launchuicomponents.com/",
        },
        { text: "Components", href: "https://www.launchuicomponents.com/" },
        { text: "Documentation", href: "https://www.launchuicomponents.com/" },
    ],
    actions = [
        {
            text: "Sign in",
            href: "https://www.launchuicomponents.com/",
            isButton: false,
        },
        {
            text: "Get Started",
            href: "https://www.launchuicomponents.com/",
            isButton: true,
            variant: "default",
        },
    ],
    showNavigation = true,
    customNavigation,
}: NavbarProps) {
    return (
        <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
            <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg" />
            <div className="max-w-container relative mx-auto">
                <NavbarComponent>
                    <NavbarLeft>
                        <Link
                            className="flex items-center gap-2 text-xl font-bold"
                            href={homeUrl}
                        >
                            {logo}
                            {name}
                        </Link>
                        {showNavigation && (customNavigation || <Navigation />)}
                    </NavbarLeft>
                    <NavbarRight>
                        {actions.map((action, index) =>
                            action.isButton ? (
                                <Button
                                    key={index}
                                    asChild
                                    variant={action.variant || "default"}
                                >
                                    <Link href={action.href}>
                                        {action.icon}
                                        {action.text}
                                        {action.iconRight}
                                    </Link>
                                </Button>
                            ) : (
                                <Link
                                    key={index}
                                    className="hidden text-sm md:block"
                                    href={action.href}
                                >
                                    {action.text}
                                </Link>
                            ),
                        )}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    className="shrink-0 md:hidden"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <Menu className="size-5" />
                                    <span className="sr-only">
                                        Toggle navigation menu
                                    </span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <nav className="grid gap-6 text-lg font-medium">
                                    <Link
                                        className="flex items-center gap-2 text-xl font-bold"
                                        href={homeUrl}
                                    >
                                        <span>{name}</span>
                                    </Link>
                                    {mobileLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            className="text-muted-foreground hover:text-foreground"
                                            href={link.href}
                                        >
                                            {link.text}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </NavbarRight>
                </NavbarComponent>
            </div>
        </header>
    );
}
