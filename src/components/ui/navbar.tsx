import * as React from "react";

import { cn } from "@/lib/utils";

export function Navbar({ className, ...props }: React.ComponentProps<"nav">) {
    return (
        <nav
            className={cn("flex items-center justify-between py-4", className)}
            data-slot="navbar"
            {...props}
        />
    );
}

export function NavbarCenter({
    className,
    ...props
}: React.ComponentProps<"nav">) {
    return (
        <nav
            className={cn("flex items-center justify-center gap-4", className)}
            data-slot="navbar-center"
            {...props}
        />
    );
}
